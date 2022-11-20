import PlaceForm from "../../components/Places/Form"
import { FormFields } from "../../components/Places/Form/types"
import { getAddress } from "../../helpers/location"
import Place from "../../models/Place"

const AddPlaceScreen = () => {
    const createPlaceHandler = async ({ image, location, title }: FormFields) => {
        const address = await getAddress(location)
        
        const placeData = new Place(title, image, address, location)

        console.log(placeData)
    }

    return (
        <PlaceForm onSavePlace={createPlaceHandler}/>
    )
}

export default AddPlaceScreen