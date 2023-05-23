import { useState } from "react";
import { Link } from "react-scroll";
import mainLogo from "../../assets/img/logo.png";
import MobileMenu from "./MobileMenu";

const HeaderFour = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <header className='header-wrap header-1 header-4'>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <div className='logo'>
            <a to='/'>
              <img
                src={mainLogo}
                className='img-fluid custom-img'
                alt='logo2'
              />
            </a>
          </div>
          <div className='header-right-area d-flex'>
            <div className='main-menu d-none me-0 pe-xl-5 me-xl-5 d-xl-block'>
              <ul>
                <li>
                  <a href='/'>НҮҮР</a>
                </li>
                <li>
                  <Link to='about' spy={true} smooth={true}>
                    ХОЛБООНЫ ТУХАЙ <i className='fal fa-plus'></i>
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='ceos' spy={true} smooth={true}>
                        УДИРДЛАГА
                      </Link>
                    </li>
                    <li>
                      <Link to='structure' spy={true} smooth={true}>
                        БҮТЭЦ
                      </Link>
                    </li>
                    <li>
                      <Link to='partners' spy={true} smooth={true}>
                        ГИШҮҮД
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='/Documents'> БАРИМТ БИЧИГ</a>
                </li>
                <li>
                  <Link to='' spy={true} smooth={true}>
                    ЭКОСИСТЕМ
                  </Link>
                </li>
                <li>
                  <Link to='contacts' spy={true} smooth={true}>
                    ХОЛБОО БАРИХ
                  </Link>
                </li>
                <li>
                  <Link to='' spy={true} smooth={true}>
                    EN
                  </Link>
                </li>
              </ul>
            </div>
            <div className='header-right-elements d-flex align-items-center justify-content-between'>
              <div className='d-inline-block ms-4 d-xl-none'>
                <div className='mobile-nav-wrap'>
                  <div id='hamburger' onClick={handleMobileMenu}>
                    <i className='fal fa-bars text-white'></i>
                  </div>
                  <MobileMenu
                    mobileMenu={mobileMenu}
                    handleMobileMenu={handleMobileMenu}
                  />
                </div>
                <div className='overlay'></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderFour;