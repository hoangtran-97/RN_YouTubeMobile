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
    const [watched, setWatched] = useState([]);
    const [userDidPause, setUserDidPause] = useState(false);

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
            <View style={styles.container}>
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
