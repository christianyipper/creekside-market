import Instagram from "../icons/Instagram.png"
import Facebook from "../icons/Facebook.png"
import Map from "../icons/Map.png"

import Paragraph from "./typography/Paragraph";
import Social from "./Social";
import WhiteLogo from "../icons/WhiteLogo.png"

const Footer = () => {
    return (
        <footer>
            <img src={ WhiteLogo }/>
            <div className="footer-border"/>
            <Paragraph
                text="Where Cultures Collide."
                variant="bold"
            />
            <hr/>
            <Paragraph
                text="Creekside Park, 1455 Quebec St, Vancouver, BC V6A 3Z7"
            />
            <section>
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
        </footer>
    );
};

export default Footer;