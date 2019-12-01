import React from "react";
import { StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

const YouTubeView = ({ playing }) => (
    <>
        <YouTube
            videoIds={playing}
            play
            loop
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
