import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import MyCars from "./pages/MyCars";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import theme from "./app/theme";
import Navbar from "./components/Navbar";
import Eshop from "./pages/Eshop";
import { FC } from "react";
import PrivateRoute from "./components/PrivateRoute";
import NewCar from "./pages/NewCar";

export interface AppProps {}

const App: FC<AppProps> = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mycars" element={<MyCars />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/service" element={<Service />} />
            <Route path="/eshop" element={<Eshop />} />
            <Route path="/newcar" element={<PrivateRoute/>}>
              <Route path="/newcar" element={<NewCar/>}/>
              </Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer autoClose={3000}/>
    </>
  );
};

export default App;
