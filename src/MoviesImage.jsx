import React from 'react';

const imgPath ="https://picsum.photos/seed/picsum/200/300";
const imgPath1="https://picsum.photos/200/300/?blur";
const imgPath3="https://picsum.photos/200/300?grayscale";
const navigationLink = "https://www.google.com/";

function MoviesImages(){
    return(
        <>
                <img src={imgPath} alt="randomImage" draggable="true"/>
                <img src={imgPath1} alt="randomImage" draggable="true"/>
                <a href={navigationLink} target="_google">
                <img src={imgPath3} alt="randomImage" draggable="true"/>
                </a>
        </>
   
    );
}

export default MoviesImages;