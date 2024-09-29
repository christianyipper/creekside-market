const GalleryText = ( { heading, text } ) => {
    return (
        <div className="gallery-text" >
            <h3>{ heading }</h3>
            <p>{ text }</p>
        </div>
    );
};

export default GalleryText;