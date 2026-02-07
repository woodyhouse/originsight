// --- 题库 v5.0：灵魂拷问版 (基于“奇幻日”深度逻辑) ---
    const questions = [
        // ==================== 第一阶段：生存策略与家庭结构 (The Imprint) ====================
        { 
            id: 1, 
            scene: "金钱与爱", 
            text: "童年时，当你需要钱或者想买一样喜欢的东西时，父母通常的反应是？", 
            options: [ 
                { text: "直接满足，并告诉我“我们赚钱就是为了让你过得好”。", score: { secure: 2, deservability: 2 } }, 
                { text: "可以买，但必须以“考到好成绩”或“听话”为交换条件。", score: { anxiety: 2, conditionalLove: 3 } }, 
                { text: "一边给钱一边诉苦：“我们舍不得吃穿全给你了，你要懂事啊”。", score: { guilt: 3, rescuer: 2, anxiety: 1 } }, 
                { text: "习惯性拒绝，并羞辱我的欲望：“你怎么这么虚荣/浪费？”", score: { trauma: 2, shame: 3, avoid: 1 } },
                { text: "我会尽量不提需求，因为不想看到他们为难或吵架的样子。", score: { avoid: 2, sentinel: 2 } } 
            ] 
        },
        { 
            id: 2, 
            scene: "父亲的位阶", 
            text: "在那个家里，关于“父亲”这个角色，你最真实的身体记忆是？", 
            options: [ 
                { text: "他是一座山，既有力量保护我，也能温和地沟通。", score: { secure: 2 } }, 
                { text: "他是“隐形人”，除了赚钱或看电视，几乎在情感上缺席。", score: { avoid: 2, absentFather: 3, neglect: 1 } }, 
                { text: "他是母亲抱怨的对象，我感觉我必须代替他去安抚母亲的情绪。", score: { parentification: 3, spiritualHusband: 3, anxiety: 2 } }, 
                { text: "他是恐惧的来源，全家人都要战战兢兢地围着他的情绪转。", score: { trauma: 3, fear: 2, sentinel: 2 } },
                { text: "他很严厉，只有当我足够优秀时，他才会正眼看我。", score: { superReason: 2, perfectionism: 2 } }
            ] 
        },
        { 
            id: 3, 
            scene: "情绪的垃圾桶", 
            text: "当母亲（或抚养者）向你诉苦，说她过得有多不幸时，你的感觉是？", 
            options: [ 
                { text: "这种情况很少发生，大人的事他们自己解决。", score: { secure: 2, boundary: 2 } }, 
                { text: "极其沉重，觉得是因为我不够好，才让妈妈这么辛苦。", score: { shame: 2, rescuer: 3, anxiety: 2 } }, 
                { text: "愤怒又无力，想逃离但又觉得那是背叛，内心被撕裂。", score: { chaos: 2, guilt: 2 } }, 
                { text: "麻木，左耳进右耳出，学会了自动屏蔽。", score: { avoid: 3, numb: 2 } },
                { text: "我会理性地帮她分析对错，像个小大人一样给她出主意。", score: { superReason: 3, parentification: 2 } }
            ] 
        },
        { 
            id: 4, 
            scene: "被阉割的生命力", 
            text: "当你表现出想要争第一、想要赢，或者对某样东西表现出极强占有欲时？", 
            options: [ 
                { text: "父母会鼓励我的野心，告诉我“去争取吧”。", score: { secure: 2, blackVitality: 2 } }, 
                { text: "会被打压：“枪打出头鸟，做人要低调/老实点。”", score: { avoid: 2, repress: 3 } }, 
                { text: "会被嘲讽：“就凭你？别做梦了。”", score: { trauma: 2, shame: 2 } }, 
                { text: "他们不在乎我想赢什么，只在乎我赢了能不能给他们长脸。", score: { narcissism: 2, objectified: 2 } },
                { text: "我会下意识地把这种欲望藏起来，表现得“与世无争”。", score: { placate: 3, mask: 2 } }
            ] 
        },
        { 
            id: 5, 
            scene: "犯错的审判", 
            text: "如果不小心打碎了贵重物品，在那一瞬间，你下意识的反应是？", 
            options: [ 
                { text: "有点慌，但知道如实说出来会被原谅。", score: { secure: 2 } }, 
                { text: "脑子一片空白，觉得自己“死定了”，恐惧感瞬间淹没全身。", score: { trauma: 3, fear: 3 } }, 
                { text: "立刻想借口推卸责任，或者撒谎说是别人弄的。", score: { avoid: 2, defense: 2 } }, 
                { text: "疯狂地想办法弥补或清理，试图在他们发现前抹去痕迹。", score: { anxiety: 2, perfectionism: 2, sentinel: 1 } },
                { text: "准备好迎接一场长达数小时的说教和羞辱。", score: { avoid: 1, shame: 2 } }
            ] 
        },
        { 
            id: 6, 
            scene: "隐私与边界", 
            text: "关于你的日记本、手机或房门，真实的状况是？", 
            options: [ 
                { text: "我有绝对的隐私，他们进门前会敲门并等待。", score: { secure: 2 } }, 
                { text: "房门不能锁，锁了就是“心里有鬼”或“不把父母当人”。", score: { intrusion: 3, enmesh: 2 } }, 
                { text: "名义上有隐私，但他们会趁我不在时翻看，美其名曰“关心”。", score: { anxiety: 2, trustIssues: 2 } }, 
                { text: "他们根本不关注我在干嘛，我消失一天也没人发现。", score: { avoid: 2, neglect: 3 } },
                { text: "我学会了反侦察，把秘密藏在他们绝对想不到的地方。", score: { independent: 2, avoid: 1 } }
            ] 
        },

        // ==================== 第二阶段：成年投射与代偿 (The Pattern) ====================
        { 
            id: 7, 
            scene: "关系的载体", 
            text: "在一段亲密关系中，你最底层的心理动力往往是？", 
            options: [ 
                { text: "分享生活，共同成长，彼此独立。", score: { secure: 2 } }, 
                { text: "像溺水的人抓住浮木，对方的认可让我感到“我还活着”。", score: { anxiety: 3, aliveCarrier: 3 } }, 
                { text: "保持安全距离，对方靠得太近会让我感到被吞噬/窒息。", score: { avoid: 3, spiritualIndependence: 2 } }, 
                { text: "一种随时准备好被抛弃的警觉，所以我从不投入百分百的真心。", score: { fear: 3, distrust: 2, trauma: 1 } },
                { text: "通过不断地照顾/拯救对方，来确认自己的价值。", score: { placate: 2, rescuer: 3 } }
            ] 
        },
        { 
            id: 8, 
            scene: "成熟的执念", 
            text: "想到那些年父母对你的伤害，你现在的真实态度是？", 
            options: [ 
                { text: "已经释然，我不再期待他们的道歉，我的未来由我定义。", score: { secure: 2, maturity: 3 } }, 
                { text: "一直耿耿于怀，渴望听到他们亲口承认当年错了，渴望被补偿。", score: { anxiety: 3, expectation: 2 } }, 
                { text: "完全不愿提起，强迫自己不去想，但这成了我内心的雷区。", score: { avoid: 2, suppress: 3 } }, 
                { text: "通过不断地贬低他们或惩罚自己，来发泄那种愤怒。", score: { trauma: 2, anger: 2 } },
                { text: "觉得他们也是受害者，试图用“爱”去感化或拯救他们。", score: { placate: 2, rescuer: 2 } }
            ] 
        },
        { 
            id: 9, 
            scene: "能量消耗", 
            text: "处理深层的情感交流（如谈心、解决冲突）对你来说？", 
            options: [ 
                { text: "虽然有挑战，但能带来能量和更深的亲密度。", score: { secure: 2 } }, 
                { text: "是一场消耗巨大的马拉松，我只想快点结束，逃回自己的洞穴。", score: { avoid: 3, energyDrain: 2 } }, 
                { text: "是一场审判，我非常害怕自己说错话被对方否定/抛弃。", score: { anxiety: 3, fear: 1 } }, 
                { text: "我只会分析逻辑，无法理解为什么这种事要搞得这么情绪化。", score: { superReason: 3, numb: 2 } },
                { text: "我会先发制人，用愤怒或指责来防御，避免自己受伤。", score: { blame: 2, defense: 2 } }
            ] 
        },
        { 
            id: 10, 
            scene: "面对愤怒", 
            text: "在亲密关系中，如果你感到愤怒或不满，通常会怎么做？", 
            options: [ 
                { text: "直接表达我的愤怒和原因，寻求解决。", score: { secure: 2, blackVitality: 1 } }, 
                { text: "把愤怒压下去，生闷气（冷暴力），希望对方能猜到并来哄我。", score: { anxiety: 2, passiveAggressive: 3 } }, 
                { text: "立刻切断联系，像刺猬一样缩起来，直到心情平复。", score: { avoid: 3, control: 1 } }, 
                { text: "瞬间爆发，说很多伤人的话，事后又陷入深深的后悔。", score: { chaos: 2, fear: 1 } },
                { text: "笑着说“没事”，但在心里默默扣分，扣完就离开。", score: { avoid: 2, mask: 2 } }
            ] 
        },
        { 
            id: 11, 
            scene: "求助机制", 
            text: "当你遇到难以独自解决的困难时，向别人开口求助对你来说？", 
            options: [ 
                { text: "很自然，我相信这不会破坏关系，我也乐意帮回去。", score: { secure: 2 } }, 
                { text: "极难，我觉得那是示弱，或者不想欠人情，宁愿自己扛。", score: { avoid: 3, independent: 3 } }, 
                { text: "我会反复确认对方是否方便，极其怕给人添麻烦，觉得自己是个负担。", score: { anxiety: 2, placate: 3, shame: 1 } }, 
                { text: "我只向特定的人求助，且如果被拒绝，我会觉得被全世界抛弃。", score: { depend: 3, fear: 2 } },
                { text: "我会用金钱或利益交换来解决，这样互不相欠最安全。", score: { superReason: 2, transaction: 2 } }
            ] 
        },
        { 
            id: 12, 
            scene: "甚至不敢快乐", 
            text: "当你无所事事地躺着，或者正在享受纯粹的娱乐时，你会感到？", 
            options: [ 
                { text: "放松和惬意，这是我应得的休息。", score: { secure: 2, deservability: 2 } }, 
                { text: "莫名的焦虑，觉得我应该去做点“正事”，否则就被落下了。", score: { anxiety: 2, perfectionism: 2 } }, 
                { text: "空虚，不知道如果不工作/学习，如果不“有用”，我是谁。", score: { numb: 2, lowSelfEsteem: 2 } }, 
                { text: "一种隐隐的罪恶感，仿佛我过得太舒服是对辛苦父母的背叛。", score: { guilt: 3, enmesh: 2 } },
                { text: "我会强迫自己看有教育意义的纪录片，连休息都要“有意义”。", score: { superReason: 2, control: 2 } }
            ] 
        },

        // ==================== 第三阶段：自我重构 (The Reconstruction) ====================
        { 
            id: 13, 
            scene: "身体的记忆", 
            text: "对于他人的肢体触碰（如拥抱、拍肩、靠近），你的本能反应是？", 
            options: [ 
                { text: "感到自然温暖，能通过接触获得能量。", score: { secure: 2 } }, 
                { text: "僵硬、不自在，本能地想躲闪，哪怕是熟人。", score: { avoid: 3, trauma: 1 } }, 
                { text: "渴望拥抱，但又不敢主动索取，怕被拒绝。", score: { anxiety: 2, shame: 1 } }, 
                { text: "如果是非常亲密的人可以，但不喜欢突如其来的触碰。", score: { secure: 1, boundary: 1 } },
                { text: "我可以礼貌性地拥抱，但内心其实是麻木的，像在完成社交任务。", score: { mask: 3, numb: 1 } }
            ] 
        },
        { 
            id: 14, 
            scene: "全天候哨兵", 
            text: "如果身边的人（伴侣/同事）看起来脸色不好或叹气，你的第一反应是？", 
            options: [ 
                { text: "询问发生了什么，并给予适当的关心，但不觉得是我的错。", score: { secure: 2, boundary: 2 } }, 
                { text: "瞬间紧张，下意识反思是不是我做错了什么，开始内耗。", score: { anxiety: 3, sentinel: 3, placate: 2 } }, 
                { text: "感到厌烦或压力，想要躲开，不想被负能量传染。", score: { avoid: 2, dismissive: 2 } }, 
                { text: "理性分析他为什么不高兴，并试图帮他解决问题（而非处理情绪）。", score: { superReason: 3 } },
                { text: "我会假装没看见，继续做我的事，但心里其实在时刻警惕。", score: { protect: 2, avoid: 1 } }
            ] 
        },
        { 
            id: 15, 
            scene: "控制与失控", 
            text: "当生活出现突发变故，事情完全脱离你的计划时？", 
            options: [ 
                { text: "接纳变化，寻找新的解决办法。", score: { secure: 2 } }, 
                { text: "极度抓狂，必须立刻找人抱怨或倾诉才能平复。", score: { anxiety: 3, depend: 1 } }, 
                { text: "愤怒，指责是谁导致了这个问题，必须有人负责。", score: { blame: 3, control: 2 } }, 
                { text: "感到无助和绝望，觉得一切都完了，陷入瘫痪状态。", score: { trauma: 2, helplessness: 3 } },
                { text: "情感隔离，迅速启动B计划，像个机器人一样处理危机。", score: { superReason: 3, suppress: 2 } }
            ] 
        },
        { 
            id: 16, 
            scene: "代际恐惧", 
            text: "如果未来你有了孩子（或者想象你有），你最害怕自己成为什么样的父母？", 
            options: [ 
                { text: "我有信心能打破循环，做一个足够好的父母。", score: { secure: 2, breakCycle: 3 } }, 
                { text: "害怕自己在情绪失控时，露出和当年父母一模一样的狰狞神情。", score: { trauma: 3, reflection: 2 } }, 
                { text: "害怕自己无法与孩子亲近，甚至对孩子感到冷漠和厌烦。", score: { avoid: 2, numb: 2 } }, 
                { text: "害怕由于过度溺爱/保护，让孩子变成像我一样软弱的人。", score: { anxiety: 2, control: 1 } },
                { text: "我可能会用严格的规则和逻辑来养育他，避免过多情感纠葛。", score: { superReason: 2, avoid: 1 } }
            ] 
        },
        { 
            id: 17, 
            scene: "自我评价", 
            text: "夜深人静时，剥离掉学历、工作、财富这些外在标签，你觉得你是谁？", 
            options: [ 
                { text: "一个值得被爱、本身就有价值的人。", score: { secure: 3, selfEsteem: 2 } }, 
                { text: "一个如果不努力、不优秀，就一无是处的冒牌货。", score: { anxiety: 2, imposter: 3 } }, 
                { text: "一个麻烦，总是在给别人造成负担，或者不被需要的人。", score: { shame: 3, lowSelfEsteem: 2 } }, 
                { text: "一个孤独的观察者，不需要任何人也能过得很好。", score: { avoid: 2, independent: 2 } },
                { text: "我不知道自己是谁，感觉内心空荡荡的。", score: { numb: 3, neglect: 2 } }
            ] 
        },
        { 
            id: 18, 
            scene: "信任的交付", 
            text: "把你的后背（最脆弱的一面）完全交给另一个人，对你来说？", 
            options: [ 
                { text: "我有几个绝对信任的人，可以完全放松。", score: { secure: 3 } }, 
                { text: "我很难完全信任，总觉得别人最终会辜负我/离开我。", score: { anxiety: 2, abandonment: 3 } }, 
                { text: "只要不期待，就不会失望，所以我从不把希望寄托在人身上。", score: { avoid: 3, numb: 1 } }, 
                { text: "我会不断测试对方的忠诚度，直到对方受不了离开（验证了我的预言）。", score: { chaos: 3, fear: 2 } },
                { text: "我相信契约和利益交换，那比感情稳固得多。", score: { superReason: 2, transaction: 2 } }
            ] 
        }
    ];

    // --- 答题引擎 v2.0 (多选支持版) ---
    let currentQIndex = 0;
    let userScores = { secure: 0, anxiety: 0, avoid: 0, trauma: 0, placate: 0, blame: 0, distract: 0, superReason: 0, intrusion: 0, neglect: 0, shame: 0 };
    let currentSelections = new Set(); // 用于存储当前题目选中的选项索引

    // 初始化加载
    window.addEventListener('load', () => {
        const savedResult = localStorage.getItem('originsight_result');
        const btn = document.getElementById('nav-btn');
        if (savedResult && btn) {
            btn.innerText = "查看上次报告";
            btn.onclick = loadSavedReport;
        }
        for(let i=0; i<6; i++) setTimeout(spawnWord, i * 600);
        setInterval(spawnWord, 1000);
    });

    // --- 补上这个缺失的函数，修复浮动字体消失的问题 ---
    function loadSavedReport() {
        const savedData = localStorage.getItem('originsight_result');
        if (!savedData) return;

        try {
            const parsed = JSON.parse(savedData);
            userScores = parsed.scores; // 恢复分数
            generateReport(); // 重新生成报告
            
            // 跳转到报告页
            document.querySelectorAll('main').forEach(el => el.classList.add('hidden'));
            document.getElementById('page-report').classList.remove('hidden');
            window.scrollTo(0,0);
        } catch (e) {
            console.error("存档损坏", e);
            localStorage.removeItem('originsight_result');
            location.reload();
        }
    }

    function startQuiz() {
        switchPage('landing', 'quiz');
        renderQuestion(0);
        if (AudioEngine.isMuted) AudioEngine.toggleMute();
    }

