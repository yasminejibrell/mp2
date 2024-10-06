

// src/components/Kanye.tsx
import { KanyeQuotes } from '../interfaces/KanyeQuotes.ts';
import { useEffect, useState } from "react";
import styled from "styled-components";


const KanyeDiv = styled.div`
    margin: 3rem;
    padding: 1rem;
    width: 20rem;
    background-color: lightblue;
`;

const KanyeQuote = ({data}: {data:KanyeQuotes}) => {
    return (
        <KanyeDiv>
            <h1>{data.quote}</h1>
            <h2> - Kanye West </h2>
        </KanyeDiv>
    );
};

export default function Kanye() {
    const [quote, setQuote] = useState<KanyeQuotes[]>([]);
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawQuote = await fetch("https://api.kanye.rest/");
            const {quoteData} : {quoteData: KanyeQuotes[]} = await rawQuote.json();
            setQuote(quoteData);
            
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []); 

    return (
        <div>
            {
                quote.map(data => <KanyeQuote data={data} />)
            }
        </div>
    );
}


//export default Kanye;
// <KanyeDiv>
// {data.map((quote, index) => (
//     <div key={index}>
//         <h1>{quote.quote}</h1>
//         <h2> - Kanye West </h2>
//     </div>
// ))}
// </KanyeDiv>

// const AllQuotesDiv=styled.div`
//     display: flex;
//     flex-flow: row wrap;    
//     justify-content: space-evenly; 
// `;

// const AllQuotesDiv=styled.div<{status: string}>`
//     display: flex;
//     flex-direction: column;   
//     justify-content: center;
//     max-width: 30%;
//     padding: 2%;
//     margin: 1%;
//     background-color: bisque;
//     border: 3px darkred solid;
//     font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
//     text-align: center;
// `;

// export default function Kanye(props : { data:Quotes[] } ){
//      return (
//         <AllQuotesDiv >
//             {
//                 props.data.map((data: Quotes) =>
//                     <div key={Quotes.id}>
//                         <h1>{data.quote}</h1>
//                     </div>
//                  )
//              }
//         </AllQuotesDiv>
//     );
// }
