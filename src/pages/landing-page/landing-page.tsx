import Logo from '../../assets/logo.png'
import Technician from '../../assets/technician.svg';
import Location from '../../assets/icons/location.svg';
import Services from '../../assets/icons/services.svg';
import Clients from '../../assets/icons/clients.svg';
import Attendance from '../../assets/icons/attendance.svg';


export default function LandingPage() {
  return(
    <div>
      <header>
        <img src={Logo} alt="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre nós</a>
          <a href="#">Serviço</a>
          <a href="#">Contato</a>
        </nav>
      </header>
      <main>
        <div>
          <img src={Technician} alt="técnico " />
          <div>
            <h1>Conserto de máquinas lava e seca em um só lugar!</h1>
            <span>
              <img src={Location} alt="logo de localização" />
              <p>São Paulo, capital</p>
            </span>
            <span>
              <img src={Services} alt="logo de serviços" />
              <p>10+ serviços</p>
            </span>
            <span>
              <img src={Clients} alt="logo de clientes" />
              <p>50+ clientes</p>
            </span>
            <span>
              <img src={Attendance} alt="logo de atendimento" />
              <p>50+ atendimentos</p>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}