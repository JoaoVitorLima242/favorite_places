import { useState } from "react"
import { MapPressEvent, Marker, Region } from "react-native-maps"

import { TLocation } from "../../helpers/location"

import * as S from './styles'

const Map = () => {
    const [ selectedLocation, setSelectedLocation ] = useState<TLocation | null>(null)

    const region: Region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const selectLoactionHandler = (event: MapPressEvent) => {
        const { latitude, longitude } = event.nativeEvent.coordinate

        setSelectedLocation({latitude, longitude})
    }

    return (
        <S.CustomMap 
            initialRegion={region} 
            onPress={selectLoactionHandler}
        >
            {
                selectedLocation &&
                <Marker 
                    title="Picked Location"
                    coordinate={selectedLocation}
                />
            }
        </S.CustomMap>
    )
}

export default Map