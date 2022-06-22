import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;