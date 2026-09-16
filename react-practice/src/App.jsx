import { createContext, useContext, useState } from 'react'
import './App.css'

const UserContext = createContext()

function Dashboard() {
  return (
    <div className="dashboard-box">
      <p>
         <strong>Dashboard</strong>
      </p>
      <ProfileCard />
    </div>
  )
}

function ProfileCard() {
  const { user, setUser } = useContext(UserContext)

  const toggleStatus = () => {
    setUser((prev) => ({
      ...prev,
      status: prev.status === 'at hostel' ? 'at college' : 'at home',
    }))
  }

  return (
    <div className="card">
      <h3>Student Profile</h3>
      <div className="card-item">
        <strong>Name:</strong> {user.name}
      </div>
      <div className="card-item">
        <strong>Role:</strong> {user.role}
      </div>
      <div className="card-item">
        <strong>Branch:</strong> {user.branch}
      </div>
      <div className="card-item">
        <strong>Status:</strong> <span className="status-text">{user.status}</span>
      </div>

      <button className="status-btn" onClick={toggleStatus}>
        Status
      </button>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState({
    name: 'Abhishek Nayak',
    role: 'CSE Student',
    branch: 'Computer Science & Engineering',
    status: 'at hostel',
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
        <Dashboard />
    </UserContext.Provider>
  )
}
