import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const VideoList = () => (
    <View>
        <Text style={styles.text}>filename</Text>
    </View>
);
const styles = StyleSheet.create({
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700"
    }
});
export default VideoList;
