import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import HomeScreen from "./screens/HomeSceen.js";
import ProductScreen from "./screens/ProductScreen.js";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element = { <ProductScreen /> }></Route>
          <Route path="/" element = { <HomeScreen /> }></Route>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
