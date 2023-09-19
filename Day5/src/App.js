import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/loginPage";
import Signup from "./Components/signup";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ThingsToDo from "./Components/ThingsToDo";
import About from "./Components/About";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/thingsToDo" element={<ThingsToDo />}></Route>
          <Route path="/AboutPage" element={<About />}></Route>
          

          <Route
            path="/homepage"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
