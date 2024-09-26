import Link from "./typography/Link";

const Nav = ( {  } ) => {
    return (
        <nav>
            <section className="nav-left"></section>
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
            <section className="nav-right"></section>
        </nav>
    );
};

export default Nav;