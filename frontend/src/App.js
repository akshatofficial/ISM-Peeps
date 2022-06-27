import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { GuestRoute, ProtectedRoute, SemiProtectedRoute } from "./ProtectedRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navigation />
      <Switch>
        <GuestRoute path={"/"} exact>
          <Home />
        </GuestRoute>
        <GuestRoute path={"/authenticate"}>
          <Authenticate />
        </GuestRoute>
        <SemiProtectedRoute path={"/activate"}>
          <Activate />
        </SemiProtectedRoute>
        <ProtectedRoute path={"/rooms"}>
          <Rooms />
        </ProtectedRoute>
        {/* <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
