import { Link } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (  
        <div className="container">
            <div className="title">
            <h1 >Open</h1><h1 className="recruiter">Recruiter</h1>
            </div>
      <nav className="sidebar">
          <ul>
              <li>
                  <FontAwesomeIcon className='briefcase' icon={faBriefcase} />
                  <Link to='/ofertas'>Ofertas</Link> 
              </li>
              <li>
                  <FontAwesomeIcon className='briefcase' icon={faUser} />
                  <Link to='/candidatos'>Candidatos</Link>
              </li>
              <li>
                  <FontAwesomeIcon className='briefcase' icon={faBuilding} />
                  <Link to='/clientes'>Clientes</Link>
              </li>
              <li>
                  <FontAwesomeIcon className='briefcase' icon={faCalendar} />
                  <Link to='/entrevistas'>Entrevistas</Link>
              </li>
          </ul>
      </nav>
           
        
                
        </div>
    );
}
 
export default Navbar;