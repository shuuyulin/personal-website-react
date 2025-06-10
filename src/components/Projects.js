import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "GTEC Forecasting",
      description: "Predict Global Total Electron Content. Paper Accepted as publication at Space Weather [Paper #2023SW003579RR]",
      image: "/assets/images/GTEC.gif",
      github: "https://github.com/TEC-Prediction/TEC_Predictions_Transformer"
    },
    {
      title: "Legal Chatbot",
      description: "Predict crime law based on scenario. Classify legal judgement sentences.",
      image: "/assets/images/legal_bot.webp",
      github: "https://github.com/Moorekk/AILA2021_sentence_labelling"
    },
    {
      title: "2048 Auto Player",
      description: "Develop self-play machine for unlimited 2048. Use Gym framework and PyGame visualization",
      image: "/assets/images/RL_2048.gif",
      github: "https://github.com/Moorekk/2048_auto_player/tree/main"
    },
    {
      title: "Soccer Tracking",
      description: "Track soccer game. Dataset from SoccerNet. YOLOv8 for object detection. StrongSORT for tracking.",
      image: "/assets/images/Soccer_Tracking.gif",
      github: null
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden bg-gray-100 p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;