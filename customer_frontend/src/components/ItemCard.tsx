import React from "react";

interface ItemProps {
  item: {
    _id: string;
    title: string;
    category: string;
    availability: number;
    price: number;
    image: string;
  };
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-gray-0 hover:shadow-lg p-4">
      <div>
        <img
          src={`http://localhost:5555/${item.image}`}
          alt="Item Image"
          className="w-64 h-64 object-cover object-center bg-gray-200"
        />
        <div className="py-3">
          <div className="text-black">{item.title}</div>
          <p className="text-black text-base">{item.category}</p>
          <p className="text-black text-base mb-1 my-1">{item.price} kr</p>
          <p className="text-black text-base">
            Availability: {item.availability}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
