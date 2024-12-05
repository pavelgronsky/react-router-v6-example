import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { BookList } from './pages/BookList';
import { NewBook } from './pages/NewBook';
import { Contract } from './pages/Contract';
import { About } from './pages/About';

function App () {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/books" element={ <Book /> } />
        <Route path="/bookList" element={ <BookList /> } />
        <Route path="/newBook" element={ <NewBook /> } />
        <Route path="/contract" element={ <Contract /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
