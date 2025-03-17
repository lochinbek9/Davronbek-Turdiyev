
import "./Navbar.css"

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Davron</div>
            <span>toggle</span>
        </div>
       
        <div className="n-right">
            <div className="n-list">
                <ul style={{}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Expriencs</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Navbar