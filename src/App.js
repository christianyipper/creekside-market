// === INTERSECTION OBSERVER ===
import { useInView } from 'react-intersection-observer';

// === TYPOGRAPHY ===
import Heading1 from "./assets/components/typography/Heading1";
import Heading2 from "./assets/components/typography/Heading2";
import Heading3 from "./assets/components/typography/Heading3";
import Paragraph from "./assets/components/typography/Paragraph";
import Link from "./assets/components/typography/Link";
import Button from "./assets/components/typography/Button";

// === COMPONENTS ===
import Nav from "./assets/components/Nav";
import Footer from "./assets/components/Footer";
import GalleryImage from "./assets/components/GalleryImage";

const App = () => {
    // === INTERSECTION OBSERVER REFERENCE ===
    // ref: the reference that is used to determine if the element is in view.
    // inView: the element which an animation will be applied to.
    const { ref: heroRef, inView: heroView } = useInView( { threshold: 1 } );
    const { ref: titleRef, inView: titleView } = useInView( { threshold: 1, rootMargin: '-10% 0%' } );

    return (
        // This is an example of how I would use the "Heading1" component.
        // Note: the animation would trigger if the reference is in view with intersection observer.
        <main>
            <Nav/>
            <section className={ `hero ${ heroView ? "fade-in" : "fade-out" }` } ref={ heroRef }>
                <Heading1
                    text="Creekside Night Market"
                    color="yellow"
                    animation={ titleView ? "slide-in" : "slide-out" }
                    reference={ titleRef }
                />
            </section>
        </main>
    )
}

export default App;