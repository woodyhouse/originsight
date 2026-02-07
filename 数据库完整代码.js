/* ==========================================
   OriginSight 童年场景&信念重构 完整数据库
   使用方法：复制下方所有代码，粘贴到 generateReport() 函数中
   ========================================== */

// ============= 在 generateReport() 函数开头添加这段 =============
// 找到这行代码：
// let sevenDays = [];
// 在它后面添加：

let childhoodScenes = [];
let beliefData = { oldBeliefs: [], newBeliefs: [], affirmation: "" };

// ============= 数据库定义（在所有类型判定之后使用） =============

const CHILDHOOD_SCENES_DB = {
    secure: [
        { age: "6岁", moment: "你跌倒擦破了膝盖，哭着跑回家。妈妈抱住你，说："痛就哭吧，哭完了我们处理伤口。" 你在她怀里安心地哭完，然后一起贴上创可贴。", damage: "我的情绪是被允许的，痛苦会被看见和回应。" },
        { age: "10岁", moment: "你做错事被老师批评，回家忐忑地告诉父母。他们没有打骂，而是问："发生什么了？我们一起想办法。"", damage: "犯错是可以被理解的，我不会因为不完美而被抛弃。" },
        { age: "14岁", moment: "你第一次喜欢上一个人，紧张地和妈妈分享。她笑着说："青春期很正常，有什么需要聊的随时来找我。"", damage: "我的情感是正常的，我可以信任父母。" }
    ],
    
    fearful: [
        { age: "5岁", moment: "父亲心情好时会抱起你转圈，心情不好时会因为你太吵而大发雷霆。你永远猜不到今天是哪个爸爸回家。", damage: "爱是不可预测的，我必须时刻警惕。" },
        { age: "10岁", moment: "母亲一边哭着说"我为你牺牲了一切"，一边第二天又因为你考了第一名而骄傲地在亲戚面前炫耀。你彻底混乱了。", damage: "我既是她的负担，又是她的骄傲，我不知道自己是谁。" },
        { age: "15岁", moment: "父母当着你的面激烈争吵，互相指责对方毁了这个家。你站在中间，不知道该站在哪一边，只想逃离。", damage: "家是战场，我既想逃离又无处可去。" }
    ],
    
    anxiety_pleaser: [
        { age: "6岁", moment: "你兴冲冲地拿着100分的试卷回家，想要得到妈妈的夸奖。但她只是淡淡地说了句"这是你应该做的"，然后转身继续抱怨今天有多累。", damage: "我的成就是无价值的，除非它能减轻别人的痛苦。" },
        { age: "10岁", moment: "你鼓起勇气说想要一双新鞋，父母立刻变了脸："我们为了你省吃俭用，你怎么这么不懂事？" 你羞愧地低下头，发誓再也不提需求。", damage: "我的欲望是罪恶的，我不配拥有。" },
        { age: "14岁", moment: "母亲又开始哭诉婚姻的不幸，你像往常一样安慰她。她抱着你说："还好有你，不然妈妈真不知道该怎么活。" 你感到一股窒息感，但笑着说"没事妈妈，我会一直陪着你"。", damage: "我的存在价值是拯救她，离开就是背叛。" }
    ],
    
    anxiety_rescuer: [
        { age: "7岁", moment: "父母又吵架了，父亲摔门而出。母亲坐在床边哭泣，你走过去递纸巾。她抱住你说："你是妈妈唯一的依靠。" 从那一刻起，你知道你必须代替父亲。", damage: "我必须成为母亲的情感支柱，否则这个家就会塌。" },
        { age: "11岁", moment: "母亲详细地向你诉说父亲如何冷漠、如何不关心家。你听得心如刀绞，恨不得立刻长大，带她离开这里。", damage: "我要变强大，强大到能拯救她。" },
        { age: "16岁", moment: "你谈了第一次恋爱，母亲发现后歇斯底里："你也要抛下妈妈了是吗？" 你立刻分手了。", damage: "爱别人就是背叛母亲，我不配拥有自己的生活。" }
    ],
    
    avoid_dismissive: [
        { age: "5岁", moment: "你哭着跑向妈妈说害怕打雷，她不耐烦地说："有什么好怕的？自己回房间去！" 你僵在原地，眼泪憋了回去。", damage: "表达脆弱会被羞辱，我必须自己扛。" },
        { age: "9岁", moment: "你生病发烧，父母都在忙工作。你一个人躺在床上，听着客厅的电视声，感到彻骨的孤独。从那以后，你不再生病时叫他们。", damage: "生病和痛苦是我一个人的事，不要指望别人。" },
        { age: "13岁", moment: "你尝试和父亲分享学校的趣事，他头也不抬地说："别烦我，我很忙。" 你默默走开，再也没有主动说话。", damage: "我的存在是打扰，沉默才安全。" }
    ],
    
    avoid_rationalizer: [
        { age: "8岁", moment: "你因为没考第一名而哭，父亲冷冷地说："哭有什么用？下次考好就行了。" 你擦干眼泪，发誓不再让情绪失控。", damage: "情绪是软弱的表现，只有逻辑和成就才有价值。" },
        { age: "12岁", moment: "你兴奋地和母亲分享梦想，她打断你："别做白日梦了，实际点。" 你闭上嘴，把所有想象都埋在心底。", damage: "感性是幼稚的，理性至上。" },
        { age: "15岁", moment: "你失恋了，试图和父母倾诉。他们说："谈恋爱耽误学习，分了就分了。" 你意识到他们永远不会懂，从此把情感彻底锁死。", damage: "没人在意我的感受，那就别感受了。" }
    ]
};

