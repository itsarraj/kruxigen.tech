import mongoose from 'mongoose';
declare const Subscribe: mongoose.Model<{
    email: string;
    created_at: Date;
    updated_at: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    created_at: Date;
    updated_at: Date;
}> & {
    email: string;
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
    email: string;
    created_at: Date;
    updated_at: Date;
}, mongoose.Document<unknown, {}, {
    email: string;
    created_at: Date;
    updated_at: Date;
}> & {
    email: string;
    created_at: Date;
    updated_at: Date;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Subscribe;
