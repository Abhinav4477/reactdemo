import Express from "express";
import routes from "./routes/noteroutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";


dotenv.config();

const app = Express();
const PORT = process.env.PORT || 5001

connectDB()

app.use(Express.json());

app.use("/api/notes", routes);


app.listen(5001, () => {
    console.log("server started on port:", PORT);
});