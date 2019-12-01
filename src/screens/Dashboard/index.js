import React from "react";
import {
    StyleSheet, View
} from "react-native";
import YouTubeView from "./components/youTubeView";
import ChannelSelector from "./components/channelSelector";

const DashboardScreen = ({ data }) => (
    <>
        <YouTubeView />
        <View style={styles.container}>
            <ChannelSelector data={data} />
        </View>
    </>
);
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
});
export default DashboardScreen;
