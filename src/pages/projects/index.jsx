import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Gonzalo from "@/assets/img/Gonzalo.png";
import PorfolioWebImagen1 from "@/assets/img/PorfolioWebImagen1.jpg";
import PorfolioWebImagen2 from "@/assets/img/PorfolioWebImagen2.jpg";
import PorfolioWebImagen3 from "@/assets/img/PorfolioWebImagen3.jpg";
import "swiper/css";
import "swiper/css/effect-cards";

const formatTechnologies = (technologies) => {
  return technologies.map((tech, index) => (
    <p key={index} className="text-xs md:text-md py-2 px-2 md:px-4 bg-[#000000aa] rounded-3xl">
      {tech}
    </p>
  ));
};

const ProjectPopup = ({ project, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-[#000000aa] absolute w-full h-full"></div>
      <div className="relative z-10 p-8 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden max-w-[80%] max-h-[80%]">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-white text-2xl">
            &#x2715;
          </button>
        </div>
        <Image
          src={project.image}
          className="w-full h-64 object-cover mb-4"
          draggable={false}
          width={1280}
          height={720}
        />
        <div className="text-white">
          <p className="text-xl font-bold">{project.title}</p>
          <p className="truncate text-lg">{project.description}</p>
          <div className="flex gap-2 mt-4 w-full overflow-x-scroll">
            {formatTechnologies(project.technologies)}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Projects() {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const projects = [
    {
      id: 1,
      image: PorfolioWebImagen1,
      title: "Projecto Web",
      description: "Porfolio profesional fotografo",
      technologies: ["javaScript", "react js"],
    },
    {
      id: 2,
      image: PorfolioWebImagen2,
      title: "Tienda Online",
      description: "Tienda de muebles",
      technologies: ["javaScript", "react js", "tailwind css"],
    },
    {
      id: 3,
      image: PorfolioWebImagen3,
      title: "Tienda Online",
      description: "Tienda enfocada a una cafetería",
      technologies: ["javaScript", "react js"],
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <>
      <div className="hidden"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col m-5 overflow-hidden"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <div className="col-span-3 md:col-span-4 aspect-2/1 md:aspect-auto flex justify-between items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
            <h1 className="text-white uppercase font-bold text-2xl md:text-7xl ml-4 flex gap-1 md:gap-4 justify-center items-center">
              <a
                onClick={() => router.back()}
                className="cursor-pointer flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-white mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 15.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L10.414 9H16a1 1 0 0 1 0 2h-5.586l2.293 2.293z"
                  />
                </svg>
                Volver
              </a>
            </h1>
            <Image
              src={Gonzalo}
              className="w-1/2 md:w-48"
              draggable="false"
              alt="Gonzalo De Rito"
            />
          </div>
          <div className="col-span-3 md:col-span-4 bg-[#1c053a9c] dark:bg-[#af72ff56] h-16 rounded-3xl overflow-y-hidden relative">
            <div className="flex flex-row justify-center items-center h-full overflow-y-hidden">
              <h1 className="text-white font-extrabold text-4xl">MIS PROYECTOS</h1>
            </div>
          </div>
        </div>
        <motion.div
          layout
          className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4 mb-5 container mx-auto xl:px-20 "
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative col-span-3 md:col-span-1 aspect-square rounded-3xl overflow-hidden cursor-pointer p-4 pt-8 dark:text-white text-gray-50 shadow-xl opacity-1"
              style={{ backgroundColor: "#5183B4aa" }}
              onClick={() => openModal(project)}
            >
              <div className="w-full h-full relative bg-[#000000aa] rounded-3xl overflow-hidden">
                <Image
                  src={project.image}
                  className="w-full h-full object-cover"
                  draggable={false}
                  width={1280}
                  height={720}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Modal"
          className="modal"
          overlayClassName="overlay"
        >
          {selectedProject && (
            <ProjectPopup project={selectedProject} closeModal={closeModal} />
          )}
        </Modal>
      </motion.div>
    </>
  );
}
