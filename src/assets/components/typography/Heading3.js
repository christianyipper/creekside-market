const Heading3 = ( { text, color, animation, reference } ) => {
    return (
        <h3 className={ `${ color } ${ animation }` } ref={ reference }>{ text }</h3>
    );
};

export default Heading3;