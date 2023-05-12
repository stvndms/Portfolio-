// import images
import Hero_person from "./assets/images/Hero/person1.png";

import figma from "./assets/images/Skills/figma.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import laravel from "./assets/images/Skills/laravel.png";
import reactjs from "./assets/images/Skills/react.png";
import php from "./assets/images/Skills/php.png";
import js from "./assets/images/Skills/js.png";
import git from "./assets/images/Skills/git.png";
import css from "./assets/images/Skills/css.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import insitu from "./assets/images/projects/insitu.jpg";
import absensi from "./assets/images/projects/absensi.png";
import hotel from "./assets/images/projects/hotel.png";
import attendence from "./assets/images/projects/attendence.png";
import perpustakaan from "./assets/images/projects/perpustakaan.jpeg";
import basoaci from "./assets/images/projects/basoaci.png";
import pengaduan from "./assets/images/projects/pengaduan.png";
import api from "./assets/images/projects/API.jpeg";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "STEVEN",
    LastName: "DIMAS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      
    ],
  },
  skills: {
    title: "Skills",
    skills_content: [
      {
        name: "TailwindCSS",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Laravel",
        para: "Lorem ipsum text  dummy",
        logo: laravel,
      },
      {
        name: "PHP",
        para: "Lorem ipsum text  dummy",
        logo: php,
      },
      {
        name: "Javascript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "GIT",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Creating responsive designs that work seamlessly across a variety of devices and screen sizes, Troubleshooting issues with website and application functionality ",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Improved user experience by designing an interface that is easy to use and visually appealing",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "My Projects",
    project_content: [
      {
        title: "Wikrama Hotel Website",
        image: insitu,
      },
      {
        title: "Public Complaint Website",
        image: pengaduan,
      },
      {
        title: "Student Attendence Website",
        image: absensi,
      },
      {
        title: "Company Attendence Website",
        image: attendence,
      },
      {
        title: "Consume API",
        image: api,
      },
      {
        title: "Library",
        image: perpustakaan,
      },
      {
        title: "Hotel Website",
        image: hotel,
      },
      {
        title: "Baso Aci Website",
        image: basoaci,
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "stevendimas40@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+62877 4465 2669",
        icon: MdCall,
        link: "https://wa.me/6287744652669",
      },
      {
        text: "stvndms_",
        icon: BsInstagram,
        link: "https://www.instagram.com/stvndms_/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
