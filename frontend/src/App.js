import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AddProducts from "./Pages/AddProducts";
import Logout from "./Pages/Logout";
import Singup from "./Components/Signup/Singup";
import Login from "./Components/Signup/Login";
import PrivateComponent from "./Components/PrivateComponent";
import Adduser from "./Components/users/Adduser";
import Edituser from "./Components/users/Edituser";
import User from "./Components/users/User";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div>E-DASHBOARD</div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route
              path="/exercise/view/:id"
              component={User}
              element={<User />}
            ></Route>
            <Route exact path="/" component={Home} element={<Home />}></Route>
            <Route path="/add" element={<AddProducts />} />
            <Route
              path="/exercise/edit/:id"
              component={Edituser}
              element={<Edituser />}
            />
            <Route
              path="/exercise/add"
              component={Adduser}
              element={<Adduser />}
            />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/signup" element={<Singup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
