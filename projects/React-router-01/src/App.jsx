import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Componente de inicio</h1>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

function About() {
  return <h1>Componente pagina de acerca de</h1>;
}

function Contact() {
  return <h1>Componente pagina de contacto</h1>;
}

function UserProfile() {
  const { userId } = useParams();

  return (
    <>
      <h1>Componente de perfil de usuario con parámetros en url</h1>
      <div>User ID: {userId}</div>
    </>
)
}

function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/user/:1">Perfil de usuario</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
