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
    <main className="flex min-h-screen items-center justify-center bg-vc-blue overflow-x-clip">
      <div>
        <h1 className="font-extrabold text-vc-gold">Coming Soon</h1>
      </div>
    </main>
  );
};

export default About;
