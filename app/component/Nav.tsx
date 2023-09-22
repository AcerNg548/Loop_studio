"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
  line?: string;
}
const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className,
  line,
}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-white   absolute left-0 -bottom-0.5
         ${line}
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

interface NavProps {
  lineClass: string;
  textEdit: string;
  edit?: string;
}
const Nav: React.FC<NavProps> = ({ lineClass, textEdit, edit }) => {
  return (
    <div>
      <div
        className={`${edit} mobile:flex mobile:flex-col mobile:items-center mobile:w-full`}
      >
        <CustomLink
          href="/"
          title="About"
          className={`mr-4  ${textEdit}`}
          line={lineClass}
        />
        <CustomLink
          href="/"
          title="Careers"
          className={`mr-4 ${textEdit}`}
          line={lineClass}
        />
        <CustomLink
          href="/"
          title="Events"
          className={`mr-4 ${textEdit}`}
          line={lineClass}
        />
        <CustomLink
          href="/"
          title="Products"
          className={`mr-4 ${textEdit}`}
          line={lineClass}
        />
        <CustomLink
          href="/"
          title="Support"
          className={`mr-4 ${textEdit}`}
          line={lineClass}
        />
      </div>
    </div>
  );
};

export default Nav;
