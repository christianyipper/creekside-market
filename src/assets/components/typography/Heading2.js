const Heading2 = ( { text, color, animation, reference } ) => {

    return (
        <h2 className={ `${ color } ${ animation }` } ref={ reference }>{ text }</h2>
    );
};

export default Heading2;