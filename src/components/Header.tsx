import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/logo.svg'

export default function Header() {

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="sticky z-30 top-0 w-full lg:flex bg-white justify-between border border-b-slate-300">

      <span className="flex justify-between items-center p-2">
        <img src={Logo} alt="logo" className="w-[10em]" />
        <RxHamburgerMenu className="text-4xl cursor-pointer lg:hidden" onClick={() => setShowNavBar(!showNavBar)} />

      </span>

      <div className={`
        ${showNavBar ? 'block ' : 'hidden'} 
        lg:inline-block
        `}>
        <nav 
          className="
            text-1xl flex flex-col items-end absolute w-[70%] right-0
            lg:flex-row lg:items-end lg:mt-12  lg:text-xs lg:underline lg:bg-none
          "  
          onClick={() => setShowNavBar(!showNavBar)}
        >
          <a href="#home" className="w-[30%] rounded-tl-xl p-3 bg-white odd:bg-slate-300 transition-colors hover:bg-slate-200 
          lg:text-2xl lg:w-[50%] lg:odd:bg-transparent font-bold">Home</a>

          <a href="#about-us" className="w-[30%] p-3 bg-white even:bg-slate-200 transition-colors hover:bg-slate-200 
          lg:text-2xl lg:w-[50%] lg:even:bg-transparent font-bold">Sobre nós</a>

          <a href="#services" className="w-[30%] p-3 bg-white odd:bg-slate-300 transition-colors hover:bg-slate-200 
          lg:text-2xl lg:w-[50%] lg:odd:bg-transparent font-bold">Serviços</a>

          <a href="#contact" className="rounded-bl-xl w-[30%] p-3 bg-white even:bg-slate-200 transition-colors hover:bg-slate-200 
          lg:w-[50%] lg:text-2xl lg:even:bg-transparent font-bold">Contato</a>

        </nav>

      </div>
    </header>
  );
}