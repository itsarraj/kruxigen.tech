import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Load environment variables

dotenv.config();
import router from './routes/routes';
import './db/connection';

const app = express();
const PORT = process.env.PORT || 8000;

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this for form data

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // Create a "views" folder to store your EJS templates

app.use('/', router);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
