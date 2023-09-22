import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  titleT: string;
  titleB: string;
}
const Card: React.FC<CardProps> = ({ image, titleT, titleB }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute bg-Black/30 w-full h-full group-hover:bg-OffWhite/70 bottom-0 " />
      <Image src={image} alt="img" className="w-full" />
      <div
        className="font-jose text-[24px] uppercase text-OffWhite bottom-0 z-30 absolute mx-8 mb-6 flex flex-col
      group-hover:text-Black
      "
      >
        <p className="">{titleT}</p>
        <p className="">{titleB}</p>
      </div>
    </div>
  );
};

export default Card;
