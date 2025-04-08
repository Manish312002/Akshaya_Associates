import React from "react";

const CapturedInAction = () => {
  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Payment",
      date: "October 19, 2024",
      title: "This prefabricated passive house is memorable highly sustainable",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Security",
      date: "October 14, 2024",
      title: "Announcing if attachment resolution sentiment.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      {/* Top Section */}
      <div className="text-center mb-8 sm:mb-12">
        <button className="bg-orange-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md hover:shadow-lg transition text-sm sm:text-base">
          Captured in Action
        </button>
        <h2 className="text-sm sm:text-lg text-gray-500 font-medium mt-3 sm:mt-4 px-4">
          Dummy Line Dummy Line Dummy Line Dummy Line Dummy Line Dummy Line
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 sm:h-56 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm">
                <span className="bg-gray-200 text-gray-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  {card.category}
                </span>
                <span>{card.date}</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-2 sm:mt-4">
                {card.title}
              </h3>
              <a
                href="#"
                className="inline-block mt-2 sm:mt-4 text-orange-500 font-medium hover:underline text-sm sm:text-base"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapturedInAction;