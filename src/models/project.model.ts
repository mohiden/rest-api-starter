import mongoose from 'mongoose';
import { IProject } from '../lib';

const COLLECTION_NAME = "images";

const schema = new mongoose.Schema<IProject>({

}, {
    timestamps: true
})

export const projectModel = mongoose.model<IProject>(
    "Order",
    schema,
    COLLECTION_NAME
);