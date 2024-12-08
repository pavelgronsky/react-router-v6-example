import { Navigate } from 'react-router-dom';

export function NotFound () {
  //return <h1>NotFound</h1>;

  //Or 
  return <Navigate to="/" />;
}