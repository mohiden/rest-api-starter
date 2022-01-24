import { Document } from 'mongoose';
export interface BaseModel extends Document {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}