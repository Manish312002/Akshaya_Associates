import React from 'react';

const TestimonialCard = ({ quote, author, role, src }) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-md shadow-md">
      <p className="text-gray-700 italic text-sm sm:text-base">{quote}</p>
      <div className="flex items-center mt-4">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={author}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 sm:mr-4"
        />
        <div>
          <h4 className="font-medium text-sm sm:text-base">{author}</h4>
          <p className="text-gray-500 text-xs sm:text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Consultation discover apartments. indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
      author: "Anthom Bu Spar",
      role: "MARKETING MANAGER",
    },
    {
      quote: "Targeting consultation apartments. indulgence creative under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
      author: "Matthew J. Wyman",
      role: "SENIOR CONSULTANT",
    },
  ];

  return (
    <div className="bg-orange-500 mt-[5rem] py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;