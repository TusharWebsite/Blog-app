import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/Tushar2.jpeg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Tushar Pawar, a passionate software developer with a background in BCA. I completed a 6-month internship at Autowhat and am currently honing my skills as a MERN Stack Developer during my internship at APML.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                My journey is driven by curiosity and a commitment to continuous learning. I thrive on solving challenging problems and building innovative applications that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">My Journey</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From a curious beginner to a dedicated MERN Stack Developer, here's how my passion for coding has grown over the years.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Early Beginnings</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My coding journey began with an innate curiosity about how software works. Starting with basic programming languages, I quickly developed a passion for creating solutions and building projects that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Professional Growth</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Through internships at Autowhat and APML, I gained hands-on experience with modern web technologies. Working on diverse projects, I expanded my expertise in React, Node.js, Express, and MongoDB, building scalable and efficient web applications.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Looking Ahead</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  As I continue my journey, I aim to contribute to impactful projects, collaborate with talented teams, and keep growing as a developer. My ultimate goal is to leverage technology to create meaningful solutions that improve lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
