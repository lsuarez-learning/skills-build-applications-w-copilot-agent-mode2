import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Athletes' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/activities"><span className="brand-mark">O</span><span>OctoFit</span></NavLink>
        <nav aria-label="Main navigation">
          {navigation.map((item) => <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} key={item.to} to={item.to}>{item.label}</NavLink>)}
        </nav>
      </header>
      <main className="content"><Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="*" element={<Navigate to="/activities" replace />} />
      </Routes></main>
      <footer>OctoFit Tracker <span>•</span> build a habit worth keeping</footer>
    </div>
  )
}

export default App
