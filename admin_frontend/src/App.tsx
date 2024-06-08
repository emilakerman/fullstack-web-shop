import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateItem from "./pages/CreateItem";
import ShowItem from "./pages/ShowItem";
import DeleteItem from "./pages/DeleteItem";
import EditItem from "./pages/EditItem";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/create" element={<CreateItem />} />
        <Route path="/items/details/:id" element={<ShowItem />} />
        <Route path="/items/edit/:id" element={<EditItem />} />
        <Route path="/items/delete/:id" element={<DeleteItem />} />
      </Routes>
    </div>
  );
};

export default App;
