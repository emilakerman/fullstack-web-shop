import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import BackButton from "../components/BackButton";

const ShowItem = () => {
  const [item, setItem]: any = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/items/${id}`)
      .then((response: any) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 bg-gray-900 text-white">
      <BackButton />
      <h1 className="text-3xl my-4">Show Item</h1>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{item._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{item.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Price</span>
            <span>{item.price}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Category</span>
            <span>{item.category}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Available</span>
            <span>{item.availability}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowItem;
