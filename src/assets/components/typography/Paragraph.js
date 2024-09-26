const Paragraph = ( { text, color, animation, variant } ) => {
    return (
        <p className={ `${ color, animation, variant }` }>{ text }</p>
    );
};

export default Paragraph;