// ✅ 修复后的渲染题目函数
    function renderQuestion(index) {
        const q = questions[index];
        const container = document.getElementById('quiz-container');
        document.getElementById('progress-bar').style.width = `${((index) / questions.length) * 100}%`;
        
        // 每一题开始前，清空选中状态
        currentSelections.clear();

        container.innerHTML = `
            <div class="fade-in-up pb-32">
                <div class="mb-8">
                    <span class="text-xs font-bold text-[#5B7C99] uppercase tracking-widest mb-2 block">SCENE ${index + 1 < 10 ? '0'+(index+1) : index+1}</span>
                    <h2 class="text-2xl md:text-3xl font-bold text-[#2c3e50] leading-snug serif mb-3">${q.text}</h2>
                    <p class="text-sm text-[#5B7C99] bg-blue-50 inline-block px-3 py-1 rounded-full font-medium">✨ 可多选，选完点击下方确认</p>
                </div>
                
                <div class="grid gap-4">
                    ${q.options.map((opt, i) => `
                        <div id="opt-${i}" onclick="toggleSelection(${i})" class="spotlight-card group relative bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm cursor-pointer transition-all duration-300 transform hover:scale-[1.01] select-none flex items-center gap-4">
                            <div id="checkbox-${i}" class="w-6 h-6 min-w-[24px] rounded-full border-2 border-gray-200 flex items-center justify-center transition-all duration-300">
                                <div class="w-3 h-3 bg-white rounded-full opacity-0 transition-opacity scale-0" style="transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"></div>
                            </div>
                            <div class="text-base text-gray-600 font-medium transition duration-300">${opt.text}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="fixed bottom-8 left-0 w-full px-6 flex justify-center z-50 pointer-events-none">
                    <button id="next-btn" onclick="confirmAndNext()" class="pointer-events-auto bg-[#2c3e50] text-white text-lg px-12 py-4 rounded-full font-bold shadow-xl shadow-blue-900/20 hover:bg-[#5B7C99] transition-all duration-500 transform translate-y-24 opacity-0 flex items-center gap-2">
                        <span>确认选好了</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>`;
    }

    // 处理多选点击
    window.toggleSelection = function(i) {
        const card = document.getElementById(`opt-${i}`);
        const checkbox = document.getElementById(`checkbox-${i}`);
        const dot = checkbox.querySelector('div');
        const nextBtn = document.getElementById('next-btn');

        if (currentSelections.has(i)) {
            // 取消选中
            currentSelections.delete(i);
            // 样式还原
            card.classList.remove('border-[#5B7C99]', 'bg-blue-50/40', 'ring-1', 'ring-[#5B7C99]/30');
            card.classList.add('border-gray-100');
            checkbox.classList.remove('bg-[#5B7C99]', 'border-[#5B7C99]');
            checkbox.classList.add('border-gray-200');
            dot.classList.add('opacity-0', 'scale-0');
        } else {
            // 选中
            currentSelections.add(i);
            // 样式激活
            card.classList.remove('border-gray-100');
            card.classList.add('border-[#5B7C99]', 'bg-blue-50/40', 'ring-1', 'ring-[#5B7C99]/30');
            checkbox.classList.remove('border-gray-200');
            checkbox.classList.add('bg-[#5B7C99]', 'border-[#5B7C99]');
            dot.classList.remove('opacity-0', 'scale-100');
        }

        // 按钮显示逻辑：只要有选中项，就显示按钮
        if (currentSelections.size > 0) {
            nextBtn.classList.remove('translate-y-24', 'opacity-0');
        } else {
            nextBtn.classList.add('translate-y-24', 'opacity-0');
        }
    }

    // 确认并进入下一题
    window.confirmAndNext = function() {
        if (currentSelections.size === 0) return;

        // 计分逻辑：叠加所有选中项的分数
        const q = questions[currentQIndex];
        currentSelections.forEach(optIndex => {
            const scores = q.options[optIndex].score;
            for (let key in scores) {
                userScores[key] = (userScores[key] || 0) + scores[key];
            }
        });

        currentQIndex++;
        if (currentQIndex < questions.length) {
            // 稍微延迟一下，让用户看到点击反馈
            setTimeout(() => renderQuestion(currentQIndex), 200);
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        document.getElementById('progress-bar').style.width = '100%';
        switchPage('quiz', 'loading');
        
        // 稍微调整 loading 文案，增加仪式感
        const texts = [
            "正在整合复杂的潜意识数据...", 
            "检测到多重依恋模式...", 
            "正在回溯 0-3 岁情绪印记...", 
            "正在生成您的专属心灵画像..."
        ];
        const textEl = document.getElementById('loading-text');
        let step = 0; textEl.innerText = texts[0];
        const id = setInterval(() => { step++; if (step < texts.length) textEl.innerText = texts[step]; }, 800);
        setTimeout(() => { clearInterval(id); generateReport(); switchPage('loading', 'report'); }, 3500);
    }

// --- 14. 核心报告生成系统 (v17.0 鲜活生命版：记忆+打字机) ---
    function generateReport() {
        let scores = {...userScores};
        let type = "", title = "", desc = "", advice = "", subType = "";
        let shadow = ""; 
        let monologue = ""; 
        let mechanism = ""; 
        let harm = "";      
        let relapse = "";   
        
        let chemistry = { magnet: "", magnetDesc: "", healing: "", healingDesc: "" };
        let manual = { dos: [], donts: [] };
        let sevenDays = [];
        // --- 🆕 新增：根据分数生成“潜在人格标签” ---
        let tags = [];
        
        // 1. 基础依恋标签
        if (scores.anxiety > 6) tags.push("焦虑型依恋", "精神内耗", "高敏感");
        if (scores.avoid > 6) tags.push("回避型依恋", "假性亲密", "防御性独立");
        if (scores.secure > 8 && scores.anxiety < 4) tags.push("安全型依恋", "情绪稳定");
        
        // 2. 细分维度标签 (基于您提供的词库)
        if (scores.placate > 3) tags.push("讨好型人格", "自我牺牲", "好人包袱");
        if (scores.superReason > 3) tags.push("述情障碍", "情感隔离", "智力傲慢");
        if (scores.trauma > 5) tags.push("代际创伤", "灾难化思维", "复杂性创伤(C-PTSD)");
        if (scores.sentinel > 2) tags.push("全天候哨兵", "过度警觉");
        if (scores.spiritualHusband > 2) tags.push("精神伴侣", "情绪乱伦");
        
        // 3. 组合逻辑
        if (scores.anxiety > 5 && scores.avoid > 5) tags.push("边缘型人格倾向", "爱恨交织", "推拉游戏");
        if (scores.anxiety > 6 && scores.placate > 4) tags.push("微笑抑郁", "习得性无助");
        if (scores.avoid > 6 && scores.superReason > 4) tags.push("阿斯伯格气质", "情感漠视");
        if (scores.anxiety > 5 && scores.aliveCarrier > 2) tags.push("共生绞杀", "性上瘾(依恋饥渴)");

        // 兜底：如果标签太少，补几个通用的
        if (tags.length < 3) tags.push("原生家庭", "潜意识印记");
        
        // 生成 HTML 字符串
        const tagsHTML = tags.map(t => 
            `<span class="inline-block bg-white/60 border border-[#5B7C99]/30 text-[#5B7C99] text-xs px-2.5 py-1 rounded-full mb-2 mr-2 shadow-sm font-medium tracking-wide"># ${t}</span>`
        ).join('');

        // --- 1. 算法判定 (保持 v16 的精准逻辑) ---
        const maxScore = Math.max(scores.secure, scores.anxiety, scores.avoid, scores.trauma);

