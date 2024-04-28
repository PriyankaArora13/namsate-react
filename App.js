/*
<div id="parent">
     <div id="child">
         <h1>Hii i am h1 tag</h1>    //if we want to pass siblings pass it in the from of array
         <h2>This is an h2 tag</h2>
      </div>
</div>
 */

// ReactElement(Object)=>HTML(Browser understands)

import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},
React.createElement(
"div",{id:"child"},[
    React.createElement("h1",{},"Hii I am h1 tag"),
    React.createElement("h2",{},"this is an h2 tag")
]
));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
