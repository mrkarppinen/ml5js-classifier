import React, {useState, useEffect} from 'react';
import Loading from './loading';

export default ({image, classifier}) => {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (image) {
            setLoading(true);
            const img = document.createElement("img");
            img.src = image;
            img.addEventListener('load', () => {
                classifier.predict(img, function(err, results) { 
                    setLoading(false);
                    if (!err) {
                        const result = results
                        .map( result => `${result.className}:${result.probability.toFixed(4)}` )
                        .join('</br>');
                        setResult(result);
                    }
                });
            });
        }
    }, [image]);

    return (
        <div>
            <div id="result" dangerouslySetInnerHTML={{'__html':result}}></div>
            { loading && <Loading /> }
        </div>
    );

};