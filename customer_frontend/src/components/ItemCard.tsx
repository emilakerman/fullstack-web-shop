import React from "react";

interface ItemProps {
  item: {
    _id: string;
    title: string;
    category: string;
    availability: number;
  };
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600">
      <div className="px-6 py-4">
        <img
          src="https://i5.walmartimages.com/seo/Restored-Nintendo-Gamecube-Game-Console-Platinum-with-Controller-and-Cables-Refurbished_1577430e-3038-4cbf-a545-6bf8cbfb165e_1.4221efd3f903a904753156e2441d66ef.jpeg"
          alt="Item Image"
          className="h-64 w-full object-cover object-center"
        />
        <div className="font-bold text-xl mb-2 text-white py-3">
          {item.title}
        </div>
        <p className="text-white text-base">{item.category}</p>
        <p className="text-white text-base">
          Availability: {item.availability}
        </p>
      </div>
      <div className="flex justify-between px-4 pt-4 pb-4">
        <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {item.category}
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <button>Add to cart</button>
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
