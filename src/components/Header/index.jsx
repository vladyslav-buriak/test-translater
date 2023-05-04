import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <ul className="menu">
                <li className="menu__item">

                    <Link to="/">Головна</Link>
                </li>
                <li className="menu__item">

                    <Link to="/my-results">Результати</Link>
                </li>
                <li className="menu__item">

                    <Link to="/intarective">Пройти тест</Link>
                </li>
            </ul>
        </div>
    )
}

