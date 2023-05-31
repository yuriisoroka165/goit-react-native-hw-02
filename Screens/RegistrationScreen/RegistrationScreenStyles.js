import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    registrationContainer: {
        position: "relative",
        width: "100%",
        height: 560,
        marginTop: "auto",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: "flex",
        alignItems: "center",
    },
    userImageContainer: {
        position: "absolute",
        top: -50,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    }
});
