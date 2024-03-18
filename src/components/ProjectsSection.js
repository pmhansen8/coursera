import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/Army.jfif";
import photo2 from "../images/Project.png";
import photo3 from "../images/certificate.jpeg";
import photo4 from "../images/homer.gif";
import {BrowserRouter as router, routes, route, link} from "react-router-dom";
import {Experience} from "../Experience.js";

const projects = [
  {
    title: "Work",
    description:
      "Drawing from a diverse background that includes military service and active involvement in extracurricular activities, I possess a wide range of valuable experiences and skills.",
    imageSrc: photo1,
    url: "/Experience",
  },
  {
    title: "Projects",
    description:
      "Working on projects allows me to unleash my creativity and demonstrate my ability to bring ideas to life.",
    imageSrc: photo2,
    url: "/Projects",
  },
  {
    title: "Certifications",
    description:
      "In my spare time I like to broaden my skill set this includes working on certifications through coursera and other means",
    imageSrc: photo3,
    url: "/Certifications",
  },
  {
    title: "Resume",
    description:
      "Explore my resume to gain insights into my comprehensive career journey and professional growth. ",
    imageSrc: photo4,
    url: "https://drive.google.com/file/d/15xoEjUkSj1_MDwNY_bqfAz0mrhmpvUMC/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="Experience-section" alignSelf = "center">
        Experience
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >

        {projects.map((project) => (
           <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            url = {project.url}
          />



        ))}


      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;