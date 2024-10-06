

// components/Foxes.tsx
import { FoxImages } from '../interfaces/FoxImages.ts';
import {styled} from "styled-components";
import { useEffect, useState } from "react";

const FoxPreviewDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
`;

const FoxImg = ({data}: {data:FoxImages}) => {
    return (
        <FoxPreviewDiv>
            <img src={data.image} alt="A random fox for Kanye" />
        </FoxPreviewDiv>
    );
};



export default function Foxes() {
    const [foxImage, setFoxImage] = useState<FoxImages[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawImage = await fetch("https://randomfox.ca/floof/");
            const {imageData} : {imageData: FoxImages[]} = await rawImage.json();
            setFoxImage(imageData);
            
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []); 

    return (
        <div>
            {
                foxImage.map(data => <FoxImg data={data} />)
            }
        </div>
    );
}



// import React from 'react';
//import {useState, useEffect} from "react";
//export default Foxes;
