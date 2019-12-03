import React from "react";
import {
    Text, StyleSheet, FlatList, View
} from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../constants/colors";

const VideoList = ({
    channel, watched, isPortrait, playVideoAtIndex
}) => {
    const { playlist, name } = channel;
    return (
        <View style={isPortrait ? styles.containerPortrait : styles.containerLandscape}>
            <Text style={styles.text}>
                More from
                {" "}
                {name}
            </Text>
            <FlatList
                extraData={watched}
                data={playlist}
                renderItem={({ item, index }) => (

                    <View style={styles.itemContainer}>
                        <Thumbnail
                            url={`https://www.youtube.com/watch?v=${item}`}
                            showPlayIcon={false}
                            imageWidth={200}
                            imageHeight={150}
                            onPress={() => {
                                playVideoAtIndex(index);
                            }}
                        />
                        <Icon name="eye" size={isPortrait ? 30 : 20} color={watched.includes(item) ? colors.text : colors.main} />
                    </View>
                )}
                keyExtractor={(index) => index.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    containerLandscape: {
        paddingBottom: 200,
    },
    containerPortrait: {
        paddingBottom: 300,
    },
    itemContainer: {
        alignItems: "center",
        backgroundColor: colors.main,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        padding: 5
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 10
    }
});
export default VideoList;
