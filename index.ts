import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routerV1 from "./src/router/v1/router.v1";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routerV1);
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello world!!!",
    });
})

// app.use((req: Request, res: Response) => {
//     res.status(500).json({
//         message: res.locals.errorMessage,
//     });
// });

app.listen(port, () => console.log("Server is running on port 3000"));
