import NavBar from "./Components/NavigationBar/NavBar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import "./App.css";
import {motion,AnimatePresence} from "framer-motion";
import Projects from "./Routes/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Routes/Contacts/Contact";
function App() {

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet"></link>
        <NavBar/>
            <Switch>
              <Route path="/" exact children={<Home />}/>
              <Route path="/about" children={<About />}/>
              <Route path="/projects" children={<Projects/>}/>
              <Route path="/contact" children={<Contact/>}/>
            </Switch>
        <Footer/>
    </div>
  );
}

export default App;
