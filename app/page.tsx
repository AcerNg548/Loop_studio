"use client";
import Bg from "@/public/images/desktop/image-hero.jpg";
import BgM from "@/public/images/mobile/image-hero.jpg";
import Logo from "@/public/images/logo.svg";

import Image from "next/image";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Hamburger from "./component/Hamburger";

export default function Home() {
  return (
    <div
      className="font-alata w-full 
    mobile:flex mobile:flex-col mobile:w-screen
    mobileNig:flex mobileNig:flex-col mobileNig:w-screen
    "
    >
      <div
        className="absolute w-full -z-10
      "
      >
        <Image
          src={Bg}
          alt="heroBg"
          className="w-full h-screen mobile:hidden mobileBig:hidden"
        />
        <Image src={BgM} alt="heroBg" className="w-full desktop:hidden" />
      </div>
      <div
        className="w-full h-screen py-16 p-28 justify-start items-center
      mobile:p-6 mobile:py-10 mobile:relative  mr-10
      mobileBig:p-6 mobileBig:py-10 mobileBig:relative
      "
      >
        <div className="justify-between flex items-center text-Black ">
          <Image src={Logo} alt="logo" className="mobile:w-40 mobileBig:w-44" />
          <div className="mobile:hidden mobileBig:hidden">
            <Nav
              lineClass="bg-OffWhite !h-[2px]"
              textEdit="text-OffWhite text-[12px] mx-14 !mr-0"
            />
          </div>
          <div className="desktop:hidden">
            <Hamburger />
          </div>
        </div>
        <div
          className="mr-[600px] mt-[150px]  p-6 text-OffWhite border border-OffWhite -z-10
        mobile:!m-0 mobile:p-4  mobile:absolute mobile:bottom-[40%] mobile:w-[90%]
        mobileBig:!m-0 mobileBig:p-4  mobileBig:absolute mobileBig:bottom-[50%] mobileBig:w-[90%]
        "
        >
          <h1
            className="text-[60px] text-left font-jose leading-[60px] tracking-wide
          mobile:text-[40px] mobile:leading-[40px]
          mobileBig:text-[40px] mobileBig:leading-[40px] 
          "
          >
            IMMERSIVE EXPERIENCES THAT DELIVER
          </h1>
        </div>
      </div>
      <Content />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
