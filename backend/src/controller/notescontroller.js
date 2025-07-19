export function getnotes(req, res) {
    res.status(200).send("You got this note");
}

export function putnotes(req, res) {
    res.status(201).json({ message: "notes added" });
}

export function updatenotes(req, res) {
    res.status(200).json({ message: "notes updated" });
}

export function deletenotes(req, res) {
    res.status(200).json({ message: "notes deleted" });
}