import {useLocalStorageState} from 'ahooks';
import FeaturesSection from '../components/index/featuresSection';
import FooterSection from '../components/index/footerSection';
import HeaderSection from '../components/index/headerSection';
import IntroSection from '../components/index/introSection';
import CryptoSection from '../components/index/cryptoSection';
import HeaderMobile from '../components/index_mobile/header_mobile';
import FooterMobile from '../components/index_mobile/footer_mobile';
import IntroMobile from '../components/index_mobile/intro_mobile';
import CryptoMobile from '../components/index_mobile/crypto_mobile';
import FeaturesMobile from '../components/index_mobile/features_mobile';
import en from '../locales/en';
import rus from '../locales/rus';
import ch from '../locales/ch';
import jp from '../locales/jp';
import hk from '../locales/hk';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

export default function Home() {
  const [localLocale] = useLocalStorageState('defiport_locale', {defaultValue: 'en'});
  i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: localLocale,                              // language to use
    resources: {
      en: {
        common: en               // 'common' is our custom namespace
      },
      ch: {
        common: ch
      },
      hk: {
        common: hk
      },
      jp: {
        common: jp
      },
      rus: {
        common: rus
      },
    },
  });
  return (
    <I18nextProvider i18n={i18next}>
      <div className="home pc">
        <HeaderSection />
        <main>
          <IntroSection/>
          <CryptoSection/>
          <FeaturesSection/>
        </main>
        <FooterSection/>
      </div>
      <div className="home mobile">
        <HeaderMobile/>
        <main>
          <IntroMobile/>
          <CryptoMobile/>
          <FeaturesMobile/>
        </main>
        <FooterMobile/>
      </div>
    </I18nextProvider>
  );
}
