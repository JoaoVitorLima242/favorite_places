import { useForm } from 'react-hook-form'
import ImagePicker from '../../ui/ImagePicker';
import Input from '../../ui/Input'
import LocationPicker from '../../ui/LocationPicker';
import * as S from './styles'

type FormFields = {
    title: string;
}

const PlaceForm = () => {
    const { control, handleSubmit } = useForm<FormFields>()

    return (
        <S.Wrapper>
            <Input 
                control={control}
                name='title'
                label='Title'
            />
            <ImagePicker />
            <LocationPicker />
        </S.Wrapper>
    )
}

export default PlaceForm