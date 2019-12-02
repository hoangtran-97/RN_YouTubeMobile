import React from "react";
import {
    Text, StyleSheet, FlatList, View
} from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../constants/colors";

const VideoList = ({
    channel, watched, setCurrentIndex
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
                                setCurrentIndex(index);
                                playVideoAtIndex(index);
                            }}
                        />
                        <Icon name="eye" size={20} color={watched.includes(item) ? colors.text : colors.main} />
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
        paddingHorizontal: 20
    },
    itemContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 10
    }
});
export default VideoList;
