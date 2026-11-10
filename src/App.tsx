import { useState, type CSSProperties } from 'react'
import { services, spots, contacts, fmt, TG, MAP } from './data'
import './styles.css'

const PATHS = {
  tg: 'M21 4L3 11l6 2 2 6 3-4 5 4 2-15z',
  pin: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  ch: 'M4 5h16v11H8l-4 4V5z',
  doc: 'M6 3h8l4 4v14H6V3zM14 3v4h4',
  tel: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
  ig: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 9a3 3 0 100 6 3 3 0 000-6z',
}

function Icon({ k }: { k: keyof typeof PATHS }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[k]} />
    </svg>
  )
}

export default function App() {
  const [ok, setOk] = useState(false)

  return (
    <>
      <header className="hero">
        <div className="stage">
          <div className="ring r3" />
          <div className="ring r2" />
          <div className="ring r1" />
          <div className="dome" />
          {services.map((s, i) => {
            const [x, y, r] = spots[i] ?? spots[spots.length - 1]
            const style = { left: `${x}%`, top: `${y}%`, '--r': `${r}deg`, '--d': `${0.45 + i * 0.09}s` } as CSSProperties
            return (
              <a className="chip" href="#xizmatlar" style={style} key={s.title}>
                <span>{s.short}</span>
              </a>
            )
          })}
          <div className={'photo' + (ok ? ' ok' : '')}>
            <svg className="ph" viewBox="0 0 200 250" aria-hidden="true">
              <circle cx="100" cy="82" r="38" />
              <path d="M26 250c0-48 32-84 74-84s74 36 74 84" />
            </svg>
            <img
              src={import.meta.env.BASE_URL + 'agent.webp'}
              alt="Agent"
              width={927}
              height={1000}
              fetchPriority="high"
              decoding="async"
              onLoad={() => setOk(true)}
            />
          </div>
        </div>
      </header>

      <main className="page">
        <div className="in">
          <nav className="quick" aria-label="Tezkor havolalar">
            <a className="pill" href={TG} target="_blank" rel="noopener">
              <Icon k="tg" /> Telegram
            </a>
            <a className="pill" href={MAP} target="_blank" rel="noopener noreferrer">
              <Icon k="pin" /> Lokatsiya
            </a>
          </nav>

          <section id="xizmatlar">
            <h2>Xizmatlar</h2>
            <div className="list">
              {services.map((s) => (
                <a className="btn" href={TG} target="_blank" rel="noopener" key={s.title}>
                  <b>{s.title}</b>
                  <small>{s.price ? `${fmt(s.price)} soʻmdan` : ' '}</small>
                </a>
              ))}
            </div>
          </section>

          <section id="aloqa">
            <h2>Bogʻlanish</h2>
            <div className="list">
              {contacts
                .filter((c) => c.href)
                .map((c) => (
                  <a className="btn row" href={c.href} target="_blank" rel="noopener" key={c.label}>
                    <Icon k={c.kind} />
                    <span>
                      <b>{c.label}</b>
                      <small>{c.value}</small>
                    </span>
                  </a>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
