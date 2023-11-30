// Import your models
import ContactUs from '../model/ContactUs';
import Subscribe from '../model/Subscribe';
import PageView from '../model/PageView';

// Import Express and create a router
import express from 'express';
const router = express.Router();

// API
// Create a route to add a new contact entry
router.post(`/api/contact`, async (req, res) => {
  try {
    console.log(`Received ${req.method} request for ${req.url}`);

    const { name, email, message } = req.body;
    const newContact = new ContactUs({ name, email, message });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a route to get all contact entries
router.get(`/api/contacts`, async (req, res) => {
  try {
    console.log(`Received ${req.method} request for ${req.url}`);

    const contacts = await ContactUs.find();
    res.status(200).json(contacts);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a route to add a new email subscription
router.post(`/api/subscribe`, async (req, res) => {
  try {
    console.log(`Received ${req.method} request for ${req.url}`);

    const { email } = req.body;
    const newSubscription = new Subscribe({ email });
    const savedSubscription = await newSubscription.save();
    res.status(201).json(savedSubscription);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a route to get all email subscriptions
router.get(`/api/subscriptions`, async (req, res) => {
  try {
    console.log(`Received ${req.method} request for ${req.url}`);
    const subscriptions = await Subscribe.find();
    res.status(200).json(subscriptions);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// -----------
// PageVIew Code
// -----------

// Increment the view count for a page
router.post('/api/increment-page-view', async (req, res) => {
  const { page_url } = req.body;

  try {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log(`Received Create or Update request for ${page_url}`);

    let pageView = await PageView.findOne({ page_url });

    if (!pageView) {
      pageView = new PageView({ page_url });
    }

    pageView.view_count += 1;
    console.log(`Updated request for ${page_url} to ${pageView.view_count}`);

    await pageView.save();

    res.status(200).json({ view_count: pageView.view_count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get the view count for a page
router.get('/get-view-count', async (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);

  try {
    const pageViews = await PageView.find();

    // Render the EJS template with the list of page views
    res.render('view-count', { pageViews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// -----------
// Server Data Retrival
// -----------

// Route to get contact form data and render 'data.ejs'
router.get(`/data`, async (req, res) => {
  try {
    const data = await ContactUs.find().select(
      'name email message createdAt updatedAt'
    );
    // const data = await ContactUs.find(); // Fetch data from the ContactUs model
    res.render('data', { data }); // Render 'data.ejs' with the fetched data
  } catch (error: any) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route to get contact form data as a list
router.get(`/data-list`, async (req, res) => {
  try {
    const data = await ContactUs.find().select('name email message'); // Fetch data with only 'name', 'email', and 'message' fields
    res.render('data-list', { data }); // Render 'data-list.ejs' with the fetched data
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to get email addresses and render 'emails.ejs'
router.get(`/emails`, async (req, res) => {
  try {
    const emails = await Subscribe.find().select('email createdAt updatedAt'); // Fetch email addresses from the Subscribe model
    const emailList = emails.map((emailDoc) => emailDoc.email); // Extract emails from documents
    res.render('emails', { emails: emails }); // Render 'emails.ejs' with the email addresses
  } catch (error: any) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route to get email addresses as a list
router.get(`/emails-list`, async (req, res) => {
  try {
    const emails = await Subscribe.find().select('email'); // Fetch email addresses only
    const emailList = emails.map((emailDoc) => emailDoc.email); // Extract emails from documents
    res.render('emails-list', { emails: emailList }); // Render 'emails-list.ejs' with the email addresses
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// home
router.get(`/`, async (req, res) => {
  try {
    res.render('home');
  } catch (error: any) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
