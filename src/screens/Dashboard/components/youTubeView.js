import React from "react";
import { StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

const YouTubeView = () => (
    <>
        <YouTube
            videoId="KVZ-P-ZI6W4" // The YouTube video ID
            play // control playback of video with true/false
            loop // control whether the video should loop when ended
            style={styles.youTubeView}
        />
    </>
);
const styles = StyleSheet.create({
    youTubeView: {
        alignSelf: "stretch", height: 300
    }
});
export default YouTubeView;
