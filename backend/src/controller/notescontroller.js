import Note from "../models/Note.js"
export async function getnotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getting the notes", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function putnotes(req, res) {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })
        await newNote.save()
        res.status(200).json({ message: "Note Creates Successfully" })
    } catch (error) {
        console.error("Error in note controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updatenotes(req, res) {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, {
                title,
                content
            }, {
                new: true,
            }
        );
        if (!updatedNote) return res.status(404).json({ message: "not found" });
        res.status(200).json(updatedNote);

    } catch (error) {
        console.error("Error in note controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deletenotes(req, res) {
    try {
        const deletedNote = await Note.findByIdAndUpdate(req.params.id)
        if (!deletedNode) return res.status(404).json({ message: "not found" });
        res.status(200).json(deletedNote);


    } catch (error) {
        console.error("Error in note controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getnotesbyid(req, res) {

    try {
        const notes = await Note.findById(req.params.id);
        if (!notes) return res.status(404).json({ message: "not found" });

        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getting the notes", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}