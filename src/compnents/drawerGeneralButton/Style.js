import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors/Colors";
 

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        padding: 20
    },
    txtDrawer: {
        color: COLOR.drawerText,
        fontSize: 15,
        fontFamily: "OpenSans_Condensed-Medium"
    }
})