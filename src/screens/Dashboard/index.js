import React from "react";
import {
    StyleSheet
} from "react-native";
import YouTubeView from "./components/youTubeView";
import ChannelSelector from "./components/channelSelector";

const DashboardScreen = ({ data }) => (
    <>
        <YouTubeView />
        <ChannelSelector data={data} />
    </>
);
const styles = StyleSheet.create({
});
export default DashboardScreen;
