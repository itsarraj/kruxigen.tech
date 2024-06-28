import mongoose from 'mongoose';
declare const PageView: mongoose.Model<{
    page_url: string;
    view_count: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    page_url: string;
    view_count: number;
}> & {
    page_url: string;
    view_count: number;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    page_url: string;
    view_count: number;
}, mongoose.Document<unknown, {}, {
    page_url: string;
    view_count: number;
}> & {
    page_url: string;
    view_count: number;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export default PageView;
