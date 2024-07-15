import Link from "next/link";
import Image from "next/image";
interface ProjectProps {
  projLink: string;
  appName: string;
  appRole: string;
  appDescription: string;
  appImg: string;
  techStack: string[];
  reverse: boolean;
}
export default function Project({
  projLink,
  appName,
  appRole,
  appDescription,
  techStack,
  appImg,
  reverse,
}: ProjectProps) {
  return (
    <div
      className={`mt-5 md:flex md:justify-between md:gap-10 ${
        reverse ? "md:flex-row-reverse" : null
      }`}
    >
      <div className="min-w-[300px] self-center">
        <Link target="_blank" rel="noopener noreferrer" href={projLink}>
          <Image
            className="hover:scale-105 transition ease-in-out duration-300 w-full auto object-fill"
            alt="project screenshot"
            src={appImg}
            width={0}
            sizes="100vw"
            height={0}
            quality={100}
          />
        </Link>
      </div>
      <div className="md:max-w-md">
        <h2 className="text-3xl mt-5 md:mt-0 bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
          {appName}
        </h2>
        <p>{appRole}</p>
        <p className="py-5">{appDescription}</p>
        <div className="flex gap-5 flex-wrap">
          {techStack.map((lang, index) => (
            <div className="text-nowrap rounded-3xl p-2" key={index}>
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
