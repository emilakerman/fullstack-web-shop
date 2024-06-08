import axios from "axios";
import LoadingAnimation from "../components/LoadingAnimation";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { useState, useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/items")
      .then((response: any) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Items</h1>
        <Link to="/items/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-gray-700 rounded-md">Category</th>
              <th className="border border-gray-700 rounded-md">Title</th>
              <th className="border border-gray-700 rounded-md">Price</th>
              <th className="border border-gray-700 rounded-md">
                Availability
              </th>
              <th className="border border-gray-700 rounded-md">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any) => (
              <tr key={item._id} className="h-8">
                <td className="border border-gray-700 rounded-md text-center">
                  {item.category}
                </td>
                <td className="border border-gray-700 rounded-md text-center">
                  {item.title}
                </td>
                <td className="border border-gray-700 rounded-md text-center">
                  {item.price}
                </td>
                <td className="border border-gray-700 rounded-md text-center">
                  {item.availability}
                </td>
                <td className="border border-gray-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/items/details/${item._id}`}>
                      <BsInfoCircle className="text-green-500 text-2xl" />
                    </Link>
                    <Link to={`/items/edit/${item._id}`}>
                      <AiOutlineEdit className="text-yellow-500 text-2xl" />
                    </Link>
                    <Link to={`/items/delete/${item._id}`}>
                      <MdOutlineDelete className="text-red-500 text-2xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
