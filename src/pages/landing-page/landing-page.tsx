import Logo from '../../assets/logo.svg'
import Technician from '../../assets/technician.png';
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
import { AiOutlineCopyright, AiOutlineCheck  } from 'react-icons/ai';

import Service from '../../components/Service';
import Status from '../../components/Status';
import Header from '../../components/Header';
import FAQs from '../../components/FAQs';
import { useState } from 'react';
import Feedback from '../../components/Feedback';

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);

  return(
    <div>
      <Header />
      <main className="pt-16">
        <section id="home" className="pt-8 lg:flex bg-primary-color items-center ">
          <div className="">
            <h1 className="text-white font-bold text-3xl text-center">Conserto de Máquinas Lava e Seca em um só lugar!</h1>

            <ul className="flex flex-wrap justify-center my-10">
              <li className="text-white">
                <p><AiOutlineCheck className="inline" />Assistência técnica especializada em <strong>Máquinas Lava & Seca</strong> </p>
              </li>
              <li className="text-white">
                <p><AiOutlineCheck className="inline" />Atendimento por toda Grande São Paulo</p>
              </li>
            </ul>

            <div className="text-center">
              <img src={Technician} alt="técnico" className="inline-block" />
            </div>

              <a
                href="https://wa.me/5511986198559?text=Olá,%20gostaria%20de%20agendar%20uma%20visita" 
                className="flex justify-evenly text-center w-60 mt-5 mx-auto bg-green-500 text-white rounded-full mb-5 hover:bg-green-600 px-5 lg:w-[30%]"
                target='_blank'
              >
                <p className="font-bold">Agende uma visita hoje mesmo!</p>
              </a>

              <span className="flex flex-wrap items-start justify-center gap-x-28 gap-y-10 p-5"
              >
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

            <img className="rounded-lg relative z-20 w-[60%] left-20 lg:left-48 mb-5" src={Conserto2} alt="técnico consertando máquina" />
          </span>

          <a
              href="https://wa.me/5511986198559?text=Olá,%20gostaria%20de%20agendar%20uma%20visita" 
              className="bold flex justify-evenly text-center w-60 mx-auto bg-red-500 text-white rounded-full mb-5 hover:bg-red-600 px-5 lg:w-[30%]"
              target='_blank'
            >
              <p className="font-bold">Entre em contato com nosso atendimento!</p>
            </a>
        </section>

        <section id="services" className="m-8">
          <h1 className="font-bold text-center text-3xl text-primary-color mb-5 lg:text-5xl">Serviços</h1>
          <p className="text-2xl text-center lg:text-4xl">Especializado em consertos de máquina, realizo serviços de vazamento, fiação e higienização, sou o técnico que irá resolver seu problema!</p>
          <span className="flex flex-col items-center lg:flex-row justify-between lg:items-baseline w-[50%] m-auto">
            <Service imgService={Electricity} nameService="Fiação" />
            <Service imgService={Leaking} nameService="Vazamento" />
            <Service imgService={Cleaning} nameService="Higienização" />
          </span>

        </section>

        <section className="flex flex-col items-center my-16">
          <h1 className="text-3xl text-primary-color text-center font-bold mb-5 lg:text-5xl">Dúvidas frequentes</h1>

          <FAQs question="Onde você realiza atendimento?" answer="Realizo atendimento na região metropolitana da capital de São Paulo." />
          <FAQs question="Qual o preço da visita técnica?" answer="O orçamento da visita técnica varia de R$30 à R$50 dependendo da região." />

        </section>

        <Feedback />

      </main>


      <footer className=" bg-white">
        <div id="contact">
          <h1 className="font-bold text-3xl text-primary-color text-center py-10 lg:text-5xl">Contato</h1>
          <p className="text-primary-color text-2xl text-center p-3">Nos contate para fazer um agendamento de visita técnica para resolver seu problema!</p>

          <div className="m-3 flex flex-col items-center">
            <p className="mb-3 text-primary-color"><strong>Atendimento</strong>: seg à sex, das 9h às 18h</p>
            <a 
              href="https://wa.me/5511977116359"
              className="flex justify-evenly items-center p-3 bg-green-500 text-white rounded-full mb-5 transition-all hover:bg-green-600 px-5 
              lg:w-[30%]"
            >
              <BsWhatsapp className="text-3xl mr-5" />
              <p className="font-semibold">Flávio(técnico) - (11) 97711-6359</p>
            </a> 
            <a
              href="https://wa.me/5511986198559" 
              className="flex justify-evenly items-center p-3 bg-green-500 text-white rounded-full mb-5 hover:bg-green-600 px-5 lg:w-[30%]"
            >
              <BsWhatsapp className="text-3xl mr-5" />
              <p className="font-semibold">Nilde(atendimento) - (11) 98619-8559</p>
            </a>

          </div>
        </div>
        <div className="bg-slate-800">
          <h1 className="text-center text-2xl mb-20 text-white lg:text-5xl pt-10">Privacidade e Termos de uso</h1>
          <span className="flex flex-col items-center mt-10">
            <img src={Logo} alt="logo" className="w-[10em]" />
            <p className="flex items-center justify-center text-white mt-5">2025 <AiOutlineCopyright className="mx-1" /> Todos os direitos reservados</p>
          </span>

        </div>
      </footer>
    </div>
  );
}