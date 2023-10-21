import { Link, NavLink } from "react-router-dom";
import LogoColor from "../../assets/incourse-color.png"
import LogoBlanco from "../../assets/incourse-white.png"
import CartWidget from "../CartWidget/CartWidget"
import categories from "../../mocks/categories.json"

import "./Footer.css";


export const Navbar = () => {

    return (
        <>
            <footer className="d-flex flex-column flex-wrap justify-content-center align-items-center flex-lg-row py-5 mt-5 border-top">
                <div className="col-md-4 d-flex align-items-center py-3">
                    <Link className="navbar-brand logo" to="/">
                        <img src={LogoBlanco} alt="LogoIC" />
                    </Link>
                </div>
                <span className="mb-3 mb-md-0 text-muted py-3">© 2023 Company, Inc</span>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex py-3">
                    <li className="ms-3"><Link className="text-muted" to="/"><ion-icon name="logo-instagram"></ion-icon></Link></li>
                    <li className="ms-3"><Link className="text-muted" to="/"><ion-icon name="logo-facebook"></ion-icon></Link></li>
                </ul>
            </footer>
        </>
    );

}

export default Navbar;