// --- 1. 安全型依恋 (The Anchor) —— 关键词：情绪容器、圣母陷阱 ---
        if (scores.secure >= scores.anxiety && scores.secure >= scores.avoid && scores.secure >= scores.trauma) {
            
            title = "安全型依恋 (The Anchor)"; 
            type = "secure";
            
            monologue = "“在这个家里，爱是流动的空气，而不是需要争抢的氧气。”";
            
            // 1. 深度现状：情绪免疫系统
            analysis = `
                你拥有令人羡慕的<b>“情绪免疫系统”</b>。
                <br><br>
                在关系中，你的杏仁核（大脑恐惧中心）拥有极高的阈值。面对冲突，你不会像焦虑型那样陷入“被抛弃的恐慌”，也不会像回避型那样启动“情感隔离”。你能直接调用前额叶（理智中心）去解决问题。你潜意识里的核心信条是：<b>“冲突是沟通的契机，而不是关系的末日。”</b>
            `;
            
            // 2. 根源回溯：恰如其分的回应
            origin = `
                <b>🏠 恰如其分的“镜像”：</b><br>
                回溯童年，你拿到的是人生赢家的剧本。核心抚养者不仅是你的“安全基地”，更是你的<b>“情绪容器”</b>。<br>
                <br>
                当你跌倒哭泣时，你被允许表达脆弱，并得到了及时的安抚（而不是被告知“不许哭”）。你的需求被视为正当的，你的隐私被尊重。这种<b>“被看见”</b>和<b>“被回应”</b>的体验，内化成了你心中一个稳定的客体——你相信自己是值得被爱的，世界是基本安全的。
            `;
            
            // 3. 隐性阴影：圣母陷阱
            shadow = `
                <b>⚠️ 圣母陷阱 (The Saint Trap)：</b><br>
                虽然你很健康，但你最大的盲点是<b>“对人性阴暗面缺乏想象力”</b>。<br>
                <br>
                因为你内心富足，你很容易吸引那些<b>“黑洞型人格”</b>（如边缘型、自恋型或重度焦虑型）。你习惯了包容和修补，觉得“只要我多给一点爱就能变好”，结果往往是在不知不觉中被对方当作“无限能源”吸干，沦为他们情绪垃圾的永久填埋场。
            `;
            
            // 4. 深度处方：反向边界
            prescription = [
                "<b>建立反向边界：</b>你的课题不是学习“如何去爱”，而是学习“如何冷酷地拒绝”。",
                "<b>识别黑洞：</b>警惕那些刚认识就对你过度热情、或者永远在扮演“受害者”的朋友。",
                "<b>去神圣化：</b>告诉自己：我只是一个普通人，不是救世主，也没有义务去治愈谁的童年。"
            ];
            
            // --- 安全型专属配置 ---
            mechanism = "你的防御机制是<b>“开放式沟通”</b>。你相信脆弱能换来连接，而不是攻击。这让你在关系中显得从容不迫。";
            
            relapse = "<b>同情心疲劳：</b>当你发现自己听对方抱怨感到厌烦、却又不好意思打断时，请对自己说：<b>“我不是他的父母，我也需要被照顾。”</b>";

            chemistry.magnet = "焦虑型或回避型"; 
            chemistry.magnetDesc = "你的稳定像灯塔一样，会本能地吸引那些在情感风暴中挣扎的人。焦虑型想抓住你这根浮木，回避型想在你这里取暖。";
            
            chemistry.healing = "同样的安全型"; 
            chemistry.healingDesc = "一段不需要猜测、不需要小心翼翼的关系。你们能互相滋养，共同探索更大的世界，而非在情绪的泥潭中不断消耗纠缠。";
            
            manual.dos = ["直接坦诚地沟通需求", "共同规划未来", "给予平等的尊重与信任"];
            manual.donts = ["玩弄“推拉”心理游戏", "冷暴力或故意断联", "过度索取情绪价值"];
            
            sevenDays = [
                "列出 3 个你最近因为“包容别人”而忽略了自己的小需求，并满足它们。",
                "对一个不合理的请求坚定地说“不”，并不加任何解释。",
                "给一位很久没联系的老朋友打个电话，只聊开心的事。",
                "独自去一家没去过的咖啡店，享受 1 小时的独处。",
                "写下 5 个你最欣赏自己的优点。",
                "尝试一项全新的微技能（如做一道新菜）。",
                "对着镜子里的自己说：谢谢你一直保护我。"
            ];
        }
