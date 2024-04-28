/*
<div id="parent">
     <div id="child">
         <h1>Hii i am h1 tag</h1>    //if we want to pass siblings pass it in the from of array
         <h2>This is an h2 tag</h2>
      </div>
</div>
 */
import React from "react";
import ReactDOM from "react-dom/client";
// ReactElement(Object)=>HTML(Browser understands)
const heading=React.createElement("h1",{id:"heading"},"Namaste react");
// console.log(heading);

//JSX -- HTMl like syntax

const Title= ()=>{return <h1 className="head">namaste react using JSX</h1>}




    //React functional component
    const HeadingComponent=()=>{
        return(
            <div id="container">
                {Title()}
                <Title/>
                <Title></Title>
                {1234+9800}
            <h1 className="heading">This is react functional component</h1>
            
            </div>
        )
    }
const root=ReactDOM.createRoot(document.getElementById("root"));
//Component rendering using </>braces
root.render(<HeadingComponent/>);
