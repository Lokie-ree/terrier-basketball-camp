import PageSection from "@/components/PageSection";
import React from "react";

const sectionData = [
  {
    title: "Jerwaski Coleman",
    paragraph: "This would be text in paragraph form for the specific section",
    image: "http://localhost:3000/images/vc_terrier.jpg",
    textLeft: true,
  },
  {
    title: "Assistant Coach",
    paragraph: "This would be text in paragraph form for the specific section",
    image: "http://localhost:3000/images/vc_terrier.jpg",
    textLeft: false,
  },
];

const About = () => {
  return (
    <div>
      {sectionData.map((data, index) => (
        <PageSection
          key={index}
          title={data.title}
          paragraph={data.paragraph}
          image={data.image}
          textLeft={data.textLeft}
        />
      ))}
    </div>
  );
};

export default About;
