import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./Screens/RegistrationScreen";
import BackgroundImage from "./assets/images/app_background.jpg";

const App = () => {
    const [fontsLoaded] = useFonts({
        "Inter-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={BackgroundImage}
                resizeMode="cover"
                style={styles.image}
            >
                <RegistrationScreen />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});

export default App;
