import Express from "express";
import routes from "./routes/noteroutes.js";
import { connectDB } from "./config/db.js";


const app = Express();

connectDB()

app.use("/api/notes", routes);


app.listen(5001, () => {
    console.log("server started on port 5001");
});