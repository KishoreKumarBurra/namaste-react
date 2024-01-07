import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child" }, [
      React.createElement("h1", { title: "I'm h1 tag" }, "I'm h1 tag"),
      React.createElement("h2", { title: "I'm h2 tag" }, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { title: "I'm h1 tag" }, "I'm h1 tag"),
      React.createElement("h2", { title: "I'm h2 tag" }, "I'm h2 tag"),
    ])]
  );
  
  /*const heading = React.createElement(
    "h1",
    { id: "heading", title: "Title of the Page" },
    "Hello World from React AppJS file!!"
  ); */
  
  console.log("heading:", heading, "typeOf=", typeof heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  console.log("root=", root, "typeOf=", typeof root);
  
  root.render(heading);
  