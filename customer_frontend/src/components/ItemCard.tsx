import React from "react";

interface ItemProps {
  item: {
    _id: string;
    title: string;
    category: string;
    availability: number;
    price: number;
  };
}

const ItemCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-gray-0">
      <div className="">
        <img
          src="https://static.wikia.nocookie.net/sonic/images/8/80/Nintendo_GameCube.png"
          alt="Item Image"
          className="w-full h-80 object-cover object-center bg-gray-200"
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