// --- 2. 混乱/恐惧型 (The Sentinel) —— 关键词：情感绞肉机、认栽买单 ---
        else if (
            (scores.trauma >= scores.anxiety && scores.trauma >= scores.avoid) || 
            (scores.anxiety > 8 && scores.avoid > 8 && Math.abs(scores.anxiety - scores.avoid) < 6)
        ) {
            
            title = "混乱型依恋 (The Sentinel)"; 
            type = "fearful";
            
            monologue = "“靠近我，但别伤害我……算了，你还是离我远点吧，哪怕我会孤独致死。”";
            
            // 1. 深度现状：全天候哨兵
            analysis = `
                你的内心住着一个<b>“全天候哨兵”</b>。
                <br><br>
                你既极度渴望亲密，又本能地恐惧伤害。这种<b>“想靠近却想逃离”</b>的悖论，让你在关系中反复撕裂。你会下意识地通过推拉、试探甚至制造混乱（Drama）来测试对方的底线。你的核心防御是<b>“先发制人的抛弃”</b>——在对方可能离开我之前，我先搞砸这段关系，这样我就不用面对被抛弃的恐惧了。
            `;
            
            // 2. 根源回溯：情感绞肉机
            origin = `
                <b>🌪️ 避风港即风暴源：</b><br>
                童年时，你的家庭可能是一个<b>“情感绞肉机”</b>。父亲往往是<b>“隐形人”</b>（缺席、沉默或逃避），而母亲可能是<b>“情绪火山”</b>（喜怒无常、过度宣泄）。<br>
                <br>
                对幼年的你来说，抚养者既是你的<b>避风港</b>（本能想靠近），又是你的<b>恐惧源</b>（本能想逃离）。为了在夹缝中生存，你被迫练就了极强的<b>“微表情扫描能力”</b>，时刻警惕着下一场风暴，导致你的神经系统永远处于战备状态。
            `;
            
            // 3. 隐性阴影：精神法庭
            shadow = `
                <b>⚖️ 精神法庭 (The Mental Court)：</b><br>
                你依然被困在童年的那个法庭里，试图当那个永远无法胜诉的辩护律师。你痛苦的根源，是潜意识里还在等父母的一个道歉，等一个<b>“迟到的正义”</b>。<br>
                <br>
                你可能会在亲密关系中不断重演这种“被误解-申诉-被驳回”的剧本，试图通过改造伴侣来赢得当年的那场官司。
            `;
            
            // 4. 深度处方：认栽买单 [引用 healing_prescription_v1.txt]
            prescription = [
                "<b>认栽买单：</b>醒醒吧，那个道歉永远不会来。承认童年就是“搞砸了”，不再向伴侣索要童年的情绪赔偿。",
                "<b>迅速离场：</b>当你不再期待父母改变来治愈你时，你才拿回了定义自己人生的主权。",
                "<b>停止自证：</b>你不需要通过“虽然我被伤害，但我依然优秀”来证明给谁看。你的存在本身就是价值。"
            ];
            
            // --- 混乱型专属配置 ---
            mechanism = "你的防御机制是<b>“解离” (Dissociation)</b>。当情绪压力过大时，你会突然“断片”或变得极度冷漠，仿佛灵魂出窍，以此来切断痛苦的感知。";
            
            relapse = "<b>物理暂停：</b>当感觉情绪失控、想说狠话推开对方时，强迫自己离开现场 15 分钟。告诉对方：<b>“我现在创伤复发了，为了不伤害你，我需要独处一会儿。”</b>";
            
            chemistry.magnet = "同样混乱或极度冷漠的人"; 
            chemistry.magnetDesc = "你们因为“创伤的相似味道”而相互吸引，彼此的阴影相互纠缠。但这会让关系变成随时可能爆炸的火药桶，让你在“过山车”般的体验中误以为那是真爱。";
            
            chemistry.healing = "高能量的安全型"; 
            chemistry.healingDesc = "你需要一个情绪极其稳定、内核强大的人。他能看穿你推开动作背后的恐惧，坚定地接住你，同时又有清晰的底线不被你吞噬。";
            
            manual.dos = ["保持绝对的诚实与透明", "在我推开你时坚定地留下", "情绪稳定，不被我带跑"];
            manual.donts = ["欺骗（哪怕是善意的）", "忽冷忽热的态度", "指责我的情绪反复无常"];
            
            sevenDays = [
                "深呼吸练习：当情绪上来时，先数 10 下再说话。",
                "记录一件今天发生的、确定的好事（哪怕只是天气很好），重建安全感。",
                "当你想推开某人时，试着说“我现在有点害怕”而不是“滚”。",
                "整理房间的一个角落，感受秩序带来的安宁。",
                "抱紧一个抱枕，想象它是一个安全的怀抱，停留 5 分钟。",
                "早睡 1 小时，规律的作息是情绪稳定的基石。",
                "写下一句宽恕自己的话：那时候的我，已经尽力了。"
            ];
        }
// --- 3. 焦虑型判定 (Anxious) ---
        else if (scores.anxiety > scores.avoid) {
            type = "anxiety";
            
            // ============================================================
            // 分支 A: 焦虑-讨好型 (The Pleaser) —— 关键词：生存假象、被阉割的攻击性
            // ============================================================
            if (scores.placate > scores.anxiety * 0.5) { 
                
                title = "焦虑-讨好者 (The Pleaser)"; 
                subType = "讨好型防御 / 生存假象"; 
                
                monologue = "“只要我足够乖、足够有用，你们就不会抛弃我了吧？”";
                
                // 1. 深度现状
                analysis = `
                    你的温良恭俭让，其实是一种<b>“生存假象” (Survival Illusion)</b>。
                    <br><br>
                    在外人眼里你是完美的“好人”，但只有你自己知道，这种“好”是基于恐惧而非选择。你对冲突有生理性的厌恶，一旦感受到气氛不对，你会下意识地通过自我牺牲、道歉或迎合来“平事”。你所谓的“懂事”，其实是<b>生命力荒芜</b>的代词。
                `;
                
                // 2. 根源回溯
                origin = `
                    <b>⚔️ 被阉割的攻击性：</b><br>
                    回溯童年，你可能生活在一个极度打压“个人意志”的家庭。父母可能是虚弱的、恐惧竞争的，他们本能地打压你身上表现出的“自信、张扬和欲望”。<br>
                    <br>
                    为了不激怒他们（或为了活命），你学会了<b>“自我阉割”</b>——你把自己的攻击性、野心和需求统统关进了地下室，以此来换取在这个家里的生存权。
                `;
                
                // 3. 隐性阴影
                shadow = `
                    <b>⚠️ 隐性控制 (Covert Control)：</b><br>
                    你习惯“以爱之名行控制之实”。你付出了很多，但这背后往往标好了价格——你潜意识里要求对方必须回报同样的关注。当对方做不到时，你会用内疚感绑架对方（“我为你牺牲了这么多，你怎么能这样？”）。这种沉重的恩情，会让爱人感到窒息并想要逃离。
                `;
                
                // 4. 深度处方
                prescription = [
                    "<b>唤醒黑色生命力：</b>攻击性不代表伤害，它是生命力的向外延伸。允许自己生气，允许自己想要，允许自己赢。",
                    "<b>黑色觉醒：</b>当你开始被那些平庸的人“嫉妒”或“树敌”时，恭喜你，你的生命力终于重新开始跳动了。",
                    "<b>剥离内疚感：</b>你过得好，不是对受苦父母的背叛。停止为了这种“忠诚”而自我惩罚。"
                ];

                // 5. 机制与急救 (讨好型专属)
                mechanism = "你的防御机制是<b>“迎合” (Fawning)</b>。在威胁面前，你既不战也不逃，而是通过变成对方想要的样子来消除威胁。";
                
                relapse = "<b>愤怒练习：</b>当你感到委屈想哭时，试着把眼泪憋回去，转换成<b>愤怒</b>。对着空房间骂一句脏话，感受那股力量从丹田升起的感觉。";
                
                chemistry.magnet = "自恋型或回避型"; 
                chemistry.magnetDesc = "你的“过度供给”简直是自恋者的天堂，或者是回避者的舒适区。你越讨好，他们越理所当然，形成完美的剥削闭环。";
                
                chemistry.healing = "高自尊的安全型"; 
                chemistry.healingDesc = "你需要一个能欣赏你的“攻击性”而非“顺从”的人。当你拒绝他时，他不仅不生气，反而会说：“干得好，你有态度了。”";
                
                manual.dos = ["主动询问我的真实感受（即使我说没事）", "肯定我的付出与价值", "鼓励我拒绝你"];
                manual.donts = ["把我的好当成理所当然", "对我露出不耐烦的神情", "让我猜你的心思"];
                
                sevenDays = [
                    "对一个不合理的请求坚定地说“不”，并不加任何解释。",
                    "在点餐或做决定时，不问“便不便宜/方不方便”，只问“我想要什么”。",
                    "做一件让自己开心、但可能让别人觉得“自私”的小事。",
                    "试着在对话中表达一次“我不同意你的观点”。",
                    "列出 3 个你为了“懂事”而牺牲掉的愿望。",
                    "对着镜子练习眼神犀利，直到自己感到有点“凶”。",
                    "奖励自己一份不需要任何人同意的礼物。"
                ];
            
            // ============================================================
            // 分支 B: 焦虑-痴迷型 (The Rescuer) —— 关键词：精神丈夫、共生绞杀
            // ============================================================
            } else { 
                title = "焦虑-痴迷型 (The Rescuer)"; 
                subType = "过度依赖 / 精神伴侣"; 
                
                monologue = "“我觉得自己像个只有一半灵魂的人。没有你，我不知道我是谁；但太靠近你，我又怕自己会消失。”";
                
                // 1. 深度现状
                analysis = `
                    你像是一株必须依附大树才能生存的藤蔓。在亲密关系中，你最核心的痛点是<b>“融合焦虑”</b>。
                    <br><br>
                    你把伴侣视为抵御内心虚无的<b>“活体载体”</b>。一旦对方回复消息慢了，或者语气稍微冷淡，你就会瞬间陷入一种“由于被切断连接而导致的自我消亡感”。你的情绪开关完全掌握在别人手里：他高兴你就晴天，他皱眉你就地震。这不仅是爱，更是一种<b>“共生绞杀”</b>。
                `;
                
                // 2. 根源回溯
                origin = `
                    <b>1. 错位的“精神丈夫” (The Spiritual Husband)：</b><br>
                    回溯童年，你可能生活在一个父亲情感缺席（隐形或无能）、母亲充满怨气的家庭。母亲在丈夫那里得不到情感支撑，于是把目光转向了你。她频繁向你诉苦，把你当成了她的<b>“情绪合伙人”</b>甚至<b>“精神支柱”</b>。<br>
                    <br>
                    <b>2. 被迫早熟的“小大人”：</b><br>
                    你被迫承担了不属于你这个年纪的情感重量。你从小就产生了一种错觉式的使命感：<b>“只要我足够乖、足够优秀，就能拯救痛苦的妈妈。”</b> 这种<b>“亲职化” (Parentification)</b> 的经历，让你习惯了通过“过度负责”来换取存在的合法性。
                `;
                
                // 3. 隐性阴影
                shadow = `
                    <b>⚠️ 拯救者诅咒 (The Rescuer's Curse)：</b><br>
                    因为童年没能“救好”母亲，成年后你会潜意识地被那些<b>“破碎、忧郁、回避、需要拯救”</b>的人深深吸引。你试图通过照顾他们、修补他们，来完成童年未竟的愿望。但这往往是一个无底洞，你越付出，对方越窒息（或越索取），最后把你拖垮。<br>
                    <br>
                    <b>⚠️ 快乐羞耻症：</b><br>
                    母亲的痛苦内化成了你的<b>“负罪感”</b>。你潜意识里觉得：“妈妈过得那么苦，我怎么有资格独自快乐？”所以你不敢追求轻松的幸福，非要找一段虐恋来让自己“受苦”，才觉得心安。
                `;
                
                // 4. 深度处方
                prescription = [
                    "<b>哨兵归队：</b>告诉内心那个守望了十几年的小哨兵：“现在的你已经长大了，不需要再靠时刻扫描别人的脸色来求生了。”",
                    "<b>去道德化：</b>请反复默念：<b>“母亲的命运是她自己的课题。我过得幸福，不是对受苦父母的背叛。”</b>",
                    "<b>建立镜像：</b>每天记录三件自己做好的小事（如喝了一杯好咖啡），不为给谁看，只为照亮自己，填补那个“空心”的自我。"
                ];

                // 5. 机制与急救 (痴迷型专属)
                mechanism = "你的防御机制是<b>“过度激活” (Hyperactivation)</b>。你会放大所有的危险信号，通过不断的纠缠、讨好或情绪爆发，强行把对方拉回你的视线范围内。这本质上是一种<b>“分离焦虑”</b>的应激反应。";
            
                relapse = "<b>物理切断：</b>当你忍不住想发第十条微信问“你在干嘛”时，立刻<b>关机或把手机扔到另一个房间</b>。去做平板支撑直到力竭。告诉自己：<b>“我现在的焦虑是童年创伤的闪回，我不是被抛弃了，我只是在独处。”</b>";
                
                chemistry.magnet = "疏离-回避型 (致命吸引)"; 
                chemistry.magnetDesc = "这是经典的“追逐者与逃避者”陷阱。他的独立和神秘感让你着迷（像极了那个不可得的父亲），而你的紧追不舍让他想逃（像极了他那个吞噬性的母亲）。你们相爱相杀，激情与痛苦并存。";
                
                chemistry.healing = "安全型依恋 (情绪定海神针)"; 
                chemistry.healingDesc = "你需要一个事事有回应、情绪极度稳定的伴侣。他能看穿你的焦虑，坚定地告诉你“我在这里，不会走”，带你走出患得患失的循环。";
                
                manual.dos = ["事事有回应，件件有着落", "主动报备行踪，给我安全感", "多用肢体接触安抚我"];
                manual.donts = ["不回消息玩消失（这是死刑）", "说“你想多了/你好烦”", "拒绝沟通直接冷战"];
                
                sevenDays = [
                    "忍住不发那条“你在干嘛”的信息，改为自己看 10 页书。", 
                    "一个人去散步 20 分钟，不带手机，感受风吹在脸上的感觉。", 
                    "做一件让自己开心、但可能让别人觉得“自私”的小事。", 
                    "当想道歉时，先停下来问自己：我真的错了吗？", 
                    "列出 3 个不依赖任何人就能获得的快乐源泉。", 
                    "对着镜子说三次：别人的情绪是别人的课题，与我无关。", 
                    "奖励自己一份不需要任何人同意的礼物。"
                ];
            }
        }
