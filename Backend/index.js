import express  from "express";
import cors from  "cors";
import bodyParser from "body-parser";
import skills from "./routes/skills.routes.js"
const PORT = process.env.PORT || 4000;

const app =  express();
//use middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//load routes
app.use("/skills", skills);

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
