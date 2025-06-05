import { motion } from "framer-motion";
import { HACKATHONS } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HackathonAchievements = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear"
  };

  // Function to highlight key information in the description
  const highlightText = (text) => {
    // Patterns to match and highlight
    const patterns = [
      /(\d{1,3}(,\d{3})*\+? participants)/gi,  // Number of participants
      /(₹[\d,.]+ lakhs)/gi,                     // Prize money in lakhs
      /(₹[\d,.]+)/gi,                            // Other prize amounts
      /(top \d+)/gi,                             // Top positions
      /(\d+-hour)/gi                             // Time durations
    ];

    let highlightedText = text;
    
    patterns.forEach(pattern => {
      highlightedText = highlightedText.replace(pattern, match => 
        `<span class="text-purple-400 font-semibold">${match}</span>`
      );
    });

    return highlightedText;
  };

  return (
    <div className="border-b border-neutral-900 py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-6xl"
      >
        Hackathons
      </motion.h2>
      
      <div className="space-y-24 px-4 lg:px-0">
        {HACKATHONS.map((hackathon, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-4xl font-bold text-purple-400">
                {hackathon.title}
              </h3>
              {hackathon.subtitle && (
                <p className="text-2xl text-neutral-400 mb-8">
                  {hackathon.subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  {Array.isArray(hackathon.images) ? (
                    <Slider {...sliderSettings}>
                      {hackathon.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="outline-none">
                          <div className="relative h-[350px] lg:h-[400px]">
                            <img
                              src={image}
                              alt={`${hackathon.title} - Image ${imgIndex + 1}`}
                              className="absolute inset-0 w-full h-full object-contain bg-neutral-900 p-4"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="relative h-[350px] lg:h-[400px]">
                      <img
                        src={hackathon.image}
                        alt={hackathon.title}
                        className="absolute inset-0 w-full h-full object-contain bg-neutral-900 p-4"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                <div 
                  className="text-lg leading-relaxed text-neutral-300 p-6 bg-neutral-800 rounded-xl shadow-lg"
                  dangerouslySetInnerHTML={{ __html: highlightText(hackathon.description) }}
                />
                {hackathon.linkedinPostUrl && (
                  <div className="text-center mt-6">
                    <a
                      href={hackathon.linkedinPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold"
                    >
                      Know More
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HackathonAchievements;