import React from "react";
import {
    Text, StyleSheet, FlatList, View
} from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import colors from "../../../constants/colors";

const VideoList = ({ channel, setPlaying }) => {
    const { playlist, name } = channel;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                More from
                {" "}
                {name}
            </Text>
            <FlatList
                data={playlist}
                renderItem={({ item }) => (
                    <Thumbnail
                        url={`https://www.youtube.com/watch?v=${item}`}
                        showPlayIcon={false}
                        imageWidth={200}
                        imageHeight={150}
                        onPress={() => setPlaying([item])}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingBottom: 500,
        paddingHorizontal: 20
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 10
    }
});
export default VideoList;
