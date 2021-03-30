import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Locations from "./pages/Locations";
import About from "./About";

export default function App() {
  return (
    <div>
      {/* nav */}
      <nav>
        <Link to="/">Our Restaurant</Link>
        <Link to="/menus">Menus</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/about">About</Link>
      </nav>
      {/* routing */}
      <Switch>
        <Route path="/menus" component={Menus} />
        <Route path="/locations/:id" component={Locations} />
        <Route path="/locations" component={Locations} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
