import './Hero.css'

const avatarModules = import.meta.glob('../assets/avatar.{jpg,jpeg,png,webp}', { eager: true })
const avatarSrc = Object.values(avatarModules)[0]?.default ?? null

const TAGS = ['用户研究', '数据驱动', 'ESTJ', 'AI产品', '英语流利']

export default function Hero() {
  return (
    <section id="hello" className="hero">
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left fade-in">
          <p className="hero-eyebrow">→ HI, I'M JOANNA WANG</p>

          <h1 className="hero-title">
            <span className="title-black">产品思维.</span>
            <br />
            <span className="title-accent">用户视角</span>
            <br />
            <span className="title-black">创造价值.</span>
          </h1>

          <p className="hero-slogan">→ <em>总是播种，常常期待，有时收获</em></p>

          <p className="hero-bio">
            Hello World, I'm Joanna Wang — a product thinker who turns user insights into decisions that actually matter. I'm obsessed with understanding why people do what they do, and building products they didn't know they needed. Open to work · Let's get started! 🚀
          </p>

          <div className="hero-tags">
            {TAGS.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a
              className="btn-primary"
              href="#work"
              onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              查看我的项目 →
            </a>
            <a
              className="btn-outline"
              href="#experience"
              onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              了解更多 ◆
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="hero-right fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="profile-card">
            <div className="card-grid-bg" />
            <div className="card-content">
              <div className="open-to-work">
                <span className="green-dot" />
                Open to work
              </div>

              <div className="avatar-wrap">
                {avatarSrc ? (
                  <img
                    src={avatarSrc}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    alt="Joanna Wang"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="24" r="14" fill="#C4A882" />
                      <path d="M4 60 C4 44 60 44 60 60" fill="#C4A882" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="card-labels">
                <span>能工智人</span>
                <span>智能工人</span>
                <span>人工智能</span>
                <span>咖啡续命中 ☕</span>
              </div>

              <blockquote className="card-quote">
                "总是播种，常常期待，有时收获"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
