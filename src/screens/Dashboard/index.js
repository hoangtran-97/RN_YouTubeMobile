import React, { useState } from "react";
import {
    StyleSheet, View
} from "react-native";
import YouTube from "react-native-youtube";
import ChannelSelector from "./components/channelSelector";
import VideoList from "./components/videoList";

const DashboardScreen = ({ data }) => {
    const youTubeRef = React.createRef();
    const [channel, setChannel] = useState(data[0]);
    const [playing, setPlaying] = useState(channel.playlist);
    const [currentIndex, setCurrentIndex] = useState();
    const [watched, setWatched] = useState([]);
    playVideoAtIndex = (index) => {
        youTubeRef.current.playVideoAt(index);
    };
    addToWatched = (index) => {
        const videoId = playing[index];
        const newWatched = watched;
        newWatched.indexOf(videoId) === -1 ? newWatched.push(videoId) : null;
        setWatched([...newWatched]);
    };
    return (
        <>
            <YouTube
                ref={youTubeRef}
                videoIds={playing}
                play
                loop
                style={styles.youTubeView}
                onChangeState={(e) => {
                    e.state === "playing" ? (
                        youTubeRef.current.getVideosIndex().then((videosIndex) => {
                            addToWatched(videosIndex);
                        })
                    ) : console.log(watched);
                }}
            />
            <View style={styles.container}>
                <ChannelSelector
                    data={data}
                    channel={channel}
                    setChannel={setChannel}
                    setPlaying={setPlaying}
                />
                <VideoList
                    channel={channel}
                    watched={watched}
                    setCurrentIndex={setCurrentIndex}
                    playVideoAtIndex={playVideoAtIndex}
                />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    youTubeView: {
        alignSelf: "stretch", height: 300
    }
});
export default DashboardScreen;
