import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
            <div className="content">
                <div className="pt1">
                    <nav>
                        <ul>
                            <li><Link to='/cadastro'>Cadastre-se</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header