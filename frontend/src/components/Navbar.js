import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#f4f4f4' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
          <h1>Fitness Tracker</h1>
        </Link>
        <nav>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar