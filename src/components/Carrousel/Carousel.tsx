import { useState } from "react";

export function Carousel(){
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Description 1"
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description 2"
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description 2"
    },
    {
      id: 4,
      title: "Item 4",
      description: "Description 2"
    },
    {
      id: 5,
      title: "Item 5",
      description: "Description 2"
    },
    {
      id: 6,
      title: "Item 6",
      description: "Description 3"
    }
  ];

 

  return (
    <div className="relative">
      <div className="absolute left-0 top-0">
        <button
          className="bg-red-500 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-l"
        >
          Prev
        </button>
      </div>
      <div className="absolute right-0 top-0">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <div
        className="flex justify-center"
        style={{
          transform: `translateX(-${activeIndex * (100 / items.length)}%)`
        }}
      >
        {items.map(item => (
          <div
            key={item.id}
            className="w-full h-64 bg-gray-300 text-center p-10"
            style={{ flex: `0 0 ${100 / items.length}%` }}
          >
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
