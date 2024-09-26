const Heading1 = ( { text, color, animation, reference } ) => {
    return (
        <h1 className={ `${ color } ${ animation }` } ref={ reference }>{ text }</h1>
    );
};

export default Heading1;