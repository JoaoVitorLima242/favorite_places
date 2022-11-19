import { GOOGLE_API_KEY } from '@env'

export type TLocation = {
    latitude: number; 
    longitude: number;
}

export const getMapPreview = ({latitude, longitude}: TLocation) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl
}