import { StackScreenProps } from "@react-navigation/stack"

// Components
import PlaceForm from "../../components/Places/Form"
import { FormFields } from "../../components/Places/Form/types"
// Types
import Place from "../../models/Place"
import { RootStackParamList } from "../../routes/types"
// Services
import { insertPlace } from "../../services/database"
// Helpers
import { getAddress } from "../../helpers/location"

type Props = StackScreenProps<RootStackParamList, 'AddPlace'>;


const AddPlaceScreen = ({ navigation }: Props) => {
    const createPlaceHandler = async ({ image, location, title }: FormFields) => {
        const address = await getAddress(location)
        
        const placeData = new Place(title, image, address, location)

        await insertPlace(placeData);

        navigation.navigate('AllPlaces')
    }

    return (
        <PlaceForm onSavePlace={createPlaceHandler}/>
    )
}

export default AddPlaceScreen