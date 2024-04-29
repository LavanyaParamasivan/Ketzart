import navValues from "../helpers/navValues";
import Art from "./art";
import ArtList from "./artList";
import Login from "./Login";
import Register from "./Register"


const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.login:
      return <Login/>;
      case navValues.register:
        return <Register/>;
    case navValues.home:
      return <ArtList />;
    case navValues.art:
      return <Art />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found
        </h3>
      );
  }
};

export default ComponentPicker;