import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const CapturedInAction = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const events = [
    {
      title: "Annual Shareholders Meeting",
      description: "A comprehensive review of our company's annual performance, strategic vision, and future growth initiatives.",
      image: "https://img.freepik.com/premium-photo/office-workers-meeting-conference-room_327483-12977.jpg?ga=GA1.1.891218442.1733565246&semt=ais_hybrid",
      date: "January 15, 2025",
      location: "Akshaya Associate Corporate Headquarters",
      category: "Corporate"
    },
    {
      title: "Company-Wide Innovation Hackathon",
      description: "A dynamic event bringing together our top talent to develop groundbreaking solutions and foster creative problem-solving.",
      image: "https://img.freepik.com/premium-photo/advancement-technology-has-helped-alleviate-human-burdens-hand-controlled_159755-11310.jpg?ga=GA1.1.891218442.1733565246&semt=ais_hybrid",
      date: "March 10, 2025",
      location: "Akshaya Associate Innovation Center",
      category: "Innovation"
    },
    {
      title: "CSR Initiative Launch: Community Development Program",
      description: "Unveiling our comprehensive corporate social responsibility program focused on local community empowerment and sustainable development.",
      image: "https://img.freepik.com/premium-photo/diverse-group-business-people-planning-alternative-energy-utilization-greener-sustainable-earth-by-reducing-co2-emission-carbon-credit-with-renewable-clean-energy-technology-quaint_31965-201850.jpg?ga=GA1.1.891218442.1733565246&semt=ais_hybrid",
      date: "May 5, 2025",
      location: "Community Engagement Hall",
      category: "Community"
    },
    {
      title: "Digital Transformation Summit",
      description: "An internal conference exploring cutting-edge technologies and digital strategies to drive Akshaya Associate forward.",
      image: "https://img.freepik.com/free-photo/image-by-rawpixel-com_53876-165282.jpg?ga=GA1.1.891218442.1733565246&semt=ais_hybrid",
      date: "July 20, 2025",
      location: "Akshaya Associate Tech Hub",
      category: "Technology"
    },
    {
      title: "Employee Recognition and Achievements Gala",
      description: "Celebrating the outstanding contributions and milestones of our exceptional team members across all departments.",
      image: "https://img.freepik.com/premium-photo/generative-ai-startup-collaboration-are-winners-strengths_28914-13216.jpg?ga=GA1.1.891218442.1733565246&semt=ais_hybrid",
      date: "September 12, 2025",
      location: "Grand Corporate Ballroom",
      category: "Corporate"
    }
  ];

  const categories = ['All', ...new Set(events.map(event => event.category))];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold mb-6 bg-clip-text text-orange-500">
          Witness Our Team in Action, Making Every Moment Count
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our upcoming events that showcase innovation, community engagement, and corporate excellence.
          </p> */}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-[#ea580c] text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white text-[#ea580c] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 bg-[#ea580c] right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="font-bold text-[#ea580c] text-2xl text-gray-800 group-hover:text-[#ea580c] transition-colors">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-5 h-5 mr-2 text-[#ea580c]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-5 h-5 mr-2 text-[#ea580c]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="flex items-center text-[#ea580c] hover:text-blue-800 font-semibold transition-colors">
                    View Details <ChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-600 mb-4">
              No Events Found
            </h2>
            <p className="text-gray-500">
              We couldn't find any events in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapturedInAction;