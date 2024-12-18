import { Link, Outlet } from "react-router-dom";

export function BookLayout () {
  return (<>
    <Link to="/books/1">Book 1</Link>
    <Link to="/books/2">Book 2</Link>
    <Link to="/books/new">New book</Link>
    <Outlet context={ { hello: 'World' } } />
  </>);
}