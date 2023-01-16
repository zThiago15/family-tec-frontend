import Logo from '../../assets/logo.svg'
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
import { RxHamburgerMenu } from 'react-icons/rx';

import Service from './components/Service';
import Status from './components/Status';

const screenWidth = window.screen.width;

export default function LandingPage() {
  return(
    <div className="m-5">
      <header className="flex justify-between">
        <img src={Logo} alt="logo" className="w-[10em]" />
        <RxHamburgerMenu className="text-xl" />
        {/* <nav>
          <a href="#">Home</a>
          <a href="#">Sobre nós</a>
          <a href="#">Serviço</a>
          <a href="#">Contato</a>
        </nav> */}
      </header>
      <main>
        <div>
          <img src={Technician} alt="técnico " />
            <h1 className="text-primary-color font-bold text-2xl text-center">Conserto de máquinas lava e seca em um só lugar!</h1>
            <div className="flex">
              <Status nameStatus="São Paulo, capital" imgStatus={Location} />
              <Status nameStatus="50+ clientes" imgStatus={Clients} />
            </div>
            <div className="flex">
              <Status nameStatus="10+ serviços" imgStatus={Services} />
              <Status nameStatus="50+ atendimentos" imgStatus={Attendance} />
            </div>
          </div>

        <div className="bg-background-color p-5">
          <h1 className="text-xl text-primary-color font-bold text-center my-5">Sobre nós</h1>
          <p className="text-primary-color">Especializado em consertos, reformas, higienização, problemas eletrícos e eletrônicos, vazamentos e mal funcionamento de máquinas. Sou o técnico que irá resolver o problema do seu produto!</p>
          <span>
            <img className="rounded-lg relative z-10 w-[80%] mt-5" src={Conserto1} alt="técnico consertando máquina" />

            <img className="rounded-lg relative z-20 w-[60%] left-20 bottom-10" src={Conserto2} alt="técnico consertando máquina" />
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