import { Document } from 'mongoose';

export interface Theme extends Document {
    _id: string;
    titleUrl: string;
    dateAdded? : Date;
    styles: any;
}
