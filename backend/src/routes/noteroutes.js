import express from "express";
import { deletenotes, getnotes, putnotes, updatenotes } from "../controller/notescontroller.js";

const router = express.Router();

router.get("/", getnotes);

router.post("/", putnotes);

router.put("/:id", updatenotes);

router.delete("/:id", deletenotes);

export default router;