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
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineCopyright } from 'react-icons/ai';

import Service from './components/Service';
import Status from './components/Status';
import Header from './components/Header';
import FAQs from './components/FAQs';

export default function LandingPage() {

  return(
    <div>
      <Header />
      <main>
        <section id="home" className="pt-8 lg:flex items-center">
          <img src={Technician} alt="técnico" />
          <div>
            <h1 className="text-primary-color font-bold text-3xl text-center">Conserto de máquinas lava e seca em um só lugar!</h1>
            <span className="lg:grid grid-cols-2 gap-1 ml-10 mt-10">
              <Status nameStatus="São Paulo, capital" imgStatus={Location} />
              <Status nameStatus="50+ clientes" imgStatus={Clients} />
              <Status nameStatus="10+ serviços" imgStatus={Services} />
              <Status nameStatus="50+ atendimentos" imgStatus={Attendance} />
            </span>
            </div>
          </section>

        <section id="about-us" className="bg-background-color p-5 w-full lg:flex justify-evenly items-center">
          <span className="lg: w-[40%]">
            <h1 className="text-3xl text-primary-color font-bold text-center my-5 lg:text-5xl">Sobre nós</h1>
            <p className="text-primary-color text-2xl lg:text-4xl">Especializado em consertos, reformas, higienização, problemas eletrícos e eletrônicos, vazamentos e mal funcionamento de máquinas. Sou o técnico que irá resolver o problema do seu produto!</p>
          </span>

          <span className="lg: w-[40%]">
            <img className="rounded-lg relative z-10 w-[80%] mt-5" src={Conserto1} alt="técnico consertando máquina" />

            <img className="rounded-lg relative z-20 w-[60%] left-20 bottom-10 lg:left-48 bottom-20" src={Conserto2} alt="técnico consertando máquina" />
          </span>
        </section>

        <section id="services" className="m-8">
          <h1 className="font-bold text-center text-3xl text-primary-color mb-5 lg:lg:text-5xl">Serviços</h1>
          <p className="text-2xl text-center lg:text-4xl">Especializado em consertos de máquina, realizo serviços de vazamento, fiação e higienização, sou o técnico que irá resolver seu problema!</p>
          <span className="flex flex-col items-center lg:flex-row justify-between items-baseline w-[50%] m-auto">
            <Service imgService={Electricity} nameService="Fiação" />
            <Service imgService={Leaking} nameService="Vazamento" />
            <Service imgService={Cleaning} nameService="Higienização" />
          </span>

        </section>
        <section className="flex flex-col items-center">
          <h1 className="text-3xl text-primary-color text-center font-bold mb-5 lg:text-5xl">Dúvidas frequentes</h1>
          <FAQs question="Onde você realiza atendimento?" answer="Realizo atendimento na região metropolitana da capital de São Paulo." />
          <FAQs question="Qual o preço da visita técnica?" answer="O orçamento da visita técnica varia de R$30 à R$50 dependendo da região." />
        </section>
        
      </main>
      <footer className="mt-10">
        <div id="contact" className="bg-background-color">
          <h1 className="font-bold text-3xl text-primary-color text-center lg:text-5xl">Contato</h1>
          <p className="text-primary-color text-2xl text-center p-3">Nos contate para fazer um agendamento de visita técnica para resolver seu problema!</p>

          <div className="m-3 flex flex-col items-center">
            <p className="mb-3 text-primary-color"><strong>Atendimento</strong>: seg à sex, das 9h às 18h</p>
            <a 
              href="https://api.whatsapp.com/send?phone=11977116359"
              className="flex justify-between items-center p-3 bg-green-500 text-white w-[80%] rounded-full mb-5 relative transition-all hover:bg-green-600 px-5 
              lg:w-[30%]"
            >
              <BsWhatsapp className="text-3xl" />
              <p className="font-semibold">Flávio(técnico)</p>
            </a> 
            <a
              href="https://api.whatsapp.com/send?phone=11986198559" 
              className="flex justify-between items-center p-3 bg-green-500 text-white w-[80%] rounded-full mb-5 hover:bg-green-600 px-5 lg:w-[30%]"
            >
              <BsWhatsapp className="text-3xl" />
              <p className="font-semibold">Nilde(atendimento)</p>
            </a>

          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl mb-20 lg:text-5xl">Privacidade e termos de uso</h1>
          <span className="flex flex-col items-center mt-10">
            <img src={Logo} alt="logo" className="w-[10em] mb-3" />
            <p className="flex items-center justify-center">2023 <AiOutlineCopyright className="mx-1" /> Todos os direitos reservados</p>
          </span>

        </div>
      </footer>
    </div>
  );
}