import { useForm } from 'react-hook-form'

// Components
import Button from '../../ui/Button';
import ImagePicker from '../../ui/ImagePicker';
import Input from '../../ui/Input'
import LocationPicker from '../../ui/LocationPicker';
// Styles
import * as S from './styles'
// Types
import { FormFields } from './types';

type Props = {
    onSavePlace: (data: FormFields) => void
}

const PlaceForm = ({ onSavePlace }: Props) => {
    const { control, handleSubmit } = useForm<FormFields>()

    const onSubmit = async (data: FormFields) => onSavePlace(data)

    return (
        <S.Wrapper>
            <Input 
                control={control}
                name='title'
                label='Title'
            />
            <ImagePicker 
                control={control}
                name='image'
            />
            <LocationPicker 
                control={control}
                name='location'
            />
            <Button 
                onPress={handleSubmit(onSubmit)}
            > 
                Save Location
            </Button>
        </S.Wrapper>
    )
}

export default PlaceForm