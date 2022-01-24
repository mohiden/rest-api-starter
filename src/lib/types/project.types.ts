import { BaseModel } from ".";

export interface IProject extends BaseModel {
    title: string;
    category: string;
    preview_image: string;
    images: string[];
}