import { useState, useEffect } from 'react'
import './Work.css'

const PROJECTS = [
  {
    id: 1,
    title: '校园二手交易平台',
    desc: '从零到一设计并推动上线的校园闲置物品交易 App',
    tags: ['0→1', '用户研究', 'C端'],
    color: '#E8D5C0',
    images: [],
    background: '校园内存在大量闲置物品，但现有平台安全性低、信任度差，同学之间交易体验不佳。',
    role: '负责全流程产品设计，包括用户访谈、竞品分析、原型设计及需求文档编写。',
    highlights: ['深度访谈 30+ 用户，提炼核心痛点', '设计「信用体系」解决信任问题', '输出完整 PRD 及 80+ 页原型'],
    results: '内测阶段 DAU 破百，好评率 92%，上线 2 周内完成冷启动。',
    link: '',
  },
  {
    id: 2,
    title: '智能客服需求分析报告',
    desc: '基于 NLP 的企业智能客服产品调研与需求分析',
    tags: ['需求分析', '数据驱动', 'B端'],
    color: '#D0C5B8',
    images: [],
    background: '某中型电商企业客服成本高、响应慢，希望引入智能客服降本增效。',
    role: '完成竞品研究、用户痛点分析，主导功能优先级评估与 ROI 测算。',
    highlights: ['调研 5 家主流智能客服产品', '建立 KANO 模型评估功能优先级', '测算 ROI 可缩短人工处理时间 40%'],
    results: '报告获得导师高度评价，作为课程优秀案例展示。',
    link: '',
  },
  {
    id: 3,
    title: '健康饮食打卡 App 改版',
    desc: '针对用户留存率低问题的产品改版提案',
    tags: ['改版提案', '留存优化', 'C端'],
    color: '#C8BFA8',
    images: [],
    background: '某健康类 App 7 日留存率仅 18%，用户反馈打卡流程繁琐、缺乏成就感。',
    role: '独立完成数据分析、用户路径梳理与改版方案，制作高保真原型。',
    highlights: ['分析漏斗数据定位流失节点', '提出「轻打卡 + 社交激励」双路径', '改版后预估 7 日留存提升至 32%'],
    results: '方案作为产品创新大赛参赛作品，获校级二等奖。',
    link: '',
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
                  查看完整文档 →
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
