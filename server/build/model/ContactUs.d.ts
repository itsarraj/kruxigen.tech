import mongoose from 'mongoose';
declare const ContactUs: mongoose.Model<{
    name: string;
    email: string;
    message: string;
    created_at: Date;
    updated_at: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    message: string;
    created_at: Date;
    updated_at: Date;
}> & {
    name: string;
    email: string;
    message: string;
    created_at: Date;
    updated_at: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: string;
        updatedAt: string;
    };
}, {
    name: string;
    email: string;
    message: string;
    created_at: Date;
    updated_at: Date;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    message: string;
    created_at: Date;
    updated_at: Date;
}> & {
    name: string;
    email: string;
    message: string;
    created_at: Date;
    updated_at: Date;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export default ContactUs;
