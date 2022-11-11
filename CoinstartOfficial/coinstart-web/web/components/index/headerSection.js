import Head from 'next/head';
import Script from 'next/script';
import {useTranslation} from 'react-i18next';
import {useLocalStorageState} from 'ahooks';

export default function HeaderSection(){
  const [/* locale */, setLocale] = useLocalStorageState('defiport_locale', {defaultValue: 'en'});
  const {t, i18n} = useTranslation('common');

  const changeLanguage=(lang)=>{
    i18n.changeLanguage(lang);
    setLocale(lang);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/ico/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/ico/favicon.ico" />
        <link rel="icon" type="image/png" sizes="512x512" href="/ico/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/ico/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/ico/mstile-150x150.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/ico/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/ico/mstile-144x144.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/ico/mstile-70x70.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/ico/mstile-144x144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/ico/mstile-70x70.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/ico/mstile-70x70.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/ico/mstile-150x150.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ico/android-chrome-192x192.png" />

        <link rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=optional" type="font/woff2" crossOrigin="anonymous"/>

        <title>CoinStart</title>
        <meta name="description" content="Your Portal to crypto world, safe & easy for you to store, buy, send, receive, swap tokens and collect NFTs." key="desc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinstart.io" />
        <meta property="og:title" content="CoinStart Sui wallet" />
        <meta
          property="og:description"
          content="Your Portal to crypto world, safe & easy for you to store, buy, send, receive, swap tokens and collect NFTs."
        />
        <meta
          property="og:image"
          content="https://bafkreicrqzwfmjdbp3uzd73ezmwdjlso2zeexj2t5agmpjhxuux6z6es4e.ipfs.nftstorage.link/"
        />
        <meta name="google-site-verification" content="LmJA3Z1c54oST7FOOalu5gsdGaijSkq2De-8vXTTJpQ" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/coinstartwallet" />
        <meta property="twitter:title" content="CoinStart" />
        <meta
          property="twitter:description"
          content="Your Portal to crypto world, safe & easy for you to store, buy, send, receive, swap tokens and collect NFTs."
        />
        <meta
          property="twitter:image"
          content="https://bafkreicrqzwfmjdbp3uzd73ezmwdjlso2zeexj2t5agmpjhxuux6z6es4e.ipfs.nftstorage.link/"
        />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HSPDPKFWRD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-HSPDPKFWRD');
        `}
      </Script>
      <header>
        <a href="#" className="logo">
          <img src="/logo.png" alt="Logo"/>
          <span>coinstart</span>
        </a>

        <div className="flex-1"></div>

        <nav>
          <a href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh">Wallet</a>
          <a href="#">SWAP</a>
          <a href="#">Gamefi</a>
          <a href="#">Dapp</a>
          <a href="#">Institude</a>
          <a href="#">OPEN</a>
        </nav>

        <div className="flex-1"></div>
        <a href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh" target="_blank" rel="noreferrer">
          <button>{t('header.connect')}</button>
        </a>
        <a href="#" className="icon-button">
          <img src="/icon-download.png" alt="icon-download" />
        </a>
        <div className="dropdown">
          <img src="/icon-translate.png" alt="icon-translate" id="translate-button" />
          <div className="dropdown-content">
            <div className="option" onClick={()=>{changeLanguage('en');}}>
              <p>English</p>
            </div>
            <div className="option" onClick={()=>{changeLanguage('ch');}}>
              <p>简体中文</p>
            </div>
            <div className="option" onClick={()=>{changeLanguage('hk');}}>
              <p>繁体中文</p>
            </div>
            <div className="option" onClick={()=>{changeLanguage('jp');}}>
              <p>日本語</p>
            </div>
            <div className="option" onClick={()=>{changeLanguage('rus');}}>
              <p>Pyсский</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}