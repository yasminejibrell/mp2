

//src/App.tsx
import Kanye from "./components/Kanye.tsx";
import Foxes from "./components/Foxes.tsx";
import styled from "styled-components";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
    return (
        <ParentDiv>
            <Kanye/>
            <Foxes/>
        </ParentDiv>
    )
}






// import { useEffect, useState } from "react";
// import { Quotes } from "./interfaces/Quotes.ts";
// import { FoxImages } from "./interfaces/FoxImages.ts";

// export default function App() {
//     // useState Hooks to store quotes and images
//     // const [quote, setQuote] = useState<Quotes[]>([]);
//     // const [foxImage, setFoxImage] = useState<FoxImages[]>([]);

//     // // useEffect Hook to fetch data and images
//     // useEffect(() => {
//     //     async function fetchData(): Promise<void> {
//     //         const rawQuote = await fetch("https://api.kanye.rest/");
//     //         const {quoteData} : {quoteData: Quotes[]} = await rawQuote.json();
//     //         setQuote(quoteData);

//     //         const rawImage = await fetch("https://randomfox.ca/floof/");
//     //         const {imageData} : {imageData: FoxImages[]} = await rawImage.json();
//     //         setFoxImage(imageData);
            
//     //     }
//     //     fetchData()
//     //         .then(() => console.log("Data fetched successfully"))
//     //         .catch((e: Error) => console.log("There was the error: " + e));
//     // }, []); 

//     return (
//         // <ParentDiv>
//         //     <Kanye data={quote}/>
//         //     <Foxes data={foxImage}/>
//         // </ParentDiv>
//     )
// }



                // const imageData = await rawImage.json();
                // Fetch Kanye quote
                // Fetch random fox image
                // setFoxImage([{ image: imageData.image }]);
                // setFoxImage(imageData.image); // Set image URL from Fox API 

// Empty dependency array ensures it runs once after initial render
// const quoteData = await rawQuote.json();
                // const {quoteData}: {quoteData: Quotes[]} = await rawQuote.json();
                // setQuote([{quote: quoteData.quote}]); // Set quote from Kanye API

/* export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Quotes[]>([]);
    const [images, setImages] = useState<Foxes[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.kanye.rest/");
            const rawImages = await fetch("https://randomfox.ca/floof/");
            const {results} : {results: Quotes[]} = await rawData.json();
            const {imgResults} : {imgResults: Foxes[]} = await rawImages.json();
            setData(results);
            setImages(imgResults);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <Kanye data={data}/>
        </ParentDiv>
    )
} */


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
