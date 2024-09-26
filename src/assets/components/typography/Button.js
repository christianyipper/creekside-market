const Button = ( { text, link, variant } ) => {
    return (
        <a className={ `button ${ variant }` } href={ link }>
            <p>{ text }</p>
        </a>
    );
};

export default Button;