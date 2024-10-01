import GalleryImage from "../components/GalleryImage";
import GalleryText from '../components/GalleryText';

// === IMAGES ===
import Food1 from '../images/food1.jpg';
import Food2 from '../images/food2.jpg';
import Food3 from '../images/food3.jpg';
import Food4 from '../images/food4.jpg';
import Food5 from '../images/food5.jpg';
import Food6 from '../images/food6.jpg';
import Food7 from '../images/food7.jpg';
import Food8 from '../images/food8.jpg';

const Gallery = ( { } ) => {
    return (
        <section className="gallery-section">
            <GalleryText 
                heading={'From May 10th to October 20th,'}
                text={'this market caters to food enthusiasts, people of colour, and residents seeking entertainment.'}
            />
                <GalleryImage image={ Food1 } />
                <GalleryImage image={ Food2 } />
                <GalleryImage image={ Food3 } />
                <GalleryImage image={ Food4 } />
                <GalleryImage image={ Food5 } />
                <GalleryImage image={ Food6 } />
                <GalleryImage image={ Food7 } />
                <GalleryImage image={ Food8 } />
            <GalleryText 
                heading={'With its diverse array of food vendors and unique offerings,'}
                text={'it provides an opportunity to savor distinctive culinary delights while enjoying the warm summer weather by the waterfront.'}
            />
        </section>
    );
};

export default Gallery;