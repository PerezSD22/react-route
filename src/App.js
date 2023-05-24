import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobres from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './componets/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/sobre' element={<Sobres/>}  />
        <Route path='/posts/:id' element={<Post/>}  />
        <Route path='/categorias/:id/*' element={<Categoria/>}  />


        <Route path='*' element={<Page404/>} />
      </Routes>
    </Router>
  );
}

export default App;
