import "../src/styles/index.css";

function App() {
  return (
    <>
      <header className="bg-black flex justify-between">
        <img src="../public/logo.png" />
        <nav className="text-white">
          <ul className="flex gap-4 justify-center items-center justify-items-center">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Eventos</a>
            </li>
            <li>
              <a>Speakers</a>
            </li>
            <li>
              <a>Ingresar</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
