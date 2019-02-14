
import React from 'react';
import styled from 'styled-components';

const LoadButton = styled.button`
    border: none;
    background: url(${process.env.PUBLIC_URL}/Camera-icon.png);
    background-size: contain;
    width: 100px;
    height: 100px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const Input = styled.input.attrs({ type: 'file' })`
    display: none;
`;

export default ({imageSelected}) => {
    const MAX_FILE_SIZE = 100000;

    const onChange = (event) => {

        if (event.target.files && event.target.files.length > 0){
            const file = event.target.files[0];
            const reader = new FileReader();
    
            reader.onload = (event) => {
                if (file.size < MAX_FILE_SIZE){
                    imageSelected(event.target.result); 
                }else {
                    scaleImage(event.target.result, file.type, MAX_FILE_SIZE/file.size).then( result => imageSelected(result) )
                }
            };
            reader.readAsDataURL(file);
        }

    }; 

    const scaleImage = (dataUri, type, scale) => {
        return new Promise( (resolve, reject) => {
                const img = document.createElement("img");
                img.src = dataUri;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL(type));                
                }
        });
    }

    const openInput = () => {
        document.querySelector('input[type="file"]').click();
    }

    return (
        <div>
            <Input accept="image/*" onChange={onChange}/>
            <LoadButton type="button" onClick={openInput} />
        </div>
    );
};