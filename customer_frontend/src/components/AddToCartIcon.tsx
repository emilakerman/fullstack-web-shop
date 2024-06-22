import React from "react";

// TODO: Upload this image to my own database.

const AddToCartIcon: React.FC = () => {
  const image: string =
    "https://ae01.alicdn.com/kf/S7f30d81c064b4494a41c81eed1ca47eaR/96x96.png";
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {!imageError ? (
        <img
          src={image}
          alt="Add to Cart Icon"
          width={60}
          height={60}
          className="hover:bg-gray-200 cursor-pointer p-2 rounded-full"
          onError={handleImageError}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width={60}
          height={60}
          className="hover:bg-gray-200 cursor-pointer p-2 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      )}
    </>
  );
};

export default AddToCartIcon;
