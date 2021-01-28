import whatsappIcon from './img/whatsapp-icon.svg';
import plumberPhoto from './img/plumber-photo.png';
import personPhoto from './img/person-photo.png';
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
        <section className="bg-secondary">
          <h2 className="text-white font-sans font-bold text-lg text-center pt-9">Lorem Ipsum</h2>
          <p className="text-white font-sans text-center pt-6 pl-2 pr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, conse</p>
          <div className="pl-4 pr-4">
            <img alt="Imagen de plomero trabajando" src={plumberPhoto} className="mt-4"/>
            <img alt="Imagen de plomero trabajando" src={plumberPhoto} className="mt-4"/>
            <img alt="Imagen de plomero trabajando" src={plumberPhoto} className="mt-4"/>
            <img alt="Imagen de plomero trabajando" src={plumberPhoto} className="mt-4"/>
            <img alt="Imagen de plomero trabajando" src={plumberPhoto} className="mt-4 pb-8"/>
          </div>
        </section>
        <section>
          <p className="text-center text-gray-700 text-lg mt-8 pl-4 pr-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma”</p>
          <img alt="Foto del profesional" src={personPhoto}/>
          <p className="text-center text-gray-700 text-lg mt-8 pl-4 pr-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma”</p>
          <img alt="Foto del profesional" src={personPhoto}/>
        </section>
        <section className="bg-primary"></section>
      </main>
      <footer className="bg-secondary"></footer>
    </div>
  );
}

export default App;
