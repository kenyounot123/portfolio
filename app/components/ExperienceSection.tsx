import Image from "next/image";
import Link from "next/link";
export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-10 max-w-[90%] mx-auto mt-32">
      <div className="w-[80%] mx-auto">
        <div className="-ml-5 flex items-center">
          <Image
            className="transition-transform duration-300 ease-in-out hover:rotate-180"
            src={"/wheel.png"}
            width={100}
            height={50}
            alt="Ken Lu"
          />
          <h1 className="text-4xl bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
            Experience
          </h1>
        </div>

        <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-12">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none">
              August 2024
            </time>
            <h3 className="text-lg font-semibold">
              Software Engineer & Co-Founder
            </h3>
            <p className="text-base font-normal">
              Created and launched an AI-powered flashcard application using
              Next.js, React, and TypeScript, integrating OpenAI for content
              generation and Clerk for user authentication, serving over 1,000
              active users.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://flashprepai.com/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Visit{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none">
              August 2024
            </time>
            <h3 className="text-lg font-semibold">
              Software Engineering Fellow
            </h3>
            <p className="mb-4 text-base font-normal">
              Developed 5 AI-Based projects in 5 weeks and scaled a tech
              solution to 1000 users as the final project.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://headstarter.co"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none">
              July 2024
            </time>
            <h3 className="text-lg font-semibold">
              Freelance Full Stack Developer
            </h3>
            <p className="text-base font-normal">
              Developed a full-stack eCommerce web app for a client&apos;s
              business using Ruby on Rails, leading to a 30% increase in online
              sales
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
