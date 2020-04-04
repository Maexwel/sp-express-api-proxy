import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import baseRoute from './routes/baseRoute';

dotenv.config(); // Include .env file

const port = process.env.SERVER_PORT;

// App configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes mapping
app.use('/', baseRoute);

// Start app
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server stared at localhost:${port}`);
});

export default app;