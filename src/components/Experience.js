import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company: "VIA Technologies Inc.",
      location: "Taipei, Taiwan",
      period: "Mar. - Aug. 2024",
      description: [
        "Developed a key-feature extracting system with a unified vision-language model, capturing 10+ coarse-grained features in driving images, replacing 5+ specialized models, greatly reducing memory occupation on limited devices.",
        "Achieved real-time performance of 21 frames per second in M810, an edge device powered by a Qualcomm chip, utilizing ONNX and Qualcomm SNPE tools to transition, shrink and quantize model for faster inference speed.",
        "Built automated data annotation pipeline to curate 100k+ labeled images, boosting labeling efficiency by 200%+."
      ]
    },
    {
      title: "Undergraduate Student Researcher",
      company: "Web Intelligence & Data Mining Lab, NCU",
      location: "Taoyuan, Taiwan",
      period: "Sept. 2021 - June 2023",
      description: [
        "Designed a transformer-based model for forecasting of global total electron contents (GTEC), a critical indicator of the space environment, achieving state-of-the-art global predictions, advancing the understanding of neural-network applications on spatiotemporal data and resolving 4 hours latency issue in real-time GTEC data caused by transmission and computing with an error rate less than 5%.",
        "Devised transformer-based hierarchical model for rhetorical role labeling from legal judgments, a sentence-level classification task, introducing a novel BERT fine-tuning method for hierarchical semantic structure.",
        "Secured scholarship from National Science and Technology Council, the highest research and technology authority in Taiwan, initializing research project overviewing special tempo prediction methodologies.",

      ]
    },
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-1">
                  {exp.company}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {exp.location}
                </p>
              </div>
              <div className="md:text-right">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;