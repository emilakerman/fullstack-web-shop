import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to={destination}>
        <button className="bg-sky-800 text-white rounded-md p-2 w-fit">
          <BsArrowLeft className="text-2xl" />
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
