"use client";
import Image, { StaticImageData } from "next/image";
import logo from "@/public/images/logo.svg";
import facebook from "@/public/images/icon-facebook.svg";
import twitter from "@/public/images/icon-twitter.svg";
import pintrest from "@/public/images/icon-pinterest.svg";
import instagram from "@/public/images/icon-instagram.svg";
import Nav from "./Nav";
import { useRouter } from "next/navigation";

interface LogoProps {
  logoLink: string | StaticImageData;
  className: string;
  line?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ logoLink, className, line, href }) => {
  const router = useRouter;
  return (
    <div className="group relative">
      <Image
        src={logoLink}
        alt="icon"
        className={`${className} group-hover:cursor-pointer `}
      />
      <span
        className={`h-[1px] inline-block bg-VeryDarkGray  absolute left-0 -bottom-1.5
         ${line}
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-0" : "w-full"
        }`}
      >
        &nbsp;
      </span>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="font-alata text-OffWhite bg-Black px-28 py-6 flex flex-col gap-4
    mobile:w-full mobile:!p-4
    mobileBig:w-full mobileBig:!p-4
    "
    >
      <div
        className="w-full flex items-center justify-between
      mobile:flex-col mobileBig:flex-col
      "
      >
        <Image src={logo} alt="logo" className="w-36" />
        <div className="text-OffWhite text-[10px] desktop:hidden my-4">
          <Nav
            lineClass="bg-OffWhite"
            textEdit="mobile:m-0 mobile:my-2 text-[16px] mobileBig:m-0 mobileBig:my-2  "
            edit="mobile:flex mobile:flex-col mobile:items-center mobileBig:flex mobileBig:flex-col mobileBig:items-center"
          />
        </div>
        <div
          className="text-OffWhite  flex  gap-6
          mobile:gap-4 mobileBig:gap-4
        "
        >
          <Logo
            logoLink={facebook}
            className="w-3 h-3 mobile:w-5 mobile:h-5 mobileBig:w-5 mobileBig:h-5"
            line="!bg-OffWhite"
          />
          <Logo
            logoLink={twitter}
            className="w-3 h-3 mobile:w-5 mobile:h-5 mobileBig:w-5 mobileBig:h-5"
            line="!bg-OffWhite"
          />
          <Logo
            logoLink={pintrest}
            className="w-3 h-3 mobile:w-5 mobile:h-5 mobileBig:w-5 mobileBig:h-5"
            line="!bg-OffWhite"
          />
          <Logo
            logoLink={instagram}
            className="w-3 h-3 mobile:w-5 mobile:h-5 mobileBig:w-5 mobileBig:h-5"
            line="!bg-OffWhite"
          />
        </div>
      </div>

      <div
        className="w-full flex items-center justify-between
        mobile:flex-col mobileBig:flex-col
      "
      >
        <div
          className="text-OffWhite text-[10px]
        mobile:hidden mobileBig:hidden
        "
        >
          <Nav
            lineClass="bg-OffWhite"
            textEdit="mobile:m-0 mobileBig:m-0"
            edit="mobile:flex mobile:flex-col mobile:items-center mobileBig:flex mobileBig:flex-col mobileBig:items-center"
          />
        </div>
        <p
          className="text-[10px] text-VeryDarkGray 
        mobile:text-[14px] mobileBig:text-[14px]
        "
        >
          © 2023 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
