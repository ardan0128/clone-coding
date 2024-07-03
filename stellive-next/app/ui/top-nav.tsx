import Image from 'next/image';

export default function TopNav() {
  return (
    <div className="flex">
      <div>
        <a>
          <Image src={'/logo.png'} alt="" width={100} height={30}></Image>
        </a>
      </div>
      <nav>
        <ul className="flex">
          <li>ABOUT</li>
          <li>NEWS</li>
          <li>TALENTS</li>
          <li>MUSIC</li>
          <li>GOODS</li>
          <li>GUIDELINE</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
}
