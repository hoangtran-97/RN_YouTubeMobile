import React, { useState } from "react";
import {
    StyleSheet, View, Dimensions
} from "react-native";
import YouTube from "react-native-youtube";
import ChannelSelector from "./components/channelSelector";
import VideoList from "./components/videoList";

const DashboardScreen = ({ data }) => {
    const youTubeRef = React.createRef();
    const [channel, setChannel] = useState(data[0]);
    const [playing, setPlaying] = useState(channel.playlist);
    const [watched, setWatched] = useState([]);
    const [userDidPause, setUserDidPause] = useState(false);
    const [isPortrait, setIsPortrait] = useState(true);
    const { width, height } = Dimensions.get("window");
    playVideoAtIndex = (index) => {
        youTubeRef.current.playVideoAt(index);
    };
    addToWatched = (index) => {
        const videoId = playing[index];
        const newWatched = watched;
        newWatched.indexOf(videoId) === -1 ? newWatched.push(videoId) : null;
        setWatched([...newWatched]);
    };
    onLayout = (e) => {
        const { width, height } = Dimensions.get("window");
        width > height ? setIsPortrait(false) : setIsPortrait(true);
    };
    const styles = StyleSheet.create({
        containerChannelVideo: {
            paddingHorizontal: 10
        },
        containerLandscape: {
            alignItems: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        },
        containerPortrait: {
            flexDirection: "column"
        },
        youtubeLandscape: {
            flex: 1,
            height
        },
        youtubePortrait: {
            alignSelf: "stretch", height: 300
        }
    });
    return (
        <View onLayout={onLayout} style={isPortrait ? styles.containerPortrait : styles.containerLandscape}>
            <YouTube
                ref={youTubeRef}
                videoIds={playing}
                play
                loop
                style={isPortrait ? styles.youtubePortrait : styles.youtubeLandscape}
                onChangeState={(e) => {
                    e.state === "paused" ? setUserDidPause(true) : (
                        e.state === "playing" ? (
                            setUserDidPause(false),
                            youTubeRef.current.getVideosIndex().then((videosIndex) => {
                                watched.indexOf(playing[videosIndex]) === -1
                                    ? addToWatched(videosIndex)
                                    : youTubeRef.current.nextVideo();
                            }).catch((error) => {
                                console.log(error);
                            })
                        ) : null
                    );
                }}
            />
            <View style={styles.containerChannelVideo}>
                <ChannelSelector
                    data={data}
                    channel={channel}
                    setChannel={setChannel}
                    setPlaying={setPlaying}
                    setWatched={setWatched}
                />
                <VideoList
                    channel={channel}
                    watched={watched}
                    playVideoAtIndex={playVideoAtIndex}
                    isPortrait={isPortrait}
                />
            </View>
        </View>
    );
};

export default DashboardScreen;
