import './reusable.css'
import { Link } from 'react-router-dom'

function navigationbar() {
  return (
    <nav className="navbar">
            <Link to="/">
            <div class="title"> Friedegg796 </div>
            </Link>

           <div className="navicenter">
            <ul className="navilinks">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>


            </ul>


           </div>
    </nav>
  )
}

export default navigationbar
