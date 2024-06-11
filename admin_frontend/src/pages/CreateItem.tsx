import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import BackButton from "../components/BackButton";

const CreateItem = () => {
  const [price, setPrice]: any = useState("");
  const [title, setTitle]: any = useState("");
  const [availability, setAvailability]: any = useState({ availability: 1 });
  const [category, setCategory]: any = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSaveItem = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("availability", availability);
    formData.append("category", category);
    formData.append("image", image);

    setLoading(true);
    await axios
      .post("http://localhost:5555/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <div className="p-4 bg-gray-900 text-white">
      <BackButton />
      <h1 className="text-3xl my-4">Create Item</h1>
      {loading ? <LoadingAnimation /> : ""}
      <div className="flex flex-col border-2 border-gray-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Availability</label>
          <input
            type="number"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="border-2 border-gray-500 px-4 py-2  w-full text-black"
          />
        </div>
        <button className="p-2 bg-sky-800 m-8" onClick={handleSaveItem}>
          Save
        </button>
      </div>
    </div>
  );
};
export default CreateItem;
