const GalleryImage = ( { image } ) => {
    return (
        <div className="gallery-image" >
            <img src={ image } />
        </div>
    );
};

export default GalleryImage;