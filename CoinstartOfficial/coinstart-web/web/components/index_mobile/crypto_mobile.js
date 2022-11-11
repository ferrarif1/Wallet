export default function CryptoMobile() {
  const cryptoIcons = Array.from({length: 21}, (_, i) => i + 1);
  return (
    <div className="crypto-container">
      <div className="cryptos">
        {
          cryptoIcons.map((item, index) => {
            return (
              <img src={`/icon-crypto-${item}.png`} className="crypto-icon" alt="crypto"
                key={index} />
            );
          })
        }
      </div>
    </div>
  );
}