
import Navbar from './shared/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from './components/Author/Author';
import Chapter from './components/Chapter/Chapter';
import Composition from './components/Composition/Composition';
import Contact from './components/Contact/Contact';
import History from './components/History/History';
import Home from './components/Home/Home';
import WorkShop from './components/WorkShop/WorkShop';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/author" element={<Author/>}></Route>
        <Route path="/chapter" element={<Chapter/>}></Route>
        <Route path="/composition" element={<Composition/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/workshop" element={<WorkShop/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
