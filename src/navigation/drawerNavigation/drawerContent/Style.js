import { StyleSheet } from "react-native";
import { COLOR } from "../../../assets/colors/Colors";

export const styles = StyleSheet.create({
    мiewDrawerTop: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.drewerBackGround,
        paddingHorizontal: 20
    },
    touchDrawerCourses: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%"
    },
    touchDrawerMenu: {
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        columnGap: 10
    },
    txtDrawer: {
        color: COLOR.drawerText,
        fontSize: 15,
        fontFamily: "OpenSans_Condensed-Medium"
    },
    
})