import { useTranslation } from 'react-i18next';
import SocialShare from './social-share';
import styles from './index_mobile.module.scss';
import useWallet from './useWallet';
import dynamic from 'next/dynamic';

dynamic(import('react-onsenui'), { ssr: false });

const serial = ' '.repeat(9).split('').map((_, i) => i);

export default function IntroMobile() {
  const { openWallet } = useWallet();
  const { t } = useTranslation('common', { useSuspense: false });

  const descList = serial.map(n => {
    const key = `intro.desc${n}`; // features.feature1b'
    const res = t(key);
    if (res !== key) {
      return res;
    }

    return undefined;
  }).filter(e => e);

  return (
    <>
      <div className="hand">
        <img className="icon-hand" src="/icon-hand.png" alt="icon-hand" />
        <img className="icon-mobile" id="mockup-mobile-1" src="/icon-mobile.png" alt="icon-hand" />
        <img className="icon-mobile" id="mockup-mobile-2" src="/icon-mobile1.png" alt="icon-hand" />
        <img className="icon-mobile" id="mockup-mobile-3" src="/icon-mobile2.png" alt="icon-hand" />
      </div>
      <div className="intro-gowallet-warper">
        <button className="cst-button intro-gowallet" onClick={openWallet}>{t('intro.Go-wallet')}</button>
      </div>
      <div className={styles['intro-socialshare-warper']}>
        <SocialShare />
      </div>
      <div className="intro-col">
        <div className="title">
          {t('intro.title')}
        </div>
        <div className="sub-title">
          {t('intro.subtitle')}
        </div>
        <div className="description">
          {descList.map(e => (
            <div className="description-item" key={e}>
              <img src="/icon-check.png" alt="icon-check" className="checkIcon" /> {e}
            </div>
          ))}
        </div>
        <button className="install-button"> <img src="/icon-apple.png" alt="icon-apple"  /> App Store</button>
        <button className="install-button"><img src="/icon-play-store.png" alt="icon-play-store"  />Play Store</button>
        <button className="install-button"><img src="/icon-chrome.png" alt="icon-chrome"  />Chrome</button>
        <p id="title">{t('intro.title2')}</p>
        <p id="desc">{t('intro.subtitle2')}</p>
        <p id="desc">{t('intro.subtitle3')}</p>
      </div>
    </>
  );
}