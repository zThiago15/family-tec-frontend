import Logo from '../../assets/logo.png'
import Technician from '../../assets/technician.svg';
import Location from '../../assets/icons/location.svg';
import Services from '../../assets/icons/services.svg';
import Clients from '../../assets/icons/clients.svg';
import Attendance from '../../assets/icons/attendance.svg';
import Conserto1 from '../../assets/conserto1.svg';
import Conserto2 from '../../assets/conserto2.svg';

import Electricity from '../../assets/icons/electricity.svg';
import Cleaning from '../../assets/icons/cleaning.svg';
import Leaking from '../../assets/icons/leaking.svg';
import Email from '../../assets/icons/email.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';

import Service from './components/Service';



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

        <div>
          <h1>Sobre nós</h1>
          <p>Especializado em consertos, reformas, higienização, problemas eletrícos e eletrônicos, vazamentos e mal funcionamento de máquinas. Sou o técnico que irá resolver o problema do seu produto!</p>
          <span>
            <img src={Conserto1} alt="técnico consertando máquina" />
            <img src={Conserto2} alt="técnico consertando máquina" />
          </span>
        </div>

        <div>
          <h1>Serviços</h1>
          <p>Especializado em concertos de máquina, seja de vazamento, fiação ou qualquer problema, sou o técnico que irá resolver seu problema!</p>
          <Service imgService={Electricity} nameService="problemas elétricos" />
          <Service imgService={Leaking} nameService="vazamento" />
          <Service imgService={Cleaning} nameService="higienização" />

        </div>
      </main>
      <footer>
        <h1>Contato</h1>
        <div>
          <p><strong>Atendimento</strong>: seg à sex, das 9h as 18h</p>
          <span>
            <img src={Email} alt="email logo" />
            E-mail: flavio.consertomaquinas@gmail.com
          </span>
          <span>
            <img src={Whatsapp} alt="email logo" />
            Whatsapp:  +55 (11) 99999-9999
          </span>
        </div>
        <p>Entre em contato conosco, agenda uma visita técnica para resolver seu problema agora!</p>
      </footer>
    </div>
  );
}