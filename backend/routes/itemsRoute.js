import express from "express";
import { Item } from "../models/itemModel.js";

const router = express.Router();


// Create a new item with JSON data.
  router.post('/', async (req, res) => {
    try {
      if (!req.body.title || !req.body.price || !req.body.availability || !req.body.category) {
        return res.status(400).send({ message: 'All fields are required' });
      }
      const newItem = ({
        title: req.body.title,
        price: req.body.price,
        availability: req.body.availability,
        category: req.body.category,
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
  router.put('/:id', async (req, res) => {
    try {
      if (!req.body.title || !req.body.price || !req.body.availability || !req.body.category) {
        return res.status(400).send({ message: 'All fields are required' });
      }
      const { id } = req.params;
      const result = await Item.findByIdAndUpdate(id, req.body);
      if (!result) {
        return res.status(404).send({ message: 'Item not found' });
      }
      const updatedItem = { ...result._doc, ...req.body };
      return res.status(200).send(updatedItem);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }});
  
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