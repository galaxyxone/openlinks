import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";


// eslint-disable-next-line no-undef
class App extends Component {
render() {
  return <><Route path="/" exact component={Home} />
  <Route path="/profile" component={Profile} />
  </>
  }
}


export default App;
