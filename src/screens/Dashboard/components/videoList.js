import React from "react";
import {
    View, Text, StyleSheet, FlatList, SafeAreaView
} from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import colors from "../../../constants/colors";

const VideoList = ({ channel }) => {
    const { playlist } = channel;
    return (
        <View>
            <Text style={styles.text}>filename</Text>
            <FlatList
                data={playlist}
                renderItem={({ item }) => (
                    <Thumbnail
                        url={`https://www.youtube.com/watch?v=${item}`}
                        showPlayIcon={false}
                        imageWidth={100}
                        imageHeight={100}
                    />
                )}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700"
    }
});
export default VideoList;
