import navValues from "../helpers/navValues";
import Art from "./Art/art";
import ArtList from "./Artlist/artList";
import Login from "./Login/Login";
import Register from "./Register/Register"


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