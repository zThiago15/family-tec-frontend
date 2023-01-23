import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../../assets/logo.svg'

export default function Header() {

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="fixed z-30 w-full bg-white lg:flex justify-between">

      <span className="flex justify-between items-center p-2">
        <img src={Logo} alt="logo" className="w-[10em]" />
        <RxHamburgerMenu className="text-2xl lg:hidden" onClick={() => setShowNavBar(!showNavBar)} />

      </span>


      <div className={`
        ${showNavBar ? 'block ' : 'hidden'}
        
        lg:inline-block
        `}>
        <nav 
          className="
            text-2xl flex flex-col justify-evenly lg:w-full

            lg:flex-row lg:text-terciary-color lg:border-solid lg:border-2 lg:rounded-bl-full lg:shadow-md lg:p-10
          "  
          onClick={() => setShowNavBar(!showNavBar)}
        >
          <a href="#home" className="px-3 max-sm:even:bg-slate-200 max-sm:odd:bg-slate-300 transition-colors lg:bg-white hover:bg-slate-100">Home</a>
          <a href="#about-us" className="px-3 max-sm:even:bg-slate-200 max-sm:odd:bg-slate-300 transition-colors lg:bg-white hover:bg-slate-100">Sobre nós</a>
          <a href="#services" className="px-3 max-sm:even:bg-slate-200 max-sm:odd:bg-slate-300 transition-colors lg:bg-white hover:bg-slate-100">Serviços</a>
          <a href="#contact" className="px-3 max-sm:even:bg-slate-200 max-sm:odd:bg-slate-300 transition-colors lg:bg-white hover:bg-slate-100">Contato</a>
        </nav>

      </div>
    </header>
  );
}