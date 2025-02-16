import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/nested" element={<NestedAbout />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function NestedAbout() {
  const location = useLocation();
  if (location.pathname === '/about/nested') {
    return <Navigate to="/about" replace/>;  // redirect to parent
  }
  return <h1>Nested About</h1>;
}

export default App;