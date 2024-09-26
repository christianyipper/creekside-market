const Button = ( { text, link, variant } ) => {
    return (
        <a className={ `button ${ variant }` } href={ link }>
            { text }
        </a>
    );
};

export default Button;