import Express from "express";
import routes from "./routes/noteroutes.js";

const app = Express();

app.use("/api/notes", routes);


app.listen(5001, () => {
    console.log("server started on port 5001");
});