import { useState } from 'react'
import './Experience.css'

const INTERNSHIP = [
  {
    id: 'i1',
    time: '2026.01 — 2026.04',
    company: '携程 · 广告产品—AI方向',
    role: '产品经理实习生',
    summary: '聚焦海外广告投放与营销自动化，深度参与3个项目从需求设计到上线验证完整链路',
    details: [
      'MKT Agent 海外社媒营销智能生产平台：参与MVP搭建，推动AI图文/视频能力上线，打通Meta发布链路；Q1完成MVP交付并规模化，内容生产效率较纯人工提升约30%，TW官方周曝光突破3900万',
      'PPC广告异动分析Agent：搭建自动化监控与归因工具，设计核心指标实时告警规则，实现异动全链路自动化，覆盖10+市场；响应时间从数小时压缩至分钟级',
      'Meta广告投放链路重构：参与新投放链路产品设计，优化批量建广素材拆分逻辑，项目落地后单次建广操作步骤减少约60%，运营重复配置错误率下降40%',
    ],
  },
  {
    id: 'i2',
    time: '2025.07 — 2025.12',
    company: '银河证券 · 产品助理',
    role: '产品经理实习生',
    summary: '围绕APP商业化目标，从用户痛点切入完成产品从0到1搭建，推动付费服务体系落地',
    details: [
      '交易咨询产品与AI投顾功能搭建：设计多档梯度付费产品形态，推动80%功能按排期交付；独立完成AI功能流程需求梳理，推动接入外部大模型并规划AI研报分析、智能对话等3项功能；功能触达效率提升30%',
      '数据驱动产品迭代支持：基于用户反馈优化UI布局与交互路径；推动内测反馈机制推动购买流失节点优化；制定20+核心指标里程碑方案，协助搭建数据仪表盘',
    ],
  },
  {
    id: 'i3',
    time: '2024.08 — 2024.12',
    company: '湖北日报传媒国际传播中心',
    role: '海外运营实习生',
    summary: '聚焦Facebook/TikTok等5大平台12个账号，搭建数据追踪与报表体系',
    details: [
      '结合竞品对标制定差异化策略，推动点击率+18%、转化率+14%',
      '社媒内容获赞破万，涨粉2000+',
    ],
  },
]

const PROJECTS = [
  {
    id: 'p1',
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
