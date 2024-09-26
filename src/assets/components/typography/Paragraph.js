const Paragraph = ( { text, color, animation } ) => {
    return (
        <p className={ `${ color, animation }` }>{ text }</p>
    );
};

export default Paragraph;