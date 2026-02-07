const AudioEngine = {
    ctx: null,
    isMuted: true,
    lastVolume: 0.2,

    init: function() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    },

    toggleMute: function() {
        this.init();
        this.isMuted = !this.isMuted;

        const audioTag = document.getElementById('bg-music');
        const iconMute = document.getElementById('icon-mute');
        const iconPlay = document.getElementById('icon-play');
        const audioBtn = document.getElementById('audio-btn');
        const audioStatus = document.getElementById('audio-status');
        const audioHint = document.getElementById('audio-hint');
        const slider = document.getElementById('volume-slider');

        if (this.isMuted) {
            if (audioTag) audioTag.pause();
            if (iconMute) iconMute.classList.remove('hidden');
            if (iconPlay) iconPlay.classList.add('hidden');
            if (audioBtn) audioBtn.setAttribute('aria-pressed', 'false');
            if (audioStatus) audioStatus.textContent = '背景音乐已静音';
            if (audioHint) audioHint.classList.add('hidden');
            if (slider) {
                const current = parseFloat(slider.value);
                if (current > 0) {
                    this.lastVolume = current;
                }
                slider.value = 0;
                updateVolumeDisplay(0);
            }
        } else {
            if (slider) {
                const targetVolume = parseFloat(slider.value) || this.lastVolume || 0.2;
                slider.value = targetVolume;
                updateVolumeDisplay(targetVolume);
                if (audioTag) audioTag.volume = targetVolume;
            }

            if (audioTag) {
                const playPromise = audioTag.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            if (audioHint) audioHint.classList.add('hidden');
                        })
                        .catch(error => {
                            console.log("自动播放被阻止，需用户交互:", error);
                            if (audioHint) audioHint.classList.remove('hidden');
                        });
                }
            }

            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }

            if (iconMute) iconMute.classList.add('hidden');
            if (iconPlay) iconPlay.classList.remove('hidden');
            if (audioBtn) audioBtn.setAttribute('aria-pressed', 'true');
            if (audioStatus) audioStatus.textContent = '背景音乐正在播放';
        }
    },

    playAmbience: function() {
        if (!this.isMuted) {
            const audioTag = document.getElementById('bg-music');
            if (audioTag && audioTag.paused) audioTag.play().catch(() => {});
        }
    },

    playSplash: function() {
        if (this.isMuted) return;
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const t = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const gainOsc1 = this.ctx.createGain();
        const filterOsc1 = this.ctx.createBiquadFilter();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(280, t);
        osc1.frequency.exponentialRampToValueAtTime(70, t + 0.2);

        gainOsc1.gain.setValueAtTime(0.7, t);
        gainOsc1.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

        filterOsc1.type = 'lowpass';
        filterOsc1.frequency.setValueAtTime(400, t);

        osc1.connect(gainOsc1);
        gainOsc1.connect(filterOsc1);
        filterOsc1.connect(this.ctx.destination);

        osc1.start(t);
        osc1.stop(t + 0.3);

        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.2, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < buffer.length; i++) {
            data[i] = (Math.random() * 2 - 1) * (1 - i / buffer.length);
        }
        noise.buffer = buffer;

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.6, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);

        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(900, t);

        noise.connect(noiseGain);
        noiseGain.connect(noiseFilter);
        noiseFilter.connect(this.ctx.destination);

        noise.start(t);
        noise.stop(t + 0.2);
    }
};

function updateVolumeDisplay(value) {
    const volumeValue = document.getElementById('volume-value');
    const slider = document.getElementById('volume-slider');
    const percent = Math.round(parseFloat(value) * 100);
    if (volumeValue) volumeValue.textContent = `${percent}%`;
    if (slider) slider.setAttribute('aria-valuetext', `${percent}%`);
}

window.toggleAudio = function() {
    AudioEngine.toggleMute();
};

window.changeVolume = function(val) {
    const audio = document.getElementById('bg-music');
    const volume = parseFloat(val);
    if (audio) {
        audio.volume = volume;
    }
    updateVolumeDisplay(volume);
    if (AudioEngine.isMuted && volume > 0) {
        AudioEngine.toggleMute();
    }
};

window.AudioEngine = AudioEngine;

window.addEventListener('load', () => {
    const slider = document.getElementById('volume-slider');
    if (slider) {
        updateVolumeDisplay(slider.value);
    }
});
