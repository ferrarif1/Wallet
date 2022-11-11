export default function FooterMobile() {
  return (
    <footer>
      <div className="footer-section">
        <img id="logo" src="/icon-logo-white.png" alt="logo-icon-white" />
        <span id="logoName">coinstart</span>
      </div>
      <div className="footer-section">
        <a href="#">
          Company
        </a>
      </div>
      <div className="footer-section">
        <a href="#">
          Product
        </a>
      </div>
      <div className="footer-section">
        <a href="#">
          Governance
        </a>
      </div>
      <div className="footer-section">
        <a href="/privacy">
            Privacy Polic
        </a>
      </div>

      <div className="social-icons">
        <a href="https://twitter.com/coinstartwallet">
          <img src="/icon-twitter.png" alt="icon-twitter" />
        </a>
        <a href="https://discord.gg/75m2wmNKPZ">
          <img src="/icon-discord.png" alt="icon-discord" />
        </a>
        <a href="https://facebook.com/coinstartwallet">
          <img src="/icon-facebook.png" alt="icon-facebook" />
        </a>
        <a href="https://youtube.com/coinstartwallet">
          <img src="/icon-youtube.png" alt="icon-youtube" />
        </a>
      </div>
      <div className="copyright">
        © 2022 coinstart. All rights reserved.
      </div>
    </footer>
  );
}