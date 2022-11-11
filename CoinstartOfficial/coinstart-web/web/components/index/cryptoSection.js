export default function CryptoSection() {
  const cryptoIcons = Array.from({length: 21}, (_, i) => i + 1);
  return (
    <section>
      {
        cryptoIcons.map((item, index) => {
          return (
            <img src={`./icon-crypto-${item}.png`} className="crypto-icon" alt="crypto"
              key={index}/>
          );
        })
      }
    </section>
  );
}
