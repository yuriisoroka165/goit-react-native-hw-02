import { View } from "react-native";

import { styles } from "./RegistrationScreenStyles";
import RegistrationImageButton from "../../components/RegistrationImageButton";

const RegistrationScreen = () => {
    const handleImgButtonPress = () => {
        console.log("touch");
    };

    return (
        <View style={styles.registrationContainer}>
            <View style={styles.userImageContainer}>
                <RegistrationImageButton
                    onPress={handleImgButtonPress}
                ></RegistrationImageButton>
            </View>
        </View>
    );
};

export default RegistrationScreen;
