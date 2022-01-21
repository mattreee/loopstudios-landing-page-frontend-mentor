// Header
import Header from './components/Header';
import Nav from './components/Nav';
import HeroText from './components/HeroText';
// Main
import Main from './components/Main';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Card from './components/Card';
// Footer
import Footer from './components/Footer';
import FooterFooter from "./components/FooterFooter";
// Extra
import Logo from './images/logo.svg';
import BurgerIcon from './images/icon-hamburger.svg';
import CloseIcon from './images/icon-close.svg';

function App() {
  return (
    <>
      <Header>
        <Nav Logo={Logo} BurgerIcon={BurgerIcon} CloseIcon={CloseIcon} />
        <HeroText />
      </Header>
      <Main>
        <Introduction />
        <Features>
          <Card title='Deep earth' />
          <Card title='Night arcade' />
          <Card title='Soccer team VR' />
          <Card title='The grid' />
          <Card title='From up above VR' />
          <Card title='Pocket borealis' />
          <Card title='The curiosity' />
          <Card title='Make it fisheye' />
        </Features>
      </Main>
      <Footer Logo={Logo}/>
      <FooterFooter />
    </>
  );
}

export default App;