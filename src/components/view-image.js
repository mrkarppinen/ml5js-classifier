import React, {useState, useEffect} from 'react';

export default ({image}) => {

    const [imageVisible, setImageVisible] = useState(false);

    useEffect( () => {
        if (image){
            setImageVisible(true);
            const img = document.querySelector('#image');
            img.src = image;
        }
    }, [image]);

    return (
        <div>
            <img id="image" style={{width: '400px'}} />
            { !imageVisible && <p style={{color: '#666'}} >Select image...</p>}
        </div>
    );
};