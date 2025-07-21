import express from "express";
import { deletenotes, getnotes, putnotes, updatenotes, getnotesbyid } from "../controller/notescontroller.js";

const router = express.Router();

router.get("/", getnotes);

router.get("/:id", getnotesbyid);

router.post("/", putnotes);

router.put("/:id", updatenotes);

router.delete("/:id", deletenotes);

export default router;