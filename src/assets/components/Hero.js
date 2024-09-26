import Button from "./typography/Button";
import Vancouver from "../images/Vancouver.png";
import YellowLogo from "../icons/YellowLogo.png";

const Hero = ( { } ) => {
    return (
        <section className="hero" >
            <img src={ Vancouver } />
            <div>
                <img src={ YellowLogo } />
                <div>
                    <Button 
                        text="About Us"
                        link=""
                    />
                    <Button
                        text="Find Us"
                        link=""
                        variant="button2"
                    />
                </div>
            </div>
        </section>

    );
};

export default Hero;