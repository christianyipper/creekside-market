import Paragraph from "./typography/Paragraph";

const About = ( { } ) => {
    return (
        <section className="about" >
            <div>
                <Paragraph
                    text={
                        <>
                            <span className="bold">The Creekside Night Market</span>, situated along the picturesque False Creek shoreline in Vancouver, adjacent to Main Street – Science World Station, offers a vibrant summer experience for locals and visitors alike.
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default About;