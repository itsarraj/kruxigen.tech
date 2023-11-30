import mongoose, { Schema } from 'mongoose';

const pageViewSchema = new Schema({
  page_url: { type: String, required: true, unique: true },
  view_count: { type: Number, default: 0 },
});

const PageView = mongoose.model('PageView', pageViewSchema);

export default PageView;
