import HeaderFour from "../Components/Header/HeaderFour";
import HeroFour from "../Components/Hero/HeroFour";
import FooterFour from "../Components/Footer/FooterFour";
import ServicesFour from "../Components/Services/ServicesFour";
import FunFactTwo from "../Components/FunFact/FunFactTwo";
import AboutOne from "../Components/About/AboutOne";
import ServicesTwo from "../Components/Services/ServicesTwo";
import Exchanges from "../Components/Exchanges";

const HomeFour = () => {
  return (
    <div className='font-oswald'>
      <HeaderFour />
      <HeroFour />
      <FunFactTwo />
      <Exchanges />
      <AboutOne />
      <ServicesFour />
      <ServicesTwo />
      <FooterFour />
    </div>
  );
};

export default HomeFour;