import Image from 'next/image';

const SocialShare = () => {
  return (
    <div className="social-share">
      <a href="https://twitter.com/coinstartwallet">
        <Image src="/icon-twitter.png" alt="icon-twitter" target="_blank" layout="fixed" width={30} height={30} />
      </a>
      <a href="https://discord.gg/75m2wmNKPZ">
        <Image src="/icon-discord.png" alt="icon-discord" target="_blank" layout="fixed" width={30} height={30} />
      </a>
      <a href="https://facebook.com/coinstartwallet">
        <Image src="/icon-facebook.png" alt="icon-facebook" target="_blank" layout="fixed" width={30} height={30} />
      </a>
      <a href="https://youtube.com/coinstartwallet">
        <Image src="/icon-youtube.png" alt="icon-youtube" target="_blank" layout="fixed" width={30} height={30} />
      </a>
    </div>
  );
};

export default SocialShare;