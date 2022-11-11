import { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorageState } from 'ahooks';
import useWallet from './useWallet';

const download = () => {
  const ua = navigator.userAgent;
  let appMarket = 'https://developer.android.google.com/distribute/google-play';
  // let platform = 'andriod';
  if (ua.indexOf('Mac OS') > -1) {
    // platform = 'ios';
    appMarket = 'https://www.apple.com.cn/store';
  } else if (ua.indexOf('Windows NT' > -1)) {
    // platform = 'win';
    appMarket = 'https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh';
  }

  location.assign(appMarket);
};

export default function HeaderMobile() {
  const { openWallet } = useWallet();
  const { t, i18n } = useTranslation('common');
  const [, setLocale] = useLocalStorageState('defiport_locale', { defaultValue: 'en' });

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuContent, setMenuContent] = useState('nav');

  const refVisible = useRef(menuVisible);
  useEffect(() => { refVisible.current = menuVisible; }, [menuVisible]);

  const refBurger = useRef();

  const openMobileNav = useCallback((source) => {
    setMenuContent(source);
    setMenuVisible(!refVisible.current);

    refBurger.current?.classList.toggle('toggle');
  }, [setMenuVisible, setMenuContent]);

  const chooseLanguage = useCallback(() => {
    openMobileNav('lang');
  }, [openMobileNav]);

  const showNav = useCallback(() => {
    openMobileNav('nav');
  }, [openMobileNav]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLocale(lang);
    setMenuVisible(!refVisible.current);
    refBurger.current?.classList.toggle('toggle');
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="logo-icon" width={42} height={42} />
        <span>coinstart</span>
      </div>
      <div className="menu">
        <span className="global-btn" onClick={chooseLanguage}>
          <button className="cst-icon cst-icon-global" />
        </span>
        <span id="burger" onClick={showNav} ref={refBurger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </span>
      </div>


      <div id="mobile-navbar" style={menuVisible ? null : { display: 'none' }}>
        {menuContent === 'lang' && (
          <ul>
            <li><a href="#">{t('header.Choose Language')}</a></li>
            <li><a onClick={() => { changeLanguage('en'); }}>English</a></li>
            <li><a onClick={() => { changeLanguage('ch'); }}>中文</a></li>
            <li><a onClick={() => { changeLanguage('jp'); }}>日本語</a></li>
            <li><a onClick={() => { changeLanguage('rus'); }}>Pyсский</a></li>
          </ul>
        )}
        {menuContent === 'nav' && (
          <>
            <div className="header-btns">
              <button className="cst-button" onClick={openWallet}>{t('intro.Go-wallet')}</button>
              <button className="cst-button cst-btn-ghost" onClick={download}>{t('header.Download')}</button>
            </div>
            <ul>
              <li><a href="wallet">Wallet</a></li>
              <li><a href="#">SWAP</a></li>
              <li><a href="#">Gamefi</a></li>
              <li><a href="#">Dapp</a></li>
              <li><a href="#">Institude</a></li>
              <li><a href="#">OPEN</a></li>
              <li><a href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh">{t('header.connect')}</a></li>
            </ul>
          </>
        )}
      </div>
    </header>
  );
}