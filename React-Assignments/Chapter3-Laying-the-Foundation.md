#  Chapter 03 - Assignment - Laying the Foundation
## Theory Summery:
## Topics:
## *JSX:*
* React.createElement vs JSX
* Benefits of JSX
* Behind the Scenes of JSX
* Babel & parcel role in JSX
* Components
* Functional Components
    - Composing Components

## Theory Assignment:
### Q: What is JSX?
```
- JSX stands for a syntax extension for JavaScript. JSX allows us to write HTML inside the JS file in the DOM without creating the React.createElement() and/or appendChild() method.
- JSX - is Like of HTML & XML syntax. JSX code will convert to React.createElement.
- JSX => React.createElement => ReactElement - JavaScript Object => HTMLElement(render).
- Babel is converting JSX code into React.createElement.
- JSX => Babel transpilies it to React.createElement => ReactElement - JavaScript Object => HTMLElement(render).
```
### Example: using JSX
```
const myElement = <h1 title="Title of the Page">Namaste ReactJS :rocket:</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
```

### Example: without using JSX
```
const myElement = React.createElement("h1",{title: "Title of the Page"},Namaste ReactJS :rocket:);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
```

### Q: Superpowers of JSX?
```
- Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single . jsx file. JSX is easy to maintain and debug.
```
### Example
```
`React Functional Component:`
const author = "Akshai Saini"
const Title = () => (
    <h1 className="head" tabIndex="5"> Namaste ReactUsing JSX RFC trained by {author} </h1>
);
```

### Q: Role of `type` attribute in script tag? What options can I use there?
```
- The `type` attribute specifies the type of the `script`. The type attribute identifies the content between the `<script>` and `</script>` tags.
```
** `type` attribute can be of the following types: **
    - `text/javascript:` It is the basic standard of writing javascript code inside the `<script>` tag.

    ** - Syntax **
    ``` <script type="text/javascript"></script> ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
+ `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
* `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

### Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX ?
- The Difference stands below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a JS extension or variable. The `{}` can embed a javascript expression or a variable inside it.
-  `{<TitleComponent/>}`: This is the value represents a Functional Component and if it is declares with first letter as capital letter then it is called as Functional component.
    - Whatever we execute inside the `{}`, if their is any melicisious executable code also `JSX` will sanitize the JS code.
    - In that above `{<TitleComponent/>}` is  called as a function [`React Functional Component(RFC)`] it will returns a peace of JSX code.
- `{<TitleComponent></TitleComponent>}` and `{<TitleComponent/>}` both are same as of now we know the difference is 2nd one is the self closing tag and 1st one having the own closing tag.


## Coding Assignment:
- Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
    - Create the same element using JSX
    - Create a functional component of the same with JSX
    - Pass attributes into the tag in JSX
    - Composition of Component(Add a component inside another)
    - {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

### Solution:
** Using React.createElement **
```
const mainEle = React.createElement("div", {className:"title"}, [
    React.createElement("h1", {}, I'm h1 element),
    React.createElement("h2", {}, I'm h2 element),
    React.createElement("h3, {}, I'm h3 element),
]);
```

** Using JSX and passing attributes as well**
```
const mainEle = (
    <div className="title">
        <h1 title="Main Title">I'm h1 Element</h1>
        <h2>I'm h2 Element</h2>
        <h3>I'm h3 Element</h3>
    </div>
);
```
** Composition of Component(Add a component inside another) **
```
const ImgEle = () => (
    <img src="./img" alt="Image ref link">
);

const Branding = () => (
    <h1 className="branding">
        Brand Name :rocket:
        <ImgEle/>
    </h1>
);
```

** {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} **
```
const Title = "Declaration";
const TitleInfo = () => (
    <div>{Title}</div>
    {<Branding/>}
    {<Branding></Branding>}
);
```

## Q: Create a Header Component from scratch using Functional Components with JSX
    - Add a Logo on left
    - Add a search bar in middle
    - Add User icon on right
    - Add CSS to make it look nice






