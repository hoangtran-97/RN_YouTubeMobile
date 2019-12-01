import React from "react";
import { StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

const YouTubeView = () => (
    <>
        <YouTube
            videoId="KVZ-P-ZI6W4" // The YouTube video ID
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
