import { useIsFocused } from "@react-navigation/native"
import { useEffect, useState } from "react"

import PlacesList from "../../components/Places/List"
import Place from "../../models/Place"
import { fetchPlaces } from "../../services/database"

const AllPlacesScreen = () => {
    const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([])

    const isFocused = useIsFocused()

    useEffect(() => {
        const loadPlaces = async () => {
            const places = await fetchPlaces()

            setLoadedPlaces(places)
        }

        if (isFocused) {
            loadPlaces()
        }
    }, [isFocused])

    return (
        <PlacesList places={loadedPlaces} />
    )
}

export default AllPlacesScreen