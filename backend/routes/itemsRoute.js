import express from "express";
import { Item } from "../models/itemModel.js";
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });


// Create a new item with JSON data.
router.post('/', upload.single('image'), async (req, res) => {
  try {
      if (!req.body.title || !req.body.price || !req.body.availability || !req.body.category || !req.file) {
        return res.status(400).send({ message: 'All fields are required' });
      }
      const newItem = ({
        title: req.body.title,
        price: req.body.price,
        availability: req.body.availability,
        category: req.body.category,
        image: req.file.path,
      });
      const item = await Item.create(newItem);
      return res.status(201).send(item);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  // Get all items.
  router.get('/', async (req, res) => {
    try {
      const items = await Item.find();
      return res.status(200).send(items);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  // Get item by id.
  router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const item = await Item.findById(id);
      if (!item) {
        return res.status(404).send({ message: 'Item not found' });
      }
      return res.status(200).send(item);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  // Update item by id.
  router.put('/:id', upload.single('image'), async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = { ...req.body };
      if (req.file) {
        updateData.image = req.file.path;  // Update the image path if a new image is uploaded
      }
      const result = await Item.findByIdAndUpdate(id, updateData, { new: true });
      if (!result) {
        return res.status(404).send({ message: 'Item not found' });
      }
      return res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  });
  
  // Delete item by id.
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findByIdAndDelete(id);
      if (!item) {
        return res.status(404).send({ message: 'Item not found' });
      }
      return res.status(200).send({ message: 'Item deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  

// New endpoint to get availability by id
router.get("/:id/availability", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    return res.status(200).send(item.availability.toString());
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

  export default router;