import express from express;

const router = express.Router();

app.get("/", (req, res) => {
    res.status(200).send("You got this note");
});

app.post("/:id", (req, res) => {
    res.status(201).json({ message: "notes added" });
});
app.put("/:id", (req, res) => {
    res.status(200).json({ message: "notes updated" });
});
app.delete("/:id", (req, res) => {
    res.status(200).json({ message: "notes deleted" });
});

export default router;