// --- 4. 回避型 (Avoidant) —— 关键词：情感隔离、智力傲慢 ---
        else { 
            type = "avoid";
            
            // ============================================================
            // 分支 A: 疏离-超理智者 (Rationalizer) —— 关键词：逻辑铠甲、物化他人
            // ============================================================
            if (scores.superReason > scores.avoid * 0.5) { 
                
                title = "疏离-超理智者 (Rationalizer)"; 
                subType = "理智防御 / 智力傲慢"; 
                
                monologue = "“情绪是无用的变量，只有逻辑是恒定的真理。请不要用你的‘感觉’来干扰我的‘分析’。”";
                
                // 1. 深度现状
                analysis = `
                    你像是一座移动的冰山。在你的世界里，<b>“感受”</b>被视为一种低效甚至软弱的表现。
                    <br><br>
                    你擅长处理数据、解决问题，但当涉及情感交流时，你会自动“断电”或切换到“说教模式”。你引以为傲的冷静，其实是一种<b>“情感无能”</b>。你习惯用逻辑把人<b>“物化”</b>，分析利弊得失，却唯独看不见活生生的人心。
                `;
                
                // 2. 根源回溯
                origin = `
                    <b>🧠 情绪羞耻 (Emotional Shame)：</b><br>
                    在你的原生家庭里，表达情绪（特别是脆弱、恐惧或依赖）往往意味着<b>“危险”</b>——可能会招致父母的忽视、嘲笑甚至羞辱（“哭有什么用？”“你怎么这么矫情？”）。<br>
                    <br>
                    为了保护自尊，你被迫切断了与心脏的连接，把所有的能量都撤退到了大脑里。你学会了：<b>“只有变得‘有用’和‘正确’，我才是安全的。”</b>
                `;
                
                // 3. 隐性阴影
                shadow = `
                    <b>❄️ 智力傲慢 (Intellectual Arrogance)：</b><br>
                    你经常在内心鄙视那些情绪充沛的人，觉得他们“幼稚”、“不可理喻”。这种傲慢是你的一层保护色，用来掩盖你对<b>“失控”</b>的极度恐惧。<br>
                    <br>
                    <b>❄️ 冷暴力源头：</b><br>
                    当伴侣表达痛苦时，你冷静的理性分析并不是在解决问题，而是在实施<b>“拒绝连接”</b>的冷暴力。你的潜台词是：“你的痛苦是不合逻辑的，所以我不负责。”
                `;
                
                // 4. 深度处方
                prescription = [
                    "<b>去逻辑化：</b>下次伴侣难过时，闭上你的嘴，收起你的建议。试着说一句没有逻辑的废话：<b>“我看到你很难过，我陪着你。”</b>",
                    "<b>承认脆弱：</b>承认你需要连接，这不丢人。真正的强大是敢于展示软肋，而不是时刻穿着铠甲。",
                    "<b>停止物化：</b>不要把人当成修机器。人是需要被“看见”的，而不是被“解决”的。"
                ];

                mechanism = "你的防御机制是<b>“理智化” (Intellectualization)</b>。通过将情感体验转化为抽象的思维概念，来隔离痛苦的感受。";

            // ============================================================
            // 分支 B: 疏离-独行侠 (Dismissive) —— 关键词：假性独立、情感荒漠
            // ============================================================
            } else { 
                title = "疏离-独行侠 (Dismissive)"; 
                subType = "假性独立 / 情感荒漠"; 
                
                monologue = "“靠谁都不如靠自己。人类的悲欢并不相通，我只觉得他们吵闹。”";
                
                // 1. 深度现状
                analysis = `
                    你以“不需要任何人”为荣。你的独立令人钦佩，但那是一枚刻着伤痕的勋章——<b>“假性独立” (Pseudo-independence)</b>。
                    <br><br>
                    你不是真的不需要爱，你是<b>“不敢”</b>需要。你预设了“所有人最终都会离开”或“没有人能真正理解我”，所以你选择先拒绝别人。你把自己活成了一座孤岛，虽然安全，但寸草不生。
                `;
                
                // 2. 根源回溯
                origin = `
                    <b>🏜️ 情感忽视 (Emotional Neglect)：</b><br>
                    你的童年可能没有明显的虐待，但充满了<b>“缺失”</b>。当你作为孩子发出信号时，得到的往往是“忙碌的背影”或“漫长的沉默”。<br>
                    <br>
                    你早早学会了自我抚慰（Self-soothing），因为求助是无效的，甚至羞耻的。你的潜意识信条是：<b>“依赖就是软弱，期望就是失望的开始。”</b>
                `;
                
                // 3. 隐性阴影
                shadow = `
                    <b>🌵 傲慢的防御：</b><br>
                    你通过贬低亲密关系的价值（“谈恋爱不如搞钱”）来维护自己的优越感。这其实是一种酸葡萄心理——因为太怕得不到，所以假装不想要。<br>
                    <br>
                    <b>🌵 情感撤回 (Stonewalling)：</b><br>
                    一旦感到关系太近，你会本能地“后撤”或“挑刺”，用冷漠来惩罚想要靠近你的人。
                `;
                
                // 4. 深度处方
                prescription = [
                    "<b>承认亏损：</b>承认你内心深处也有一个渴望被抱抱的小孩。看见由于“过度独立”而导致的生命力枯竭。",
                    "<b>微小依赖：</b>试着向身边的人表达一个微不足道的需求（比如“帮我拿张纸巾”）。你会发现，天不会塌下来。",
                    "<b>留在现场：</b>当你想躲进洞穴时，强迫自己再多留 5 分钟。"
                ];

                mechanism = "你的防御机制是<b>“情感隔离” (Isolation of Affect)</b>。为了避免失望，你预先切断了期待，把自己变成了局外人。";
            }
            
            // --- 回避型通用配置 ---
            relapse = "<b>3秒改口法则：</b>当你下意识想说“我没事”或者想躲进房间时，试着停顿 3 秒，改口说：<b>“我现在有点累，能不能陪我坐一会儿，不用说话。”</b> 哪怕只是物理上的共处，也是打破隔离的一步。";
            
            chemistry.magnet = "焦虑型依恋 (被需要的幻觉)"; 
            chemistry.magnetDesc = "他们的热情让你感到被需要，初期你会享受这种崇拜。但随着关系深入，他们对情感的高浓度需求会让你感到<b>“被吞噬”</b>和<b>“失去自由”</b>，从而触发你的逃避机制。";
            
            chemistry.healing = "安全型依恋 (温柔的坚持)"; 
            chemistry.healingDesc = "你需要一个尊重你的独立空间、但不放弃与你连接的人。他不强迫你融合，但也绝不冷战。他像温水一样，慢慢融化你的冰山，让你知道<b>“独立和亲密可以共存”</b>。";
            
            manual.dos = ["有话直说，讲逻辑，别让我猜", "给我独处充电的空间 (Cave Time)", "就事论事，别情绪化审判我"];
            manual.donts = ["强迫我表达感受（逼也没用）", "用哭闹来解决问题", "在公共场合让我难堪"];
            
            sevenDays = [
                "向身边的人表达一个微小的需求（如：帮我拿张纸）。",
                "当想躲进房间时，尝试在客厅多停留 10 分钟。",
                "不用“我没事”敷衍，试着说“我今天有点累/烦”。",
                "主动给在乎的人发一条分享日常的消息（不带目的）。",
                "看着镜子里的自己，练习微笑 30 秒，感受面部肌肉。",
                "承认自己也有脆弱的时刻，并写下来，不用给任何人看。",
                "允许某人帮自己一个小忙，并真诚地说谢谢。"
            ];
        }

        // --- 🎨 视觉升级：色温切换 ---
        const rootStyle = document.documentElement.style;
        if (type === 'secure') {
            rootStyle.setProperty('--ocean-top', '#fdfbf7'); rootStyle.setProperty('--ocean-mid', '#e8f5e9'); rootStyle.setProperty('--ocean-bot', '#c8e6c9');
            rootStyle.setProperty('--wave-1', '#81c784'); rootStyle.setProperty('--wave-2', '#a5d6a7'); rootStyle.setProperty('--wave-3', '#c8e6c9');
        } else if (type === 'avoid') {
            rootStyle.setProperty('--ocean-top', '#f0f4f8'); rootStyle.setProperty('--ocean-mid', '#d9e2ec'); rootStyle.setProperty('--ocean-bot', '#bcccdc');
            rootStyle.setProperty('--wave-1', '#627d98'); rootStyle.setProperty('--wave-2', '#829ab1'); rootStyle.setProperty('--wave-3', '#9fb3c8');
        } else if (type === 'anxiety') {
            rootStyle.setProperty('--ocean-top', '#fff5f5'); rootStyle.setProperty('--ocean-mid', '#fed7d7'); rootStyle.setProperty('--ocean-bot', '#feb2b2');
            rootStyle.setProperty('--wave-1', '#e53e3e'); rootStyle.setProperty('--wave-2', '#fc8181'); rootStyle.setProperty('--wave-3', '#fbd38d');
        } else {
            rootStyle.setProperty('--ocean-top', '#E2E8F0'); rootStyle.setProperty('--ocean-mid', '#CBD5E0'); rootStyle.setProperty('--ocean-bot', '#A0AEC0');
            rootStyle.setProperty('--wave-1', '#2D3748'); rootStyle.setProperty('--wave-2', '#4A5568'); rootStyle.setProperty('--wave-3', '#718096');
        }

        // --- 切换背景音乐 ---
        if (!AudioEngine.isMuted) {
            AudioEngine.playAmbience(type);
        }

        // --- 评分条 ---
        const scoreBarPalette = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-amber-400', 'bg-teal-400', 'bg-rose-400'];
        const scoreBars = radarConfig.map((item, index) => {
            const val = scores[item.key] || 0;
            const stat = radarDimensionStats[item.key];
            const percent = stat ? Math.min((val / Math.max(1, stat.max || 1)) * 100, 100) : 0;
            const color = scoreBarPalette[index % scoreBarPalette.length];
            return `<div class="mb-2 last:mb-0"><div class="flex justify-between text-[10px] text-gray-500 mb-0.5 font-medium"><span>${item.label}</span><span>${val}</span></div><div class="h-1 w-full bg-gray-100 rounded-full overflow-hidden"><div class="h-full ${color} opacity-80" style="width: ${percent}%"></div></div></div>`;
        }).join('');

        // --- 读取七日计划进度 (Memory) ---
        const savedChecks = JSON.parse(localStorage.getItem('originsight_plan_checks') || '[]');
        
        // --- 渲染页面 (UI v17.0) ---
        const container = document.getElementById('report-content');
        const books = type === 'secure' ? ["《爱的艺术》", "《少有人走的路》"] : (type === 'anxiety' ? ["《不再试图取悦别人》", "《走出强迫性重复》"] : ["《假性亲密关系》", "《被忽视的孩子》"]);
        const movies = type === 'secure' ? ["《普罗旺斯的夏天》"] : (type === 'anxiety' ? ["《被嫌弃的松子的一生》", "《黑天鹅》"] : ["《心灵捕手》", "《海边的曼彻斯特》"]);

