const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const connectDb = require("./config/db");


const app = express();

// const port = process.env.PORT || 5002; // Change port
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.use(errorHandler);

// const port = process.env.PORT || 5000;

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
});
