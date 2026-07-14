import { useState, useEffect } from 'react'
import './Work.css'

const PROJECTS = [
  {
    id: 1,
    title: '小红薯 AI 内容生成 Agent',
    desc: '基于 Coze 平台独立搭建的多模态内容生成智能体，支持全链路自动化生产',
    tags: ['AI Agent', 'Coze', 'Vibe Coding'],
    color: '#E8D5C0',
    images: ['/Xiaohongshu_chugao_1.jpg'],
    link: 'https://www.coze.cn/store/agent/7581477576880160820?bot_id=true',
    background: 'AI 内容生产是当前内容创作者的核心痛点：从选题、配图到文案撰写，链路长、效率低。希望通过 Coze 工作流搭建一个自动化 Agent，覆盖搜索、文案、封面、爆款提示等全流程，沉淀一套可复用的"四闭环"Prompt 迭代方法论。',
    role: '独立完成 Agent 架构设计、工作流搭建、Prompt 编写、自动化测试与上线发布全流程。',
    highlights: [
      '基于 Coze 设计 5 套自动化工作流，覆盖小红书/抖音等 5 大平台场景',
      '内嵌风格规则库，内容发布通过率 92%，累计产出 50+ 篇',
      '搭建"搜索-文案-封面-爆款提示"四闭环 Prompt 迭代机制',
    ],
    results: 'Agent 已在 Coze 商店上线，累计生产内容 50+ 篇，发布通过率 92%。',
  },
  {
    id: 2,
    title: 'Liveat · 食物与情感记录微信小程序',
    desc: '独立开发的全流程 AI 编程作品，融合 AI 自动打卡 + 多主题拼贴地图',
    tags: ['Vibe Coding', '0→1', 'C端'],
    color: '#D0C5B8',
    images: [],
    link: '',
    background: '当代年轻人在快节奏生活中逐渐遗忘"好好吃饭"的体验，市面缺乏一款既轻量又有情感温度的饮食记录工具。希望用 AI 编程工具做一款温暖的"食物情感日记"。',
    role: '独立完成产品设计、AI 编程实现、上线部署全流程。',
    highlights: [
      '使用 AI 编程工具（Vibe Coding）独立完成微信小程序从设计到上线',
      '功能含 EXIF 时间戳自动记录、多主题可拼贴地图、足迹地图、中英双语适配',
      '代码量约 3000 行，验证产品全链路独立交付能力',
    ],
    results: '完成全栈独立交付 MVP，验证 0→1 产品从设计到上线的完整链路。',
  },
]

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img src={src} alt="enlarged" onClick={e => e.stopPropagation()} />
      <button className="lightbox-close" onClick={onClose}>✕</button>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [lightboxSrc, setLightboxSrc] = useState(null)

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && (lightboxSrc ? setLightboxSrc(null) : onClose())
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, lightboxSrc])

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="modal-body">
            {/* Left: images */}
            <div className="modal-images">
              <div
                className="modal-img-main"
                style={{ background: project.color }}
                onClick={() => project.images[imgIndex] && setLightboxSrc(project.images[imgIndex])}
              >
                {project.images[imgIndex]
                  ? <img src={project.images[imgIndex]} alt="project" />
                  : <span className="img-placeholder-text">{project.title}</span>
                }
                {project.images.length > 0 && (
                  <span className="zoom-hint">🔍 点击放大</span>
                )}
              </div>
              {project.images.length > 1 && (
                <div className="modal-img-thumbs">
                  {project.images.map((src, i) => (
                    <div
                      key={i}
                      className={`thumb${i === imgIndex ? ' active' : ''}`}
                      onClick={() => setImgIndex(i)}
                      style={{ background: project.color }}
                    >
                      <img src={src} alt={`thumb ${i}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: details */}
            <div className="modal-details">
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-desc">{project.desc}</p>
              <div className="modal-tags">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="modal-section">
                <h4>项目背景</h4>
                <p>{project.background}</p>
              </div>
              <div className="modal-section">
                <h4>我的角色</h4>
                <p>{project.role}</p>
              </div>
              <div className="modal-section">
                <h4>核心亮点</h4>
                <ul>{project.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
              </div>
              <div className="modal-section">
                <h4>成果数据</h4>
                <p>{project.results}</p>
              </div>

              {project.link && (
                <a className="btn-primary" href={project.link} target="_blank" rel="noreferrer">
                  查看完整项目 →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}

export default function Work() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="work" className="section work-section">
      <div className="section-inner">
        <h2 className="section-title fade-in">Work <span className="accent-diamond">◆</span></h2>

        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="work-card fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setSelected(p)}
            >
              <div className="card-cover" style={{ background: p.color }}>
                <span className="card-cover-title">{p.title}</span>
              </div>
              <div className="card-info">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="card-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <span className="card-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
