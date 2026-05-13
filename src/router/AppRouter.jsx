import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes.js';

export default function AppRouter({ Navbar, Footer }) {
  return (
    <Router>
      {Navbar}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      {Footer}
    </Router>
  );
}
