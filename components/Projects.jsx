import React from "react";
import Image from "next/image";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Projects = () => {
  return (
    <section
      id="projects"
      class="xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[10%] "
    >
      <h1 class="underline decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] sm:text-[40px] sm:mt-[20px] xl:text-[60px] font-poppins">
        Projects
      </h1>
      <p class="font-display text-[30px] sm:text-[22px] xl:text-[30px]">
        Check out some things I have built:
      </p>

      <div class="mb-[0%] xl:max-w-7xl xl:mx-auto max-w-full pl-[1%] pr-[1%] pt-[5%] xl:grid grid-cols-2 gap-x-5 gap-y-3 sm:flex flex-col">
        {/* Project 1: Altru App */}

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100 xl:text-[44px]">
            Altru-Connect
          </p>

          <p class="mb-[20px]">
            A full-stack MERN application that connects volunteers to
            organizations. Users can perform CRUD applications to their profile
            and track the donations they made and the events they attend.
          </p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              React
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              MongoDB
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              Express
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              NodeJS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              Authentication
            </div>
          </div>

          <Image
            src="/../public/assets/altru-project.png"
            alt="project1"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/altru-volunteer"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://altru-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        {/* Project 2: Trello Board*/}

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100">
            Trello Task Management App
          </p>

          <p class="mb-[20px]">
            A kanban task-management app inspired by Trello. Users can perform
            CRUD operations like create a board or a card, edit, archive, delete
            a card and add users to their board.
          </p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              React
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              CSS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              JWT
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              Bcrypt
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              MongoDB
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              Express
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              NodeJS
            </div>
          </div>

          <Image
            src="/../public/assets/trello-project.png"
            alt="project2"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/trello-agile"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://trello-agile.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        {/* Project 3: Chingu Coffee Shop

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100">
            Chingu Coffee
          </p>

          <p class="mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quasi, recusandae corrupti at quos ipsa nam quas error facilis
            laudantium.
          </p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200 border-solid border-2 rounded-lg p-1 uppercase text-xs">
              React
            </div>
            <div class="text-black bg-gray-200 border-solid border-2 rounded-lg p-1 uppercase text-xs">
              CSS
            </div>
          </div>

          <Image
            src="/../public/assets/coffee-project.png"
            alt="project3"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/TODAY-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://5-day-react-weather.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div> */}

        {/* Project 4: Towers of Hanoi */}

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100">
            Towers of Hanoi
          </p>

          <p class="mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quasi, recusandae corrupti at quos ipsa nam quas error facilis
            laudantium.
          </p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              Javascript
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              CSS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              HTML
            </div>
          </div>

          <Image
            src="/../public/assets/towers-project.png"
            alt="project4"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/towers-of-hanoi"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://towers-of-hanoi-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        {/* Project 5: Portfolio */}

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100">
            Portfolio
          </p>

          <p class="mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quasi, recusandae corrupti at quos ipsa nam quas error facilis
            laudantium.
          </p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              ReactJS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              NextJS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              Tailwind CSS
            </div>
          </div>

          <Image
            src="/../public/assets/portfolio-project.png"
            alt="project5"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/TODAY-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://5-day-react-weather.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        {/* Project 5: Portfolio */}

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100">
            Weather App
          </p>

          <p class="mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            quasi, recusandae corrupti at quos ipsa nam quas error facilis
            laudantium.
          </p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              ReactJS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              JavaScript
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              CSS
            </div>
          </div>

          {/* <Image */}
          <img
            src="/../public/assets/weather-project.png"
            alt="project5"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/TODAY-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://5-day-react-weather.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        {/* Project 6: Portfolio */}

        <div class="bg-gray-100 dark:bg-gray-800 rounded-[20px] p-[40px] m-[40px]">
          <p class="text-slate-800 text-[30px] font-bold dark:text-gray-100">
            Todo App
          </p>

          <p class="mb-[20px]">A TODO app to organize your daily tasks</p>

          <div class="flex space-x-4">
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              JavaScript
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              CSS
            </div>
            <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">
              HTML
            </div>
          </div>

          <Image
            src="/../public/assets/todo-project.png"
            alt="project5"
            width="500"
            height="500"
            class="mt-[10%] mb-[10%]"
          />

          <div class="flex flex-row justify-end mt-10px">
            <a
              href="https://github.com/cchow33/TODAY-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsGithub size={24} />
              <span>Source Code</span>
            </a>

            <a
              href="https://today-todo-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"
            >
              <BsLink45Deg size={24} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
