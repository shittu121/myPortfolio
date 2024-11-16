import Educhain1 from "../../public/images/educhaingig1.png";
import Educhain2 from "../../public/images/educhain2.png";
import Amazechic from "../../public/images/Amazechic1.png";
import Amazechic2 from "../../public/images/Amazechic2.png";
import MaileHereko from "../../public/images/MaileHereko.png"
import MaileHereko1 from "../../public/images/MaileHereko1.png"
import MaileHereko2 from "../../public/images/MaileHereko2.png"
import Taskflow from "../../public/images/taskflow.png"
import Taskflow1 from "../../public/images/taskflow1.png"
import Taskflow2 from "../../public/images/taskflow2.png"

export const products = [
  {
    href: "https://taskmanagement-lovat.vercel.app/",
    title: "Task Management Application",
    description:
      "Welcome to TaskFlow TaskFlow is your go-to solution for managing projects",
    thumbnail: Taskflow,
    images: [Taskflow1, Taskflow2],
    stack: ["Reactjs", "Nextjs", "TypeScript", "Tailwindcss", "Shadcn UI", "Firebase", "Firestore", "Framer Motion", "Aceternity UI"],
    slug: "taskflow",
    content: (
      <div>
        <p>
        assigning tasks, and collaborating with your team in real-time. Create projects, assign tasks, track progress, and stay organized effortlessly!{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://movie-listing-app-omega.vercel.app/",
    title: "Explore Movies",
    description:
      "List of movies and Tv shows, built using Reactjs, Nextjs, TypeScript, and IMDB API",
    thumbnail: MaileHereko,
    images: [MaileHereko1, MaileHereko2],
    stack: ["Reactjs", "Nextjs", "TypeScript", "Tailwindcss", "API"],
    slug: "mailhereko",
    content: (
      <div>
        <p>
        List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://edu-chain-nine.vercel.app/",
    title: "EduChain",
    description:
      "EduChain is committed to empowering every users to get relevant web3 tutorials from our custom data.",
    thumbnail: Educhain1,
    images: [Educhain1, Educhain2],
    stack: ["Reactjs", "Redux Toolkit", "TypeScript", "Tailwindcss", "OnChainKit Framework", "Solidity"],
    slug: "educhain",
    content: (
      <div>
        <p>
        With EduChain, you&apos;ll confidently take your first step into this exciting frontier, followed by a personalized learning path that equips you to forge new trails in your Academy space. Ready to begin your adventure? Let&apos;s get started!{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://amazechic.com.iceiy.com/Store/src/index.php",
    title: "AmazeChic",
    description:
      "An Ecommerce Website where you can get your Accessories, Clothes & Apparel",
    thumbnail: Amazechic,
    images: [Amazechic, Amazechic2],
    stack: ["HTML", "CSS", "Tailwindcss", "JavaScript", "PHP"],
    slug: "Amazechic",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
