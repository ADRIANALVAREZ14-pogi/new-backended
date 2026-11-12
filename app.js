import express from "express";
import cors from 'cors';

import studentRoutes from "./routes/studentRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

let corsOptions = {
    origin: 'http://localhost:5175'
};

//creates express app
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

/* Routes implementation */

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

try {
    const port = 3000; 
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
} 