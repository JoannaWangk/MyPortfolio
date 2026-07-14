import { useState } from 'react'
import './Experience.css'

const INTERNSHIP = [
  {
    id: 'i1',
    time: '2026.05 — 2026.07',
    company: '腾讯 · 企业级云 Magic AI 产品',
    role: 'AI 产品经理',
    summary: '覆盖 AI 底层架构、AIGC 内容质量优化、国际版 GTM 三个方向，主导 Agent Runtime 设计与商业化落地',
    details: [
      'Agent Runtime 底层设计（Magic Harness）：主导四条主线产品方案设计——以 OpenCode 为统一执行引擎，跨平台、8-10 步长链路故障屏蔽、AI 消耗不可计量"三大瓶颈"，商业化定价路径不通；参与 4 条主线产品方案设计。Skill / Connector 体系则在此基础上支持运营场景按需扩展，四条线共同支撑 Agent Runtime MVP 落地。六月底 AI 积分商业化定价方案落地，七月初 Agent Runtime MVP 按期交付，链路故障屏蔽时间由数小时缩至分钟级，推动 Magic 主流架构从"Agent 对话优先"调整为"SaaS + Agent 辅助"，降低运营用户使用门槛。',
      'AIGC 内容质量优化（伏衣库 / 全推时代）：营销短信文案 bad case 率约 70%，价格格式、字段截断等硬性错误导致文案不可用，客户端到端转化受损；设计"生成前 Prompt 规则配置 → 生成中 AI 自审 → 生成后人工标注 → 反馈回流驱动 Prompt 迭代"四环节闭环工作台，落地结构化反馈机制；用户标注 bad case 与改法，AI 解后再返回生成 Prompt 修改建议，闭环发现问题到优化生效的链路。bad case 率从约 70% 降至约 10%；优化库活动模板 KA 内部算法团队基准，CVR 提升 10%、CR 提升 35%；将 Prompt 规范、bad case 分级标注、反馈回流路径抽象为可复用原子能力，覆盖伏衣库、全推时代两大场景，作为新晋内容生成能力标准化的标准接入包。',
      '国际版营销云 GTM 策略与功能设计（DFI 澳新 / 海外 SaaS）：国际版营销云对接 Segment / Appier / SFMC、港澳 DFI 等客户已交付但缺乏 SaaS 可复制路径。需从"定制交付"走向"产品化规模化"；参与海外触点通、多语言多时区适配、CAI 模型族等多项功能的需求梳理与产品设计，推进 GDPR / SOC2 合规适配与 ISO 认证启动。协同推进 Magic 多语言界面适配（后台技术改造完成并接入迭代），梳理 SaaS 场景定价方案，支撑海外 SaaS 产品正式上架；DFI Auto Push 三场景 UAT 验证通过，首个海外 SaaS 客户 7 月上旬下单单笔速达。',
    ],
  },
  {
    id: 'i2',
    time: '2025.12 — 2026.05',
    company: '国际事业部市场产品组 · 负责海外社媒 AI 内容生产、Google RSA 广告文案优化和 PPC 广告异动分析三个项目',
    role: 'AI 产品经理（广告方向）',
    summary: '聚焦海外社媒 AI 内容生产、搜索广告 RSA 优化、PPC 广告异动分析三个项目',
    details: [
      'MKT Agent · 海外社媒 AI 内容生产平台：海外 TikTok / IG 官方内容依赖纯人工流程，单条视频制作周期长且难以规模化；从 0 到 1 设计 + 素材获取 → AI 生成 → 审核发布"全链路 MVP，落地 AI 配生视频、视频混剪两大能力，打通选题 → 素材召回 → 混剪 → 文案生成 → 自动发布完整链路，构建 AI 玩积木标准化 + 人工把控创意决策的协作工作模型，并规划推动热点监控、账号数据分析等 Skill 落地，覆盖 TikTok / IG 双平台多语言场景。素材包领取到发布 <1 小时，生产效率较纯人工提升约 30%；支撑 TW 官方周曝光突破 3900 万，IG 平均互动率 1.74%，累计投放 72 篇，爆款内容 11 篇（播放量破万）。',
      'RSA · Google 搜索广告 AI 文案优化：全站 RSA 文案 POOR 占比 72.77%、AI 覆盖率不足 1%，广告强度长期处于最低位；设计卖点梳理 → Prompt 设计 → AI 生产 → 多层审核（AI 自审 + 翻译质检 + 人工复审）→ 推全的多链路方案，落地内部平台 AI Adcopy，支持业务自助创建文案生产任务与审核。Hotel SKU 场景 Ad Strength 优秀占比从 14.2% 升至 66.25%（+52pp），30 天 Impression +13%，全站 Impression +11%；独立设计 KR、k0 打击 AA/AB 实验（5000 实验组 + 5000 对照组），完成语言风格本地化提取与 Prompt 优化，验证本地化文案增量效果（Impression +8.1%，Click +5.2%）。',
      'PPC 广告异动分析 Agent：海外 Google 广告数据异动需人工逐维度排查，响应慢、归因难，critical 级异动处置时间达数小时；设计"实时监控 → 异常告警 → 多维下钻归因 → 行动建议"自动化架构，按市场 / 品类 / 广告位 / 时段等多维度构建动态阈值预警规则，覆盖 10+ 海外市场全类广告数据。接入 LLM 对接广告业务数据，实现异动根因自动定位、简报自动生成与优化建议输出（含调价、暂停低转化广告等），替代人工周报与复盘流程；critical 级异动排查响应时间从数小时压缩至分钟级，显著降低人力排查成本。搭建分级告警机制（critical / 高 / 中 / 低），对接飞书等即时通讯工具实现实时推送触达，保障投放问题快速响应与处理。',
    ],
  },
  {
    id: 'i3',
    time: '2025.09 — 2025.11',
    company: '银河证券',
    role: '产品助理',
    summary: '参与理财 APP 从 0 到 1 搭建，设计梯度付费体系与 AI 投顾模块',
    details: [
      '参与理财 APP 从 0 到 1 搭建，设计梯度付费体系与 AI 投顾模块（接入大模型实现研报智能分析、投资咨询），功能触达效率提升 30%',
      '搭建 20+ 指标埋点看板，基于数据迭代首页 UI 与转化路径',
    ],
  },
  {
    id: 'i4',
    time: '2024.08 — 2024.12',
    company: '湖北日报传媒国际传播中心',
    role: '海外运营实习生',
    summary: '聚焦 Facebook/TikTok等5大平台12个账号，搭建数据追踪与报表体系',
    details: [
      '结合竞品对标制定差异化策略，推动点击率+18%、转化率+14%',
      '社媒内容获赞破万，涨粉2000+',
    ],
  },
]

