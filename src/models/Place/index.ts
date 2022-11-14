import { TLocation } from './index.d'

export default class Place {
    readonly id: string;
    title: string
    imageUri: string
    address: string
    location: TLocation;

    constructor(title: string, imageUri: string, address: string, location: TLocation) {
        this.id = new Date().toString() + Math.random().toString
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
    }
}