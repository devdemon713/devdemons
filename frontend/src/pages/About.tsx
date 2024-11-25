import React from "react";

const About: React.FC = () => {
  const cards = [
    {
      imgSrc: "/sid.jpeg",
      description: "Connecting buyers and farmers seamlessly.",
      link: "/connect",
    },
    {
      imgSrc: "/parth.jpg",
      description: "Ensuring fair pricing for farmers.",
      link: "/",
    },
    {
      imgSrc: "/yu.jpeg",
      description: "Providing tools for resource access.",
      link: "/resources",
    },
    {
      imgSrc: "/maddy.jpeg",
      description: "Simplifying contract farming agreements.",
      link: "/agreements",
    },
    {
      imgSrc: "/gpp.jpeg",
      description: "Building a stable market ecosystem.",
      link: "/ecosystem",
    },
    {
      imgSrc: "/rrr.jpeg",
      description: "Empowering agriculture with technology.",
      link: "/technology",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">About Us</h2>
        <p className="text-center text-lg text-gray-600 mt-4">
          Welcome to our platform! Here, we connect buyers and farmers for assured contract farming agreements.
          We are the group of dev demons of six members who created a unique idea to connect farmers and buyers to eliminate the middleman.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden text-center transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-56">
                  <img
                    src={card.imgSrc}
                    alt={`Card ${index + 1}`}
                   className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="p-6">
                {/* Removed h-full */}
                <p className="text-gray-800 text-lg font-semibold">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
