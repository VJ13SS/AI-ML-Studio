import './home.css'
import Hero from "../../components/hero/hero";
import { LuBookOpen, LuFlaskConical, LuFolderKanban, LuWrench, LuNewspaper } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const cards = [
  {
    to: '/learning',
    icon: <LuBookOpen />,
    iconColor: '#2563eb',
    iconBg: '#dbeafe',
    title: 'Learning',
    desc: 'Learn AI & ML concepts\nin a simple way.',
  },
  {
    to: '/projects',
    icon: <LuFolderKanban />,
    iconColor: '#16a34a',
    iconBg: '#dcfce7',
    title: 'Projects',
    desc: 'Explore real-world\nML projects.',
  },
  {
    to: '/laboratory',
    icon: <LuFlaskConical />,
    iconColor: '#dc2626',
    iconBg: '#fee2e2',
    title: 'Laboratory',
    desc: 'Compare models and\nfind the best one.',
  },
  {
    to: '/tools',
    icon: <LuWrench />,
    iconColor: '#7c3aed',
    iconBg: '#ede9fe',
    title: 'Tools',
    desc: 'Discover the best\nAI & ML tools.',
  },
  {
    to: '/blogs',
    icon: <LuNewspaper />,
    iconColor: '#0891b2',
    iconBg: '#cffafe',
    title: 'Blogs',
    desc: 'Read latest articles\nand news.',
  },
]

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <h2 className="home-section-title">Explore AI-ML Studio</h2>
      <div className="home-cards">
        {cards.map((card) => (
          <NavLink
            key={card.to}
            to={card.to}
            className="home-card"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className="home-card-icon"
              style={{ color: card.iconColor, backgroundColor: card.iconBg }}
            >
              {card.icon}
            </div>
            <span className="home-card-title">{card.title}</span>
            <p className="home-card-desc">{card.desc}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}