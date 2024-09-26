import YellowLogo from "../icons/YellowLogo.png"
import Link from "./typography/Link";
import Social from "./Social";

import Instagram from "../icons/Instagram.png"
import Facebook from "../icons/Facebook.png"
import Map from "../icons/Map.png"

const Nav = () => {
    return (
        <nav>
            <section className="nav-left">
                <a>
                    <img className="nav-logo" src={ YellowLogo }/>
                </a>
            </section>
            <section className="nav-mid">
                <Link
                    text="Home"
                    link=""
                />
                <Link
                    text="About"
                    link=""
                />
                <Link
                    text="Locations"
                    link=""
                />
            </section>
            <section className="nav-right">
                <Social
                    link="https://www.instagram.com/"
                    icon={ Instagram }
                />
                <Social
                    link="https://www.facebook.com/"
                    icon={ Facebook }
                />
                <Social
                    link="#map"
                    icon={ Map }
                />
            </section>
        </nav>
    );
};

export default Nav;