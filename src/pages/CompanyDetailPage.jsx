import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  LightBulbIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const successStories = {
  suprabha: {
    title: "Suprabha Protective Products Private Limited",
    description:
      "A pioneering corrosion solutions leader with over 4 decades of innovative eco-friendly VCI technology.",
    image: "/assets/Suprabha.jpg",
    fullDescription: `Leading the field in eco-friendly corrosion solutions, Suprabha Protective Products Pvt. Ltd. has protected India’s industries since 1970. Our SOVCI® technology and tailored packaging solutions meet BIS and MIL standards, serving clients like Tata Steel and Caterpillar with quality and cost-efficient results.`,
    link: "https://suprabha.com/",
    expertise: [
      "Global leader in Vapor Corrosion Inhibition (VCI) technology",
      "Pioneering eco-friendly corrosion prevention solutions",
      "IATF 16949 certified innovative manufacturer",
    ],
    achievements: [
      "First global SO VCI® manufacturer with international certification",
      "Developed bio-degradable corrosion inhibition technology",
      "Established global market presence in protective solutions",
    ],
  },
  eetamax: {
    title: "Eetamax Energy Solutions Private Limited",
    description:
      "A manufacturer of high-performance industrial lights and lighting control solutions with over two decades of energy-efficient technologies.",
    image: "/assets/etamax.jpeg",
    fullDescription: `Is a leader in high-efficiency, zero-maintenance lighting solutions, offering tailored products for industries and infrastructure projects. With over 25 years of experience and a portfolio that includes smart street lighting for Jaipur, our systems save on CAPEX and OPEX, with products lasting up to 50,000 hours. Serving major clients like Whirlpool, Bosch, and NHAI, we bring optimized lighting across India.`,
    link: "https://www.industrialledsolutions.net/",
    expertise: [
      "Advanced industrial lighting technologies",
      "Smart lighting control systems",
      "Energy-efficient design solutions",
    ],
    achievements: [
      "Over 300 specialized lighting products",
      "State-of-the-art design and testing facilities",
      "IoT and connected lighting innovations",
    ],
  },
  innoverve: {
    title: "Innoverve Inventions Private Limited",
    description:
      "An innovative automation solutions provider specializing in CNC machines, industrial robotics, and IoT solutions for manufacturing industries.",
    image: "/assets/innoverve.jpg",
    fullDescription: `A tech-forward automation solutions provider from Indore, we specialize in Industrial Automation, Robotics, and IoT for India’s industrial sectors. Our interdisciplinary team designs durable and efficient solutions that improve quality, streamline production, and reduce manpower, empowering industries across India with reliable automation.`,
    link: "https://www.innoverveinventions.com/",
    expertise: [
      "CNC Machine Manufacturing",
      "Industrial Robotics",
      "IoT and Automation Solutions",
    ],
    achievements: [
      "First Indian manufacturer of CNC Metal Spinning Machines",
      "Developed Android-based Motion Controllers",
      "Pioneering IoT integration in industrial automation",
    ],
  },
  rustfreeglobe: {
    title: "Rust Free Globe Private Limited",
    description:
      "A pioneering company offering green rust prevention solutions across multiple industrial sectors since 2017.",
    image: "/assets/rust.jpeg",
    fullDescription: `Offers advanced rust management solutions for ferrous metals, protecting assets with our innovative Steel Guard Nano Coat (SGNC) a nanotechnology-based coating that improves iron’s corrosion resistance to near-noble metal standards. Since 2017, we’ve supported clients with tailored preservation coatings, surface treatments, and comprehensive corrosion audits, delivering a one-stop solution to reduce maintenance costs and extend the life of vital infrastructure.`,
    link: "https://www.rustfreeglobe.com/",
    expertise: [
      "Multi-sector Rust Prevention",
      "Environmentally Friendly Solutions",
      "Cost-Effective Asset Protection",
    ],
    achievements: [
      "Strong dealer network in India and internationally",
      "Serving automotive, chemical, railway, and marine sectors",
      "Innovative approach to maintenance cost reduction",
    ],
  },
};

const CompanyDetailPage = () => {
  const { companySlug } = useParams();
  const company = successStories[companySlug];

  if (!company) {
    return <div>Company Not Found</div>;
  }

  const IconMap = {
    suprabha: ShieldCheckIcon,
    eetamax: LightBulbIcon,
    innoverve: CodeBracketIcon,
    rustfree: GlobeAltIcon,
  };

  const CompanyIcon = IconMap[companySlug] || GlobeAltIcon;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-orange-600/80 to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 md:py-24 relative z-20 pt-20"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            {company.title === "Suprabha Protective Products Private Limited" ||
            company.title === "Innoverve Inventions Private Limited" ? (
              <img
                src={company.image}
                alt={company.title}
                className="w-full h-full object-fit transform hover:scale-105 transition duration-300"
              />
            ) : (
              <img
                src={company.image}
                alt={company.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            )}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              {/* <CompanyIcon className="w-12 h-12 text-orange-600" /> */}
              <h1 className="text-4xl font-bold text-orange-600">
                {company.title}
              </h1>
            </div>

            <p className="text-gray-700 text-lg">{company.description}</p>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                Company Overview
              </h2>
              <p className="text-gray-600">{company.fullDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-5 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-500 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Core Expertise
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {company.expertise.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-500 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Key Achievements
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {company.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Visit Company Website</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyDetailPage;
