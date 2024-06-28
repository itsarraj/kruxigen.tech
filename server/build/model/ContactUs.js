"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
// Set the Indian time zone (IST - Indian Standard Time)
moment_timezone_1.default.tz.setDefault('Asia/Kolkata');
const contactUsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: () => (0, moment_timezone_1.default)().toDate() },
    updated_at: { type: Date, default: () => (0, moment_timezone_1.default)().toDate() }, // Use a function for default value
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Rename default Mongoose timestamps
);
// Update the timestamps manually in the pre-save middleware
contactUsSchema.pre('save', function (next) {
    const currentDate = (0, moment_timezone_1.default)().toDate(); // Convert moment to a Date object
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    this.updated_at = currentDate;
    next();
});
const ContactUs = mongoose_1.default.model('ContactUs', contactUsSchema);
exports.default = ContactUs;
