import { Route, Routes, Link, useRoutes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Contract } from './pages/Contract';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { BookRoutes } from './BookRoutes';

function App () {
  let element = useRoutes([
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return (
    <div className="App">
      <Routes>
        {/*Merge book with books router in bottom*/ }
        <Route path="/books" element={ <h1>Extra content</h1> } />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      { element }
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/books' element={ <BookRoutes /> } />
        <Route path="/contract" element={ <Contract /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
