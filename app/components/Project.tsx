import Link from "next/link";
import Image from "next/image";
interface ProjectProps {
  projLink: string;
  appName: string;
  appRole: string;
  appDescription: string;
  appImg: string;
  techStack: string[];
}
export default function Project({
  projLink,
  appName,
  appRole,
  appDescription,
  techStack,
  appImg,
}: ProjectProps) {
  return (
    <div className="md:flex md:gap-10">
      <div className="md:self-start relative min-w-[250px] min-h-[250px] md:min-w-[500px] md:min-h-[500px]">
        <Link target="_blank" rel="noopener noreferrer" href={projLink}>
          <Image
            className="hover:scale-105 transition ease-in-out duration-300 md:-translate-y-[130px]"
            alt="project screenshot"
            src={appImg}
            layout="fill"
            objectFit="scale-down" // or "contain", "fill", "scale-down"
            quality={100}
          />
        </Link>
      </div>
      <div className="md:max-w-md">
        <h2 className="text-3xl">{appName}</h2>
        <p>{appRole}</p>
        <p className="py-5">{appDescription}</p>
        <div className="flex gap-5 flex-wrap">
          {techStack.map((lang, index) => (
            <div className="text-nowrap bg-red-500 rounded-3xl p-2" key={index}>
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}