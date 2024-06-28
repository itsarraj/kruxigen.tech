"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import your models
const ContactUs_1 = __importDefault(require("../model/ContactUs"));
const Subscribe_1 = __importDefault(require("../model/Subscribe"));
const PageView_1 = __importDefault(require("../model/PageView"));
// Import Express and create a router
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// API
// Create a route to add a new contact entry
router.post(`/api/contact`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Received ${req.method} request for ${req.url}`);
        const { name, email, message } = req.body;
        const newContact = new ContactUs_1.default({ name, email, message });
        const savedContact = yield newContact.save();
        res.status(201).json(savedContact);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}));
// Create a route to get all contact entries
router.get(`/api/contacts`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Received ${req.method} request for ${req.url}`);
        const contacts = yield ContactUs_1.default.find();
        res.status(200).json(contacts);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}));
// Create a route to add a new email subscription
router.post(`/api/subscribe`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Received ${req.method} request for ${req.url}`);
        const { email } = req.body;
        const newSubscription = new Subscribe_1.default({ email });
        const savedSubscription = yield newSubscription.save();
        res.status(201).json(savedSubscription);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}));
// Create a route to get all email subscriptions
router.get(`/api/subscriptions`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Received ${req.method} request for ${req.url}`);
        const subscriptions = yield Subscribe_1.default.find();
        res.status(200).json(subscriptions);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}));
// -----------
// PageVIew Code
// -----------
// Increment the view count for a page
router.post('/api/increment-page-view', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page_url } = req.body;
    try {
        console.log(`Received ${req.method} request for ${req.url}`);
        console.log(`Received Create or Update request for ${page_url}`);
        let pageView = yield PageView_1.default.findOne({ page_url });
        if (!pageView) {
            pageView = new PageView_1.default({ page_url });
        }
        pageView.view_count += 1;
        console.log(`Updated request for ${page_url} to ${pageView.view_count}`);
        yield pageView.save();
        res.status(200).json({ view_count: pageView.view_count });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}));
// Get the view count for a page
router.get('/get-view-count', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Received ${req.method} request for ${req.url}`);
    try {
        const pageViews = yield PageView_1.default.find();
        // Render the EJS template with the list of page views
        res.render('view-count', { pageViews });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}));
// -----------
// Server Data Retrival
// -----------
// Route to get contact form data and render 'data.ejs'
router.get(`/data`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ContactUs_1.default.find().select('name email message createdAt updatedAt');
        // const data = await ContactUs.find(); // Fetch data from the ContactUs model
        res.render('data', { data }); // Render 'data.ejs' with the fetched data
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}));
// Route to get contact form data as a list
router.get(`/data-list`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ContactUs_1.default.find().select('name email message'); // Fetch data with only 'name', 'email', and 'message' fields
        res.render('data-list', { data }); // Render 'data-list.ejs' with the fetched data
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}));
// Route to get email addresses and render 'emails.ejs'
router.get(`/emails`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emails = yield Subscribe_1.default.find().select('email createdAt updatedAt'); // Fetch email addresses from the Subscribe model
        const emailList = emails.map((emailDoc) => emailDoc.email); // Extract emails from documents
        res.render('emails', { emails: emails }); // Render 'emails.ejs' with the email addresses
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}));
// Route to get email addresses as a list
router.get(`/emails-list`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emails = yield Subscribe_1.default.find().select('email'); // Fetch email addresses only
        const emailList = emails.map((emailDoc) => emailDoc.email); // Extract emails from documents
        res.render('emails-list', { emails: emailList }); // Render 'emails-list.ejs' with the email addresses
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
}));
// home
router.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('home');
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}));
exports.default = router;
