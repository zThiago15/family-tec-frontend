import Logo from '../../assets/logo.png'

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
    </div>
  );
}