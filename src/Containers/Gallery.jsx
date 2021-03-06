import React from 'react';
import FractalCard from '../Components/FractalCard';

const Gallery = (props) => {

    const renderAllFractals = () => {
        return props.fractals.map( fractal => {
            return <FractalCard key={fractal.id} fractal={fractal} context="gallery" />
        })
    }

    return(
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="fractal-card-container" >
                {renderAllFractals()}
            </div>
        </div>
    )


}

export default Gallery;