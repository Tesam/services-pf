import whatsappIcon from './img/whatsapp-icon.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="bg-plumber-hero bg-no-repeat bg-top relative" style={{ height: 500 }}>
        <p className="text-white font-fredoka text-3xl pt-9 pl-6">DILE ADIÓS A <br/>TUS PROBLEMAS<br/>EN EL HOGAR!</p>
        <a href="https://stackoverflow.com/questions/42051528/how-do-i-make-an-image-clickable" className="absolute bottom-2 right-2">
          <img alt="Ícono de whatsapp para contacto" src={whatsappIcon} />
        </a>
      </header>
      <main>
        <section className="bg-secondary"></section>
        <section></section>
        <section className="bg-primary"></section>
      </main>
      <footer className="bg-secondary"></footer>
    </div>
  );
}

export default App;
