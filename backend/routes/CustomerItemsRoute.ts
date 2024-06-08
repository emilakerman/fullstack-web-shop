import express from "express";
import { Item } from "../models/itemModel.js";

const customerRouter = express.Router();

// Get availability count by id. (untested)
// TODO(Emil): Test this in the customer front end.
// customerRouter.get("/:id/availability", async (req: any, res: any) => {
//   try {
//     const id: string = req.params.id;
//     const item = await Item.findById(id);
//     if (!item) {
//       return res.status(404).send({ message: "Item not found C-route" });
//     }
//     return res.status(200).send(item.availability.toString());
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// moved to .js route

export default customerRouter;
