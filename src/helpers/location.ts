import { GOOGLE_API_KEY } from '@env'

import { TLocation } from '../models/Place/index.d';

export const getMapPreview = ({latitude, longitude}: TLocation) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl
}

export const getAddress = async ({latitude, longitude}: TLocation) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
    const response = await fetch(url)

    if (!response.ok) throw new Error('Failed to fetch address!')

    const data = await response.json()
    const address: string = data.results[0].formatted_address

    return address
}