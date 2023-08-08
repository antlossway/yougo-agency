import Image from "next/image";
import Link from "next/link";
import { footerMenuItems } from "../../data";
const Footer = () => {
  return (
    <div className="container p-4 ">
      <section className="wrapper text-center lg:text-left">
        <span className="text-xs font-thin text-center">
          ©2023 YouGo. All Rights Reserved.
        </span>
      </section>

      <section className="wrapper flex justify-between items-center ">
        {/* logo */}
        <div className=" ">
          <Link href="/">
            <Image
              src="/logo-yougo.png"
              alt="logo"
              width={100}
              height={40}
              className="object-contain lg:w-[200px] lg:h-[80px]"
            />
          </Link>
        </div>
        {/* footer menu */}
        <div
          className="flex justify-center items-center
        [&>*:not(:last-child)]:mr-2"
        >
          {footerMenuItems.map((item, index) => (
            <Link href={item.url} key={item.name}>
              <span className="text-xs uppercase text-muted">
                {index === footerMenuItems.length - 1
                  ? item.name
                  : `${item.name} | `}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Footer;
