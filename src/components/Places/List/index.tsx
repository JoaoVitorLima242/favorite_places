import { FlatList, Text } from "react-native"

// Types
import Place from "../../../models/Place"
// Components
import PlaceItem from "../Item"
// Styles
import * as S from './styles'

type Props = {
    places: Place[]
}

const PlacesList = ({
    places,

}: Props) => {
    if (!places || places.length === 0) {
        return (
            <S.Fallback>
                <S.FallbackText>No places added yet - startin adding some! </S.FallbackText>
            </S.Fallback>
        )
    }

    return (
        <FlatList 
            data={places}
            keyExtractor={({id}) => id} 
            renderItem={({ item }) => (
                <PlaceItem place={item}/>
            )}
        />
    )
}

export default PlacesList