const PROJECTS = [
  {
    id: 'p1',
    time: '2025.04 — 至今',
    company: 'Liveat · 食物与情感记录微信小程序（独立开发）',
    role: '产品负责人 / Vibe Coding',
    summary: '全流程使用 AI 编程工具（Vibe Coding）独立完成微信小程序从设计到上线',
    details: [
      '功能含 EXIF 时间戳自动记录、多主题可拼贴地图、地理坐标聚合足迹地图、中英双语适配',
      '代码量约 3000 行，验证产品全链路独立交付能力',
    ],
  },
  {
    id: 'p2',
    time: '2025.10',
    company: '多模态内容生成 AI Agent（Coze 低代码搭建）',
    role: '产品负责人 / Vibe Coding',
    summary: '基于 Coze 设计 5 套自动化工作流，串联"需求解析 → AI 内容生成 → 多模态适配"全链路',
    details: [
      '覆盖小红书/抖音等 5 大平台场景',
      '内嵌风格规则库，内容发布通过率 92%，累计用户 50+',
    ],
  },
  {
    id: 'p3',
    time: '2022.01 — 2023.06',
    company: 'SourceWords APP',
    role: '产品负责人',
    summary: '主导搭建集搜索、内容推荐与社交互动于一体的英语学习产品',
    details: [
      '基于600+问卷及12位用户访谈，精准定位学习转化薄弱痛点，提出「搜索词-内容关联-场景化学习流」策略',
      '搜索点击率提升21%、内容完读率提升17%、新用户7日留存提升12%',
      '主理"所思英语"账号累计粉丝5000+，APP用户突破5万，全平台粉丝持续增长',
    ],
  },
]

function TimelineItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`timeline-item${open ? ' open' : ''}`}>
      <div className="timeline-dot" />
      <div className="timeline-card" onClick={() => setOpen(v => !v)}>
        <div className="tl-header">
          <div className="tl-left">
            <span className="tl-time">{item.time}</span>
            <h3 className="tl-role">{item.role}</h3>
            <span className="tl-company">{item.company}</span>
            {item.summary && <p className="tl-summary">{item.summary}</p>}
          </div>
          <button className="tl-toggle" aria-label="toggle">
            {open ? '−' : '+'}
          </button>
        </div>
        {open && (
          <ul className="tl-details">
            {item.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
      </div>
    </div>
  )
}

function TimelineGroup({ label, items }) {
  return (
    <div className="timeline-group fade-in">
      <div className="group-label">{label}</div>
      <div className="timeline-line">
        {items.map(item => <TimelineItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">
        <h2 className="section-title fade-in">Experience <span className="accent-diamond">◆</span></h2>
        <div className="experience-groups">
          <TimelineGroup label="实习经历" items={INTERNSHIP} />
          <TimelineGroup label="项目经历" items={PROJECTS} />
        </div>
      </div>
    </section>
  )
}
