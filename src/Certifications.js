import FullScreenSection from "./components/FullScreenSection";
import {Box, Heading, HStack, Text} from "@chakra-ui/react";
import React from "react";
import photo1 from "./images/Frontend.png";
import photo2 from "./images/Linux1.png";
import photo3 from "./images/cyber+.png";
import photo4 from "./images/security+.png";
import Card from "./components/Newcard";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Newheader from "./Newheader";
import Footer from "./components/Footer";




const Certs = [
    {
        title: "Meta Front End",
        description:
            "Meta's Front End Software Engineering course has been pivotal in my journey, equipping me with a robust skill set in cutting-edge technologies such as React, JavaScript, HTML, and CSS. Through comprehensive modules and hands-on projects, I've gained invaluable expertise in crafting dynamic and user-centric web applications.",
        imageSrc: photo1,
        url: "https://coursera.org/verify/professional-cert/QEWMYRVZJDJ9",
    },
    {
        title: "Linux",
        description:
            "\n" +
            "Participating in the Coursera Linux course has been instrumental in expanding my proficiency in Linux, equipping me with a diverse array of skills crucial for modern software development and system administration. Through engaging coursework and hands-on projects, I've acquired a comprehensive understanding of Linux's ecosystem, empowering me to navigate its intricacies with confidence.",
        imageSrc: photo2,
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/3LQXHW234AA2",
    },
    {
        title: "Comp TIA Security+",
        description:
            "Engaging with CompTIA's Security+ course marked the foundational step in my journey towards becoming a proficient cybersecurity professional. This comprehensive program not only equipped me with essential tools but also instilled in me a robust understanding of cybersecurity principles and practices. Through immersive coursework and practical exercises, I delved into the intricacies of threat detection, risk assessment, and security protocols, gaining a holistic perspective on safeguarding digital assets against evolving cyber threats. ",
        imageSrc: photo3,
        url: "https://www.coursera.org/account/accomplishments/certificate/93PSU33K25RB",
    },
    {
        title: "Comp TIA Network+",
        description:
            "CompTIA's Network+ course served as a comprehensive foundation, providing a multifaceted exploration of network infrastructure and protocols. Delving into intricate network models, I gained a nuanced understanding of the OSI and TCP/IP models, unraveling the complexities of data transmission and network communication. This in-depth knowledge not only broadened my technical expertise but also sharpened my analytical skills, enabling me to dissect network architectures and troubleshoot connectivity issues with precision.  ",
        imageSrc: photo4,
        url: "https://www.coursera.org/account/accomplishments/certificate/9MPL8MVK6CML",
    },
];

export const Certifications = () =>{
    return(
    <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
        style={{ minHeight: '190vh'}}

    >


        <Newheader />


        <Box
            display="grid"
            gridTemplateColumns="repeat(2,minmax(0,1fr))"
            gridGap={20}
            style={{ transform: "translateY(6%)" }}
        >



            {Certs.map((Cert) => (
                <Card

                    key={Cert.title}
                    title={Cert.title}
                    description={Cert.description}
                    imageSrc={Cert.imageSrc}
                    url = {Cert.url}
                />



            ))}





        </Box>


    </FullScreenSection>
    );
}