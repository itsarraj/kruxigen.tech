"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
// Set the Indian time zone (IST - Indian Standard Time)
moment_timezone_1.default.tz.setDefault('Asia/Kolkata');
const subscribeSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    created_at: { type: Date, default: () => (0, moment_timezone_1.default)().toDate() },
    updated_at: { type: Date, default: () => (0, moment_timezone_1.default)().toDate() }, // Use a function for default value
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Rename default Mongoose timestamps
);
// Update the timestamps manually in the pre-save middleware
subscribeSchema.pre('save', function (next) {
    const currentDate = (0, moment_timezone_1.default)().toDate(); // Convert moment to a Date object
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    this.updated_at = currentDate;
    next();
});
const Subscribe = mongoose_1.default.model('Subscribe', subscribeSchema);
exports.default = Subscribe;