const BELIEF_RECONSTRUCTION_DB = {
    secure: {
        oldBeliefs: ["我必须完美才配被爱（轻微）", "我要对所有人负责", "展示脆弱=示弱"],
        newBeliefs: ["我的价值不取决于成就", "我只对自己的情绪负责", "脆弱是连接的起点"],
        affirmation: "我是完整的、值得的。我可以既坚强又柔软，既独立又需要他人。"
    },
    
    fearful: {
        oldBeliefs: ["爱=伤害，靠近=危险", "我必须控制一切才安全", "我注定孤独一生"],
        newBeliefs: ["健康的爱不会伤害我", "我可以在不确定中安全", "我值得被温柔以待"],
        affirmation: "我的创伤不是我的错。我可以学会信任，可以选择不重复父母的模式。"
    },
    
    anxiety_pleaser: {
        oldBeliefs: ["我必须讨好别人才能被爱", "我的需求是自私的", "拒绝别人会让我被抛弃"],
        newBeliefs: ["真正爱我的人，爱的是真实的我，而不是讨好的我", "照顾自己不是自私，是自尊", "健康的关系建立在尊重边界之上，不是无限牺牲"],
        affirmation: "我值得被爱，不需要通过讨好来证明。我的需求和别人的一样重要。"
    },
    
    anxiety_rescuer: {
        oldBeliefs: ["我的价值取决于能否拯救别人", "我过得好就是对痛苦父母的背叛", "离开她=她会死，我会有罪"],
        newBeliefs: ["我的价值在于我是谁，而不是我能为谁做什么", "父母的人生是他们的课题，我有权利追求幸福", "真正的爱是放手，让彼此自由"],
        affirmation: "我不是任何人的救世主。我可以爱别人，但不必为任何人牺牲自己。"
    },
    
    avoid_dismissive: {
        oldBeliefs: ["依赖别人=软弱", "亲密=失去自由", "情感需求是麻烦"],
        newBeliefs: ["健康的依赖是人性的一部分，不是软弱", "真正的亲密是两个独立的人选择彼此靠近", "表达需求是勇敢，不是负担"],
        affirmation: "我可以既独立又有连接。允许自己被爱，不会让我失去自己。"
    },
    
    avoid_rationalizer: {
        oldBeliefs: ["情绪是软弱的表现", "理性>感性", "人际关系可以用逻辑解决"],
        newBeliefs: ["情绪是生命力的体现，不是软弱", "理性和感性都重要，缺一不可", "人心不是问题，不需要被'解决'"],
        affirmation: "我允许自己感受。逻辑能解决问题，但情感让我活着。"
    }
};

// ============= 使用示例 =============

/*
在每个依恋类型的 sevenDays 赋值后，添加：

// 确定详细类型键
let detailedType = 'secure';  // 默认
if (type === 'anxiety') {
    detailedType = scores.placate > scores.anxiety * 0.5 ? 'anxiety_pleaser' : 'anxiety_rescuer';
} else if (type === 'avoid') {
    detailedType = scores.superReason > scores.avoid * 0.5 ? 'avoid_rationalizer' : 'avoid_dismissive';
} else if (type === 'fearful') {
    detailedType = 'fearful';
}

// 读取对应数据
childhoodScenes = CHILDHOOD_SCENES_DB[detailedType] || CHILDHOOD_SCENES_DB.secure;
beliefData = BELIEF_RECONSTRUCTION_DB[detailedType] || BELIEF_RECONSTRUCTION_DB.secure;

*/

// ============= 完整示例：修改焦虑-讨好型部分 =============

/*
找到焦虑-讨好型的代码块（约1134-1191行），在 sevenDays 赋值后添加：

                sevenDays = [
                    "对一个不合理的请求坚定地说"不"，并不加任何解释。",
                    "在点餐或做决定时，不问"便不便宜/方不方便"，只问"我想要什么"。",
                    "做一件让自己开心、但可能让别人觉得"自私"的小事。",
                    "试着在对话中表达一次"我不同意你的观点"。",
                    "列出 3 个你为了"懂事"而牺牲掉的愿望。",
                    "对着镜子练习眼神犀利，直到自己感到有点"凶"。",
                    "奖励自己一份不需要任何人同意的礼物。"
                ];
                
                // ===== 新增：读取童年场景和信念数据 =====
                childhoodScenes = CHILDHOOD_SCENES_DB.anxiety_pleaser;
                beliefData = BELIEF_RECONSTRUCTION_DB.anxiety_pleaser;

// 对其他类型做同样的处理：
// anxiety_rescuer -> CHILDHOOD_SCENES_DB.anxiety_rescuer
// avoid_dismissive -> CHILDHOOD_SCENES_DB.avoid_dismissive
// avoid_rationalizer -> CHILDHOOD_SCENES_DB.avoid_rationalizer
// secure -> CHILDHOOD_SCENES_DB.secure
// fearful -> CHILDHOOD_SCENES_DB.fearful

*/