// ✅ 修复后的报告模板：正确引用了 analysis, origin, shadow 等新变量
        container.innerHTML = `
            <div class="text-center mb-10 fade-in-up">
                <span class="text-xs font-bold text-[#5B7C99] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">CLINICAL REPORT</span>
                <h2 class="text-3xl md:text-5xl font-bold text-[#2c3e50] mt-4 mb-3 serif">深度心理病历</h2>
                <p class="text-gray-500">依恋模式：<span class="text-[#2c3e50] font-bold border-b-2 border-[#5B7C99]/30" id="result-type">${title}</span></p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 fade-in-up delay-100">
                <div class="lg:col-span-4 flex flex-col gap-4 h-full">
                    <div class="bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-gray-200/50 flex flex-col items-center border border-white/60 flex-1">
                        <div class="relative w-full aspect-square max-w-[260px] mb-4 overflow-hidden">
                            <canvas id="radar-chart" class="block w-full h-full"></canvas>
                        </div>
                        
                        <div class="w-full mb-4 flex flex-wrap justify-center content-start min-h-[60px]">
                            ${tagsHTML}
                        </div>
                        <div class="w-full bg-white/50 rounded-xl p-5 border border-white/40 mt-auto"><h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Dimension Scores</h4>${scoreBars}</div>
                    </div>
                </div>
                <div class="lg:col-span-8 h-full">
                    <div class="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-sm border border-white/60 h-full flex flex-col justify-center">
                        <div class="mb-8 relative min-h-[60px]">
                            <span class="absolute -top-6 -left-4 text-7xl text-[#5B7C99] opacity-20 font-serif">“</span>
                            <p id="monologue-text" class="font-serif text-xl md:text-2xl text-[#2c3e50] italic leading-relaxed pl-4 relative z-10 opacity-0"></p>
                        </div>
                        <div class="w-16 h-1 bg-gray-200 rounded-full mb-6"></div>
                        
                        <div class="space-y-8">
                            <div>
                                <h4 class="flex items-center gap-2 font-bold text-[#5B7C99] mb-3 text-sm uppercase tracking-wide"><span class="text-lg">🛡️</span> 深度剖析 (Deep Analysis)</h4>
                                <p class="text-gray-700 leading-relaxed text-justify text-[15px] space-y-2">${analysis || desc}</p> 
                            </div>
                            <div class="bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
                                <h4 class="flex items-center gap-2 font-bold text-[#5B7C99] mb-3 text-sm uppercase tracking-wide"><span class="text-lg">🌱</span> 根源回溯 (Root Cause)</h4>
                                <p class="text-gray-600 leading-relaxed text-justify text-sm">${origin || "数据不足，无法回溯根源。"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 fade-in-up delay-200">
                <div class="bg-red-50/80 backdrop-blur-sm p-6 rounded-3xl border border-red-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl shadow-sm">🌑</div><h4 class="font-bold text-[#c0392b] text-base">隐性阴影</h4></div>
                    <p class="text-sm text-gray-700 leading-relaxed text-justify">${shadow || "暂无显著阴影数据。"}</p>
                </div>
                
                <div class="bg-green-50/80 backdrop-blur-sm p-6 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl shadow-sm">💊</div><h4 class="font-bold text-[#27ae60] text-base">核心处方</h4></div>
                    <ul class="space-y-3">
                        ${Array.isArray(prescription) ? prescription.map(item => `<li class="text-sm text-gray-700 leading-relaxed flex items-start gap-2"><span class="text-green-500 mt-1">●</span><span>${item}</span></li>`).join('') : `<li class="text-sm text-gray-700">${advice}</li>`}
                    </ul>
                </div>
                
                <div class="bg-orange-50/80 backdrop-blur-sm p-6 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl shadow-sm">🆘</div><h4 class="font-bold text-[#d35400] text-base">复发急救包</h4></div>
                    <p class="text-sm text-gray-700 leading-relaxed text-justify bg-white/60 p-3 rounded-xl border border-orange-200/50 italic">"${relapse}"</p>
                </div>
            </div>

            <div class="bg-gradient-to-br from-pink-50/90 to-purple-50/90 backdrop-blur-md rounded-3xl p-8 mb-8 border border-pink-100 shadow-sm fade-in-up delay-200">
                <h3 class="text-xl font-bold text-[#2c3e50] mb-6 flex items-center gap-3 serif"><span class="text-2xl bg-white p-1 rounded-lg shadow-sm">💘</span> 恋爱契合度分析</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white/50 p-6 rounded-2xl border border-pink-100/50 hover:bg-white/80 transition duration-300">
                        <div class="flex items-center gap-2 mb-3"><span class="text-xl">🧲</span><h4 class="font-bold text-gray-700">你的天然磁铁</h4><span class="text-[10px] text-pink-500 bg-pink-100 px-2 py-0.5 rounded-full font-bold ml-auto">致命吸引</span></div>
                        <h5 class="font-bold text-[#c0392b] text-base mb-2 border-b border-pink-100 pb-2">${chemistry.magnet}</h5><p class="text-sm text-gray-600 leading-relaxed text-justify">${chemistry.magnetDesc}</p>
                    </div>
                    <div class="bg-white/50 p-6 rounded-2xl border border-green-100/50 hover:bg-white/80 transition duration-300">
                        <div class="flex items-center gap-2 mb-3"><span class="text-xl">✨</span><h4 class="font-bold text-gray-700">你的疗愈伴侣</h4><span class="text-[10px] text-green-600 bg-green-100 px-2 py-0.5 rounded-full font-bold ml-auto">理想型</span></div>
                        <h5 class="font-bold text-[#27ae60] text-base mb-2 border-b border-green-100 pb-2">${chemistry.healing}</h5><p class="text-sm text-gray-600 leading-relaxed text-justify">${chemistry.healingDesc}</p>
                    </div>
                </div>
            </div>

            <div class="bg-white/60 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/60 shadow-sm fade-in-up delay-200">
                <h3 class="text-xl font-bold text-[#2c3e50] mb-6 flex items-center gap-3 serif"><span class="text-2xl bg-[#2c3e50] text-white p-1 rounded-lg shadow-sm text-sm flex items-center justify-center w-8 h-8">📝</span> 我的使用说明书</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div><h4 class="font-bold text-[#27ae60] mb-4 flex items-center gap-2"><span class="bg-green-100 p-1 rounded text-xs">✅</span> 正确操作 (Do's)</h4><ul class="space-y-3">${manual.dos.map(item => `<li class="flex items-start gap-3 bg-green-50/50 p-3 rounded-xl text-sm text-gray-700 border border-green-100"><span class="text-green-500 font-bold">✓</span>${item}</li>`).join('')}</ul></div>
                    <div><h4 class="font-bold text-[#c0392b] mb-4 flex items-center gap-2"><span class="bg-red-100 p-1 rounded text-xs">🚫</span> 禁忌事项 (Don'ts)</h4><ul class="space-y-3">${manual.donts.map(item => `<li class="flex items-start gap-3 bg-red-50/50 p-3 rounded-xl text-sm text-gray-700 border border-red-100"><span class="text-red-500 font-bold">✕</span>${item}</li>`).join('')}</ul></div>
                </div>
            </div>

            <div class="bg-gradient-to-r from-teal-50/90 to-cyan-50/90 backdrop-blur-md rounded-3xl p-8 mb-8 border border-teal-100 shadow-sm fade-in-up delay-200 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-teal-100/50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <div class="flex justify-between items-center mb-6 relative z-10">
                    <div>
                        <h3 class="text-xl font-bold text-[#2c3e50] mb-2 flex items-center gap-3 serif"><span class="text-2xl bg-white p-1 rounded-lg shadow-sm">📅</span> 七日微疗愈计划</h3>
                        <p class="text-sm text-gray-500">每天 5 分钟，重塑你的依恋神经回路。</p>
                    </div>
                    <div class="text-right">
                        <div id="plan-progress-text" class="text-2xl font-bold text-teal-600">${savedChecks.length} / 7</div>
                        <div class="text-xs text-teal-500 uppercase tracking-widest">Completed</div>
                    </div>
                </div>
                
                <div class="space-y-3 relative z-10">
                    ${sevenDays.map((task, i) => {
                        const isChecked = savedChecks.includes(i);
                        return `
                        <div class="flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group ${isChecked ? 'bg-teal-50 border-teal-200' : 'bg-white/60 border-teal-100 hover:bg-white/90'}" onclick="toggleDailyTask(this, ${i})">
                            <div class="w-6 h-6 rounded-full border-2 border-teal-300 flex items-center justify-center transition-colors group-hover:border-teal-500">
                                <div class="w-3 h-3 bg-teal-500 rounded-full transition-opacity ${isChecked ? '' : 'opacity-0'}"></div>
                            </div>
                            <span class="text-sm transition-colors ${isChecked ? 'text-teal-400 line-through' : 'text-gray-700 group-hover:text-teal-800'}">Day ${i+1}: ${task}</span>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="bg-white/40 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/40 fade-in-up delay-300">
                <h3 class="text-xl font-bold mb-6 text-[#2c3e50] serif flex items-center gap-2"><span class="w-1.5 h-6 bg-[#5B7C99] rounded-full"></span> 给你的疗愈建议</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 hover:-translate-y-1 transition-transform duration-300"><div class="text-2xl mb-3">📖</div><h4 class="font-bold text-sm mb-2 text-[#2c3e50]">推荐书单</h4><ul class="text-xs text-gray-500 space-y-2">${books.map(b => `<li>• ${b}</li>`).join('')}</ul></div>
                    <div class="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 hover:-translate-y-1 transition-transform duration-300"><div class="text-2xl mb-3">🎬</div><h4 class="font-bold text-sm mb-2 text-[#2c3e50]">影视疗愈</h4><ul class="text-xs text-gray-500 space-y-2">${movies.map(m => `<li>• ${m}</li>`).join('')}</ul></div>
                </div>
            </div>

            <div id="bottle-section" class="max-w-xl mx-auto mb-16 text-center relative z-20 fade-in-up delay-300">
                <div class="w-16 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>
                <h3 class="text-xl font-bold text-[#5B7C99] mb-4 serif">🌊 深海寄信</h3>
                <p class="text-sm text-gray-500 mb-6 leading-relaxed">有些话藏在心里太久了。<br>如果有机会穿越时空，你想对那个受伤的小时候的自己，说一句什么？</p>
                <div class="relative group max-w-lg mx-auto">
                    <textarea id="bottle-message" rows="3" placeholder="“嘿，别怕，你长大了会很棒的...”" class="w-full bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/60 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B7C99]/30 focus:bg-white/60 transition resize-none shadow-inner"></textarea>
                    <button onclick="throwBottle()" class="absolute bottom-3 right-3 bg-[#5B7C99] text-white p-2 rounded-full shadow-lg hover:bg-[#4a6b8a] transition-transform hover:scale-110 active:scale-95 flex items-center gap-1 pr-3 pl-2"><span class="text-lg">🌊</span> <span class="text-xs font-bold">投递</span></button>
                </div>
                <div id="bottle-feedback" class="hidden mt-6 text-[#5B7C99] text-sm animate-pulse font-serif">已投递。海浪会带走这份心意，愿你今夜好梦。✨</div>
            </div>

            <div class="flex flex-col items-center gap-6 pb-20 fade-in-up delay-300">
                <div class="flex gap-4">
                    <button onclick="generateImage()" class="group relative bg-[#2c3e50] text-white px-8 py-3.5 rounded-full font-bold shadow-xl hover:bg-[#5B7C99] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"><span class="text-lg">📸</span><span>生成心灵画像卡片</span></button>
                    <button onclick="location.reload()" class="px-6 py-3.5 rounded-full border border-gray-300 text-gray-500 hover:border-[#5B7C99] hover:text-[#5B7C99] transition font-medium text-sm">重新测试</button>
                </div>
            </div>
            
            <div id="share-poster" class="fixed top-[-9999px] left-[-9999px] w-[375px] bg-[#F9F8F6] p-8 rounded-none text-center pointer-events-none">
                <div class="mb-6 flex justify-center"><img src="./images/logo-silhouette.png" class="w-12 h-12 rounded-full border-2 border-[#2c3e50]/10"></div>
                <div class="text-xs tracking-[0.3em] text-gray-400 uppercase mb-2">OriginSight Profile</div>
                <h2 class="text-2xl font-bold text-[#2c3e50] mb-2 serif">${title}</h2>
                <p class="text-xs text-[#5B7C99] mb-6 font-mono">${new Date().toLocaleDateString()}</p>
                <div class="w-full aspect-square bg-white/50 rounded-full flex items-center justify-center mb-6 relative overflow-hidden"><img id="poster-radar-img" class="w-full h-full object-contain p-4" /></div>
                <div class="text-left bg-white p-5 rounded-xl shadow-sm mb-6 border border-gray-100"><p class="text-sm text-gray-600 leading-relaxed font-serif italic">“${monologue.replace(/“|”/g, '')}”</p></div>
                <div class="text-left mb-6"><h4 class="font-bold text-[#2c3e50] text-xs mb-2">📝 如何爱我 (User Manual)</h4><div class="bg-white p-4 rounded-xl border border-gray-100 text-xs text-gray-600 space-y-1"><p>✅ ${manual.dos[0]}</p><p>✅ ${manual.dos[1]}</p><p>🚫 ${manual.donts[0]}</p></div></div>
                <div class="grid grid-cols-2 gap-3 mb-8"><div class="bg-blue-50 p-3 rounded-lg text-left"><span class="text-[10px] text-gray-400 block">焦虑指数</span><span class="font-bold text-[#2c3e50]">${scores.anxiety}</span></div><div class="bg-blue-50 p-3 rounded-lg text-left"><span class="text-[10px] text-gray-400 block">回避指数</span><span class="font-bold text-[#2c3e50]">${scores.avoid}</span></div></div>
                <div class="flex items-center justify-center gap-2 opacity-60 mt-4"><span class="text-xs font-bold text-[#2c3e50]">OriginSight.com</span></div>
            </div>
        `;


        // 触发雷达图 + 打字机特效
        setTimeout(() => {
            const data = normalizeRadarData(scores);
            renderRadarChart(data);
            
            // 触发打字机
            typeWriter('monologue-text', monologue, 60);
        }, 500); 

        localStorage.setItem('originsight_result', JSON.stringify({title, type, scores}));
    }

    function switchPage(from, to) {
        const fromEl = document.getElementById(`page-${from}`);
        const toEl = document.getElementById(`page-${to}`);
        fromEl.classList.add('page-exit');
        setTimeout(() => {
            fromEl.classList.add('hidden'); fromEl.classList.remove('page-exit');
            toEl.classList.remove('hidden'); toEl.classList.add('page-enter'); window.scrollTo(0,0);
        }, 400);
    }

    function copyShareResult() {
        const title = document.getElementById('result-type').innerText;
        const text = `我在【OriginSight】的原生家庭深度回溯中测出我是： 👉 「${title}」 🌟 看见是改变的开始，你也来探索一下吧： ${window.location.href}`;
        navigator.clipboard.writeText(text).then(() => {
            const t = document.getElementById('copy-toast');
            t.classList.remove('opacity-0'); t.classList.add('opacity-100', 'translate-y-[-5px]');
            setTimeout(() => { t.classList.remove('opacity-100', 'translate-y-[-5px]'); t.classList.add('opacity-0'); }, 2000);
        }).catch(() => alert("复制失败，请截图分享"));
    }

    const radarConfig = [
        { key: 'anxiety', label: '焦虑' },
        { key: 'avoid', label: '回避' },
        { key: 'placate', label: '讨好' },
        { key: 'trauma', label: '创伤' },
        { key: 'secure', label: '安全' },
        { key: 'superReason', label: '超理智' },
        { key: 'shame', label: '羞耻' },
    ];

    const radarDimensionStats = (() => {
        const stats = Object.fromEntries(
            radarConfig.map(({ key }) => [key, { max: 0, samples: [] }])
        );
        questions.forEach((q) => {
            radarConfig.forEach(({ key }) => {
                const scores = q.options.map((opt) => opt.score?.[key] || 0);
                stats[key].max += Math.max(...scores);
            });
        });

        let seed = 42;
        const rand = () => {
            seed = (seed * 1664525 + 1013904223) % 4294967296;
            return seed / 4294967296;
        };
        const sampleCount = 2000;
        radarConfig.forEach(({ key }) => {
            const totals = [];
            for (let i = 0; i < sampleCount; i += 1) {
                let total = 0;
                questions.forEach((q) => {
                    const idx = Math.floor(rand() * q.options.length);
                    total += q.options[idx].score?.[key] || 0;
                });
                totals.push(total);
            }
            totals.sort((a, b) => a - b);
            stats[key].samples = totals;
        });
        return stats;
    })();
    let lastRadarData = null;
    let radarResizeObserver = null;

    function percentileFromSamples(samples, value) {
        if (!samples.length) return 0;
        let low = 0;
        let high = samples.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (samples[mid] <= value) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low / samples.length;
    }

    function normalizeRadarData(scores) {
        const clamp = (val) => Math.max(0, Math.min(val, 1));
        return radarConfig.map(({ key }) => {
            const stat = radarDimensionStats[key];
            const raw = scores[key] || 0;
            if (!stat) return 0;
            if (stat.samples.length) {
                return clamp(percentileFromSamples(stat.samples, raw));
            }
            const safeMax = Math.max(1, stat.max || 1);
            return clamp(raw / safeMax);
        });
    }

    function renderRadarChart(data) {
        lastRadarData = data;
        requestAnimationFrame(() => {
            drawRadarChart(data);
        });
        setupRadarResizeObserver();
    }

    function updatePosterFromRadar() {
        const canvas = document.getElementById('radar-chart');
        if (!canvas) return;
        const posterImg = document.getElementById('poster-radar-img');
        if (posterImg) posterImg.src = canvas.toDataURL("image/png");
    }

    function setupRadarResizeObserver() {
        const wrapper = document.getElementById('radar-chart')?.parentElement;
        if (!wrapper || radarResizeObserver || !('ResizeObserver' in window)) return;
        radarResizeObserver = new ResizeObserver(() => {
            if (lastRadarData) {
                drawRadarChart(lastRadarData);
            }
        });
        radarResizeObserver.observe(wrapper);
    }

    window.addEventListener('resize', () => {
        if (lastRadarData) {
            drawRadarChart(lastRadarData);
        }
    });

    function drawRadarChart(data) {
        const canvas = document.getElementById('radar-chart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        if(rect.width === 0) return;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        const w = rect.width;
        const h = rect.height;
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) / 2 - 26;
        const sides = radarConfig.length;
        const labels = radarConfig.map(({ label }) => label);
        
        ctx.clearRect(0,0,w,h);
        ctx.strokeStyle = 'rgba(200, 200, 200, 0.4)'; ctx.lineWidth = 1;
        for (let r=0.2; r<=1; r+=0.2) { ctx.beginPath(); for(let i=0; i<sides; i++) { const a = (Math.PI*2*i)/sides - Math.PI/2; ctx[i===0?'moveTo':'lineTo'](cx + Math.cos(a)*radius*r, cy + Math.sin(a)*radius*r); } ctx.closePath(); ctx.stroke(); }
        
        ctx.beginPath(); for(let i=0; i<sides; i++) { const a = (Math.PI*2*i)/sides - Math.PI/2; ctx.moveTo(cx,cy); ctx.lineTo(cx + Math.cos(a)*radius, cy + Math.sin(a)*radius); } ctx.stroke();

        ctx.beginPath();
        const points = [];
        data.forEach((val, i) => { const v = Math.max(val, 0); const a = (Math.PI*2*i)/sides - Math.PI/2; const x = cx+Math.cos(a)*radius*v, y = cy+Math.sin(a)*radius*v; points.push({x,y}); ctx[i===0?'moveTo':'lineTo'](x,y); });
        ctx.closePath();
        const grad = ctx.createRadialGradient(cx,cy,0,cx,cy,radius); grad.addColorStop(0,'rgba(91, 124, 153, 0.6)'); grad.addColorStop(1,'rgba(91, 124, 153, 0.1)');
        ctx.fillStyle = grad; ctx.fill(); ctx.strokeStyle = '#5B7C99'; ctx.lineWidth = 2; ctx.stroke();

        ctx.fillStyle = '#fff'; points.forEach(p => { ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fill(); ctx.stroke(); });
        const labelFontSize = Math.max(9, Math.min(12, Math.floor(w / (sides + 6))));
        const labelOffset = Math.min(16, Math.max(6, Math.floor(radius * 0.1)));
        ctx.fillStyle = '#64748b';
        ctx.font = `bold ${labelFontSize}px Noto Serif SC`;
        ctx.textBaseline = 'middle';
        labels.forEach((l, i) => {
            const a = (Math.PI*2*i)/sides - Math.PI/2;
            const cos = Math.cos(a);
            const sin = Math.sin(a);
            ctx.textAlign = cos > 0.2 ? 'left' : cos < -0.2 ? 'right' : 'center';
            ctx.fillText(l, cx + cos * (radius + labelOffset), cy + sin * (radius + labelOffset));
        });
    }

    const wordList = ["回避型依恋", "焦虑型依恋", "抑郁症", "拖延症", "高敏感", "精神内耗", "情感漠视", "性上瘾", "生理性厌恶", "阿斯伯格", "讨好型人格", "习得性无助", "冒充者综合征", "述情障碍", "假性亲密", "共生绞杀", "空心病", "微笑抑郁", "强迫症", "边缘型人格", "煤气灯效应", "暴食症", "被动攻击", "完美主义", "灾难化思维", "亲职化", "情感勒索", "自恋防御", "长不大的父母", "代际创伤"];
    function spawnWord() {
        const container = document.getElementById('ocean-container');
        if (!container) return;
        const el = document.createElement('div'); el.className = 'ocean-word';
        el.innerText = wordList[Math.floor(Math.random() * wordList.length)];
        const layer = Math.floor(Math.random()*3)+1;
        const size = layer===3 ? 18 : (layer===2 ? 24 : 32);
        el.style.fontSize = `${size + Math.random()*8}px`;
        el.style.color = layer===3 ? 'rgba(164,184,196,0.9)' : (layer===2 ? 'rgba(91,124,153,0.95)' : '#2c3e50');
        el.style.zIndex = layer===3 ? 5 : (layer===2 ? 15 : 25);
        if(layer===3) el.style.filter = 'blur(1.5px)';
        if(layer===1) { el.style.fontWeight = '700'; el.style.textShadow = '0 4px 10px rgba(255,255,255,0.5)'; }
        el.style.left = `${Math.floor(Math.random()*90)+5}%`;
        el.style.bottom = `${15 + Math.random()*15}%`;
        el.style.animation = `floatAndSink ${8+Math.random()*6}s ease-in-out forwards`;
        container.appendChild(el);
        setTimeout(() => el.remove(), 14000);
    }
    // 光效控制
    window.handleSpotlight = function(e, card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }

    // --- 页面导航辅助函数 ---
    // 打开某个页面（覆盖当前内容）
    function openPage(pageId) {
        // 隐藏所有 main 标签
        document.querySelectorAll('main').forEach(el => {
            if(!el.classList.contains('hidden')) {
                el.dataset.active = 'true'; // 标记一下当前正在显示的页面，以便返回
                el.classList.add('hidden');
            }
        });
        
        // 显示目标页面
        const target = document.getElementById(pageId);
        target.classList.remove('hidden');
        target.classList.add('fade-in-up');
        window.scrollTo(0,0);
    }

    // 关闭覆盖页，返回之前的页面
    function closeOverlay(pageId) {
        document.getElementById(pageId).classList.add('hidden');
        
        // 尝试找回刚才标记为 active 的页面，如果找不到就回首页
        let prevPage = document.querySelector('main[data-active="true"]');
        if (!prevPage) prevPage = document.getElementById('page-landing');
        
        prevPage.classList.remove('hidden');
        delete prevPage.dataset.active;
    }

// --- 新增：生成分享图片 ---
    function generateImage() {
        const posterEl = document.getElementById('share-poster');
        const modal = document.getElementById('image-modal');
        const container = document.getElementById('generated-image-container');
        
        if (!posterEl) return;

        // 显示加载提示
        const btn = document.querySelector('button[onclick="generateImage()"] span:last-child');
        const originalText = btn.innerText;
        btn.innerText = "生成中...";

        updatePosterFromRadar();

        html2canvas(posterEl, {
            scale: 2, // 2倍清晰度
            backgroundColor: '#F9F8F6', // 确保背景色正确
            useCORS: true
        }).then(canvas => {
            // 清空容器
            container.innerHTML = '';
            // 把 canvas 转为 img
            const img = new Image();
            img.src = canvas.toDataURL("image/png");
            img.className = "w-full h-auto";
            container.appendChild(img);
            
            // 显示弹窗
            modal.classList.remove('hidden');
            
            // 恢复按钮文字
            btn.innerText = originalText;
        }).catch(err => {
            console.error(err);
            alert("生成失败，请重试");
            btn.innerText = originalText;
        });
    }

    function closeImageModal() {
        document.getElementById('image-modal').classList.add('hidden');
    }

    // --- 新增：投掷漂流瓶逻辑 ---
    function throwBottle() {
        const input = document.getElementById('bottle-message');
        const feedback = document.getElementById('bottle-feedback');
        const msg = input.value.trim();
        
        if (!msg) {
            input.placeholder = "写点什么吧，哪怕只是一个句号...";
            input.focus();
            return;
        }

        // 1. 播放音效
        if(AudioEngine && AudioEngine.playSplash) AudioEngine.playSplash();

        // 2. 创建一个视觉上的瓶子元素
        const bottle = document.createElement('div');
        bottle.innerText = "🧴"; // 也可以用 📜 或 ✉️
        bottle.style.cssText = `
            position: fixed;
            left: 50%;
            bottom: 30%;
            font-size: 40px;
            z-index: 50;
            transform: translateX(-50%);
            transition: all 1s cubic-bezier(0.5, 0, 1, 1);
            pointer-events: none;
        `;
        document.body.appendChild(bottle);

        // 3. 执行掉落动画
        requestAnimationFrame(() => {
            bottle.style.bottom = "-10%"; // 掉出屏幕底部
            bottle.style.transform = "translateX(-50%) rotate(45deg) scale(0.5)"; // 变小并旋转
            bottle.style.opacity = "0";
        });

        // 4. UI 状态更新
        input.value = "";
        input.disabled = true;
        input.placeholder = "......";
        feedback.classList.remove('hidden');

        // 5. 制造一点波浪涟漪 (丝滑加速和恢复)
        const waves = document.querySelectorAll('.wave-layer');
        
        // 改变播放速率（添加前缀支持）
        waves.forEach((w) => {
            // 设置多个属性名以确保浏览器兼容性
            w.style.setProperty('animation-play-rate', '3', '');
            w.style.setProperty('-webkit-animation-play-rate', '3', '');
        });
        
        setTimeout(() => {
            // 平滑恢复到正常速度
            waves.forEach((w) => {
                w.style.setProperty('animation-play-rate', '1', '');
                w.style.setProperty('-webkit-animation-play-rate', '1', '');
            });
            bottle.remove(); // 清理元素
            input.disabled = false; // 恢复输入框
        }, 1500);
        
        // 6. (可选) 保存到本地，作为彩蛋
        localStorage.setItem('originsight_bottle', msg);
    }

    // --- 新增：打字机特效 (让文字逐个浮现) ---
    function typeWriter(elementId, text, speed = 50) {
        const el = document.getElementById(elementId);
        if (!el) return;
        el.innerHTML = ""; // 清空原有文本
        el.style.opacity = 1;
        
        let i = 0;
        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // --- 更新：七日计划打卡 (带记忆功能) ---
    function toggleDailyTask(el, index) {
        // 读取当前进度
        let savedChecks = JSON.parse(localStorage.getItem('originsight_plan_checks') || '[]');
        const dot = el.querySelector('div > div');
        const text = el.querySelector('span');
        
        // 切换状态
        if (dot.classList.contains('opacity-0')) {
            // 选中
            dot.classList.remove('opacity-0');
            el.classList.add('bg-teal-50', 'border-teal-200');
            el.classList.remove('bg-white/60', 'border-teal-100');
            text.classList.add('line-through', 'text-teal-400');
            text.classList.remove('text-gray-700');
            // 保存
            if (!savedChecks.includes(index)) savedChecks.push(index);
        } else {
            // 取消
            dot.classList.add('opacity-0');
            el.classList.remove('bg-teal-50', 'border-teal-200');
            el.classList.add('bg-white/60', 'border-teal-100');
            text.classList.remove('line-through', 'text-teal-400');
            text.classList.add('text-gray-700');
            // 移除
            savedChecks = savedChecks.filter(i => i !== index);
        }
        
        // 保存回本地
        localStorage.setItem('originsight_plan_checks', JSON.stringify(savedChecks));
        
        // 更新进度条文字 (可选)
        const progressText = document.getElementById('plan-progress-text');
        if (progressText) {
            progressText.innerText = `已完成 ${savedChecks.length} / 7`;
        }
    }
