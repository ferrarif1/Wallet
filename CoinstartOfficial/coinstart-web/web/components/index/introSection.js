import { useTranslation } from 'react-i18next';

const serial = Array.from({length: 9}, (_, i) => i + 1);

export default function IntroSection() {
  const { t } = useTranslation('common');

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
      <section key="sec1">
        <div className="title">
          {t('intro.title')}
        </div>
        <div className="sub-title">
          {t('intro.subtitle')}
        </div>
        <div className="description">
          {descList.map(e => (
            <div className="description-item" key={e}>{e}</div>
          ))}
        </div>
        <div className="install">
          <button><img src="/icon-apple.png" alt="icon-apple"  /> App Store</button>
          <button><img src="/icon-play-store.png" alt="icon-play-store"  />Play Store</button>
          <a href="https://chrome.google.com/webstore/detail/coinstart-wallet/iagkjnocbkjeohadeimlkaofjpilhpfh" target="_blank" rel="noreferrer">
          <button><img src="/icon-chrome.png" alt="icon-chrome"  />Chrome</button>
          </a>
        </div>
        <div className="social">
          <a href="https://twitter.com/coinstartwallet" target="_blank" rel="noreferrer">
            <img src="/icon-twitter.png" alt="icon-twitter"  />
          </a>
          <a href="https://discord.gg/75m2wmNKPZ" target="_blank" rel="noreferrer">
            <img src="/icon-discord.png" alt="icon-discord"  />
          </a>
        </div>
        <img className="icon-hand" src="/icon-hand.png" alt="icon-hand"  />
        <img className="icon-mobile" id="mockup-1" src="/icon-mobile.png" alt="icon-hand"  />
        <img className="icon-mobile" id="mockup-2" src="/icon-mobile1.png" alt="icon-hand"  />
        <img className="icon-mobile" id="mockup-3" src="/icon-mobile2.png" alt="icon-hand"  />
      </section>
      <section key="sec2">
        <p id="title">{t('intro.title2')}</p>
        <p key="subtitle2">{t('intro.subtitle2')}</p>
        <p key="subtitle3">{t('intro.subtitle3')}</p>
      </section>
    </>
  );
}