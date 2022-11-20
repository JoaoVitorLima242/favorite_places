import { TLocation } from "../../../models/Place/index.d";

export type FormFields = {
    title: string;
    location: TLocation;
    image: string;
}

export type FormValuesNames = 'title' | 'location' | 'image';
