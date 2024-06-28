"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const routes_1 = __importDefault(require("./routes/routes"));
require("./db/connection");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// Set up middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); // Add this for form data
// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // Create a "views" folder to store your EJS templates
app.use('/', routes_1.default);
// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
