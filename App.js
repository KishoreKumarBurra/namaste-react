import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./assests/profile.gif";

//JSX => Babel is transpiles it into React.createElement => ReactElement - JS Object => HTMLElement(render);
const heading = <h1>Namaste React from JSX!!</h1>;

//Creating Title name RFC
const Title = () => (
  <h1 className="title" title="Title of the Page">
    React Title Component
  </h1>
);

//Creating the React Functional Component after we inside another RFC then it should called as HeadingComponent as Component Compisition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Creating React Functional Component</h1>
    </div>
  );
};

/*Q: Create a Header Component from scratch using Functional Components with JSX
    - Add a Logo on left
    - Add a search bar in middle
    - Add User icon on right
    - Add CSS to make it look nice
*/
const dimentions = 24;
const logoFimentions = 36;
const UserIconComponent = () => (
  <img
    src={icon}
    alt="User Logo"
    width={dimentions}
    height={dimentions}
  />
);

const SearchBarComponent = () => <input type="text" title="Search element" />;

const LogoComponent = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    about="Branding logo"
    alt="Logo URL"
    width={logoFimentions}
    height={logoFimentions}
  />
);

const HeaderComponent = () => (
  <div id="headerDiv">
    <LogoComponent />
    <SearchBarComponent />
    <UserIconComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
