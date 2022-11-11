import Head from 'next/head';
import Privacy from '../components/privacy';
// import HeaderSection from '../components/index/headerSection';
import FooterSection from '../components/index/footerSection';
// import HeaderMobile from '../components/index_mobile/header_mobile';
import FooterMobile from '../components/index_mobile/footer_mobile';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// import {useTranslation} from 'react-i18next';
// import {useLocalStorageState} from 'ahooks';

export default function PrivacyPage() {
  // const [/* locale */, setLocale] = useLocalStorageState('defiport_locale', {defaultValue: 'en'});
  // const {t, i18n} = useTranslation('common');

  // const changeLanguage=(lang)=>{
  //   i18n.changeLanguage(lang);
  //   setLocale(lang);
  // };

  return (
    <I18nextProvider i18n={i18next}>
      <Head>
        <link rel="shortcut icon" href="/ico/favicon.ico" />
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=optional" type="font/woff2" crossOrigin="anonymous"/>
        <title>CoinStart</title>
      </Head>
      <script id="pixelRatio" dangerouslySetInnerHTML={{ __html: '!function(e,t){var n=t.documentElement,d=e.devicePixelRatio||1;function i(){var e=n.clientWidth/3.75;n.style.fontSize=e+"px"}if(function e(){t.body?t.body.style.fontSize="16px":t.addEventListener("DOMContentLoaded",e)}(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",function(e){e.persisted&&i()}),2<=d){var o=t.createElement("body"),a=t.createElement("div");a.style.border=".5px solid transparent",o.appendChild(a),n.appendChild(o),1===a.offsetHeight&&n.classList.add("hairlines"),n.removeChild(o)}}(window,document)' }}></script>
      <div className="home pc">
        {/* <HeaderSection /> */}

        <header>
          <a href="#" className="logo">
            <img src="/logo.png" alt="Logo"/>
            <span>coinstart</span>
          </a>

          <div className="flex-1"></div>

          <nav>
            <a href="#">Wallet</a>
            <a href="#">SWAP</a>
            <a href="#">Gamefi</a>
            <a href="#">Dapp</a>
            <a href="#">Institude</a>
            <a href="#">OPEN</a>
          </nav>

          <div className="flex-1"></div>
          <a href="https://coinstart.io/wallet/" target="_blank" rel="noreferrer">
            <button>Connect Wallet</button>
          </a>
          <a href="#" className="icon-button">
            <img src="/icon-download.png" alt="icon-download" />
          </a>
          {/* <div className="dropdown">
            <img src="/icon-translate.png" alt="icon-translate" id="translate-button" />
            <div className="dropdown-content">
              <div className="option" onClick={()=>{changeLanguage('en');}}>
                <p>English</p>
              </div>
              <div className="option" onClick={()=>{changeLanguage('ch');}}>
                <p>中文</p>
              </div>
              <div className="option" onClick={()=>{changeLanguage('jp');}}>
                <p>日本語</p>
              </div>
              <div className="option" onClick={()=>{changeLanguage('rus');}}>
                <p>Pyсский</p>
              </div>
            </div>
          </div> */}
        </header>


        <main>
          <Privacy/>
        </main>
        <FooterSection/>
      </div>
      <div className="home mobile">
        <header>
          <div className="logo">
            <img src="/logo.png" alt="logo-icon" width={42} height={42} />
            <span>coinstart</span>
          </div>
        </header>
        <main>
          <Privacy/>
        </main>
        <FooterMobile/>
      </div>
    </I18nextProvider>
  );
}
