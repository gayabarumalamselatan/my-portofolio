import React, { useState } from "react";
import SplitText from "@/components/reactBits/SplitText";
import { cards } from "@/constant/works";
import Image from "next/image";

interface Card {
  title: string;
  desc: string;
  img?: string;
  details?: string;
}

const Works = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <section id="me-works" className="min-h-screen bg-white p-20 pt-35 pb-30">
      <div className="flex justify-center mt-5 mb-15">
        <SplitText
          text="Me Works"
          className="text-5xl pb-3 font-bold text-sky-900 flex justify-center"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer w-80"
              onClick={() => setSelectedCard(card)}
            >
              <Image
                className="rounded-t-2xl"
                src={card.img || "/placeholder.svg"}
                alt={card.title}
                width={400}
                height={200}
              />
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-md flex justify-center items-center z-50 p-5">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 relative shadow-2xl overflow-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close details"
            >
              &times;
            </button>
            <Image
              className="rounded-2xl mb-5"
              src={selectedCard.img || "/placeholder.svg"}
              alt={selectedCard.title}
              width={800}
              height={400}
            />
            <h2 className="text-3xl font-bold mb-4">{selectedCard.title}</h2>
            <p className="text-gray-700 mb-4">{selectedCard.desc}</p>
            {selectedCard.details && (
              <div className="text-gray-600 whitespace-pre-line">
                {selectedCard.details}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
