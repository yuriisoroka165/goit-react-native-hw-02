import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./RegistrationScreenStyles";
import RegistrationImageButton from "../../components/RegistrationImageButton";
import InputComponent from "../../components/InputComponent";
import { useState } from "react";

const RegistrationScreen = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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

            <Text style={styles.registrationFormHeader}>Реєстрація</Text>

            <View style={styles.registrationForm}>
                <InputComponent
                    placeholder={"Логін"}
                    type={"text"}
                    name={"login"}
                />
                <InputComponent
                    placeholder={"Адреса електронної пошти"}
                    type={"email"}
                    name={"email"}
                />

                <View style={{ position: "relative" }}>
                    <InputComponent
                        placeholder={"Пароль"}
                        type={"password"}
                        name={"password"}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 16,
                            top: 16,
                        }}
                        onPress={togglePasswordVisibility}
                    >
                        <Text style={{ color: "#1B4371" }}>
                            {showPassword ? "Приховати" : "Показати"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={styles.registrationFormSubmitButton}
                title="Зареєструватися"
            >
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: "center",
                        color: "#ffffff",
                    }}
                >
                    Зареєструватися
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text
                    style={{
                        fontSize: 16,
                        color: "#1B4371",
                        textAlign: "center",
                    }}
                >
                    Вже є акаунт? Увійти
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegistrationScreen;
