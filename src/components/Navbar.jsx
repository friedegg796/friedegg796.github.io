import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
            <a href="#top">
            <div class="title"> Friedegg796 </div>
            </a>

           <div className="navicenter">
            <ul className="navigroup">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
              </div>

              <div className="naviright">
            <ul className="navisocials">
                <li><a href="#footer">Contact</a></li>
            </ul>

              </div>

    </nav>
  )
}

export default Navbar
