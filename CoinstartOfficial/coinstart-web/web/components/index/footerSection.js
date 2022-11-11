import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer>
      <div className="content">
        <div className="logo">
          <img src="/logo.png" alt="logo-icon-white" />
          <span>coinstart</span>
        </div>
        <div className="list list1">
          <a href="#">
            Company
          </a>
          <a href="#">
            About
          </a>
          <a href="#">
            Careers
          </a>
          <a href="/privacy">
            Privacy Polic
          </a>
          <a href="#">
            Terms f Use
          </a>
        </div>

        <div className="list list2">
          <a href="#">
            Product
          </a>
          <a href="#">
            Coinstart Wallet
          </a>
          <a href="#">
            Startmall
          </a>
          <a href="#">
            Startpay
          </a>
        </div>

        <div className="list list3">
          <a href="#">
            Governance
          </a>
          <a href="#">
            Coinstart Dao
          </a>
        </div>

        <div className="copyright">
          © 2022 coinstart. All rights reserved.
        </div>

        <div className="contact">
          <a href="https://twitter.com/coinstartwallet" target="_blank" rel="noreferrer">
            <Image src="/icon-twitter.png" alt="icon-twitter" layout='fixed' width={30} height={30} />
          </a>
          <a href="https://discord.gg/75m2wmNKPZ" target="_blank" rel="noreferrer">
            <Image src="/icon-discord.png" alt="icon-discord" layout='fixed' width={30} height={30} />
          </a>
          <a href="#" target="_blank">
            <Image src="/icon-facebook.png" alt="icon-facebook" layout='fixed' width={30} height={30} />
          </a>
          <a href="#" target="_blank">
            <Image src="/icon-youtube.png" alt="icon-youtube" layout='fixed' width={30} height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}