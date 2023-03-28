import {Link} from 'react-router-dom'

function Navbar() {

    return(
        <div className='Navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Serviços">Serviços</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
            </ul>
        </div>
    )
}

export default Navbar