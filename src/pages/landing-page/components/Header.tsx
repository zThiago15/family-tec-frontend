import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../../assets/logo.svg'

export default function Header() {

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="fixed z-30 w-full bg-white">

      <span className="flex justify-between items-center lg p-2">
        <img src={Logo} alt="logo" className="w-[10em]" />
        <RxHamburgerMenu className="text-2xl lg:hidden" onClick={() => setShowNavBar(!showNavBar)} />

      </span>


      <div className={`
        ${showNavBar ? 'block' : 'hidden'}

        lg:block
        `}>
        <nav className="text-lg flex flex-col justify-evenly pt-2 w-full"  onClick={() => setShowNavBar(!showNavBar)}>
          <a href="#home" className="px-3 bg-slate-300 active:bg-slate-400">Home</a>
          <a href="#about-us" className="px-3 bg-slate-300 active:bg-slate-400">Sobre nós</a>
          <a href="#services" className="px-3 bg-slate-300 active:bg-slate-400">Serviços</a>
          <a href="#contact" className="px-3 bg-slate-300 active:bg-slate-400">Contato</a>
        </nav>

      </div>
    </header>
  );
}