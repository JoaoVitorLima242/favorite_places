import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { useState } from 'react';
import { Alert, Image } from 'react-native';

import * as S from './styles'

const ImagePicker = () => {
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
    
    const [pickedImage, setPickedImage] = useState('')

    const verifyPermission = async () => {
        if (cameraPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
            return await requestPermission()
        }

        if (cameraPermissionInfo?.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant camera permissions to use this app.'
            )

            return false
        }

        return true
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermission()

        if (!hasPermission) {
            return;
        }

        const response = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })

        if (!response.canceled) {
            setPickedImage(response.assets[0].uri)
        }

        
    }


    return (
        <S.Wrapper>
            <S.PreviewImage>
                {
                    pickedImage 
                    ? <S.PickedImage source={{uri: pickedImage}}/>
                    : <S.NoImageText>No image taken yet.</S.NoImageText>
                }
                
            </S.PreviewImage>
            <S.TakePictureButton title='Take Image' onPress={takeImageHandler}/>
        </S.Wrapper>
    )
}

export default ImagePicker