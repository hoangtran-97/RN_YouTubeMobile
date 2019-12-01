import React, { useState } from "react";
import {
    StyleSheet, View
} from "react-native";
import YouTubeView from "./components/youTubeView";
import ChannelSelector from "./components/channelSelector";
import VideoList from "./components/videoList";

const DashboardScreen = ({ data }) => {
    const [channel, setChannel] = useState({
        id: 1,
        name: "Meme Radar",
        icon: "https://neverthink.tv/assets/images/63e3939725b3d92af5e7b8429a0f4d57e6be661abf380b39348f360e528dd6e2.png",
        playlist: ["QSqIG5Dl-SM", "Km8kIX-8hVs", "c9EOCt9kkUo", "85RhW75xM8U", "URLyBDYHoGo", "jM0GePXOdT0", "exLTGu_c5fs", "-goTfMUabxc", "y7pZzp99Jgs"]
    });
    return (
        <>
            <YouTubeView />
            <View style={styles.container}>
                <ChannelSelector data={data} channel={channel} setChannel={setChannel} />
                <VideoList channel={channel} />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
});
export default DashboardScreen;
