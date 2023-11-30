import mongoose, { Schema } from 'mongoose';
import moment from 'moment-timezone';

// Set the Indian time zone (IST - Indian Standard Time)
moment.tz.setDefault('Asia/Kolkata');

const contactUsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: () => moment().toDate() }, // Use a function for default value
    updated_at: { type: Date, default: () => moment().toDate() }, // Use a function for default value
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Rename default Mongoose timestamps
);

// Update the timestamps manually in the pre-save middleware
contactUsSchema.pre('save', function (next) {
  const currentDate = moment().toDate(); // Convert moment to a Date object
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  this.updated_at = currentDate;
  next();
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

export default ContactUs;
