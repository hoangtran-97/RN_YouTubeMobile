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
    const [isPortrait, setIsPortrait] = useState(true);
    const { height } = Dimensions.get("window");
    playVideoAtIndex = (index) => {
        const rewatchId = watched.indexOf(playing[index]);
        rewatchId > -1 ? watched.splice(rewatchId, 1) : null;
        youTubeRef.current.playVideoAt(index);
    };
    addToWatched = (index) => {
        const videoId = playing[index];
        const newWatched = watched;
        newWatched.indexOf(videoId) === -1 ? newWatched.push(videoId) : null;
        setWatched([...newWatched]);
    };
    onLayout = () => {
        const { width, height } = Dimensions.get("window");
        width > height ? setIsPortrait(false) : setIsPortrait(true);
    };
    const styles = StyleSheet.create({
        containerChannelVideo: {
            flex: 1,
            paddingHorizontal: 10
        },
        containerLandscape: {
            alignItems: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        },
        containerPortrait: {
            flexDirection: "column",
            flex: 1
        },
        youtubeLandscape: {
            flex: 2,
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
                    switch (e.state) {
                    case "buffering":
                        youTubeRef.current.getVideosIndex().then((videosIndex) => {
                            watched.indexOf(playing[videosIndex]) === -1
                                ? addToWatched(videosIndex)
                                : youTubeRef.current.nextVideo();
                        }).catch((error) => {
                            console.log(error);
                        });
                        break;
                    default:
                        null;
                    }
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
