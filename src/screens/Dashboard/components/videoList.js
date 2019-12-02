import React from "react";
import {
    Text, StyleSheet, FlatList, View
} from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../constants/colors";

const VideoList = ({
    channel, watched
}) => {
    const { playlist, name } = channel;
    return (
        <View style={styles.container}>
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
                        <Icon name="eye" size={30} color={watched.includes(item) ? colors.text : colors.main} />
                    </View>
                )}
                keyExtractor={(index) => index.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingBottom: 500,
    },
    itemContainer: {
        alignItems: "center",
        backgroundColor: colors.main,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        padding: 10
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 10
    }
});
export default VideoList;
