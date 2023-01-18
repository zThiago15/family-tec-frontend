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
import { AiOutlineCopyright } from 'react-icons/ai';

import Service from './components/Service';
import Status from './components/Status';

const screenWidth = window.screen.width;

export default function LandingPage() {

  const screenWidth = window.screen.width;  

  return(
    <div>
      <header className="flex justify-between m-8">
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
        <section>
          <img src={Technician} alt="técnico " />
            <h1 className="text-primary-color font-bold text-3xl text-center">Conserto de máquinas lava e seca em um só lugar!</h1>
            <div className="flex flex-col items-center content-evenly">
              <Status nameStatus="São Paulo, capital" imgStatus={Location} />
              <Status nameStatus="50+ clientes" imgStatus={Clients} />
              <Status nameStatus="10+ serviços" imgStatus={Services} />
              <Status nameStatus="50+ atendimentos" imgStatus={Attendance} />
            </div>
          </section>

        <section className="bg-background-color p-5 w-full">
          <h1 className="text-3xl text-primary-color font-bold text-center my-5">Sobre nós</h1>
          <p className="text-primary-color text-2xl">Especializado em consertos, reformas, higienização, problemas eletrícos e eletrônicos, vazamentos e mal funcionamento de máquinas. Sou o técnico que irá resolver o problema do seu produto!</p>
          <span>
            <img className="rounded-lg relative z-10 w-[80%] mt-5" src={Conserto1} alt="técnico consertando máquina" />

            <img className="rounded-lg relative z-20 w-[60%] left-20 bottom-10" src={Conserto2} alt="técnico consertando máquina" />
          </span>
        </section>

        <section className="m-8">
          <h1 className="font-bold text-center text-3xl text-primary-color mb-5">Serviços</h1>
          <p className="text-2xl">Especializado em consertos de máquina, realizo serviços de vazamento, fiação e higienização, sou o técnico que irá resolver seu problema!</p>
          <span className="flex flex-col items-center">
            <Service imgService={Electricity} nameService="Fiação" />
            <Service imgService={Leaking} nameService="Vazamento" />
            <Service imgService={Cleaning} nameService="Higienização" />
          </span>

        </section>
      </main>
      <footer>
        <div className="bg-background-color">
          <h1 className="text-3xl text-primary-color text-center">Contato</h1>
          <p className="text-primary-color text-lg text-center px-3">Nos contate para fazer um agendamento de visita técnica para resolver seu problema!</p>
          <div className="m-3">
            <p className="mb-3"><strong>Atendimento</strong>: seg à sex, das 9h as 18h</p>
            <span className="flex">
              <img src={Email} alt="email logo" className="mr-2" />
              <p>E-mail: flaviomaquinas@gmail.com</p>
            </span>
            <span className="flex pb-3">
              <img src={Whatsapp} alt="email logo" className="mr-2" />
              <p>Whatsapp: (11) 99999-9999</p>
            </span>

          </div>
        </div>
        <div>
          <h1 className="text-center text-2xl my-3">Privacidade e termos de serviços</h1>
          <span className="flex flex-col items-center mt-10">
            <img src={Logo} alt="logo" className="w-[10em]" />
            <p className="flex items-center justify-center">2023 <AiOutlineCopyright className="mx-1" /> Todos os direitos reservados</p>
          </span>

        </div>
      </footer>
    </div>
  );
}