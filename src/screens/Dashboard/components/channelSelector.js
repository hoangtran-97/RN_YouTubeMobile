import React, { useState } from "react";
import {
    View, Text, StyleSheet, TouchableOpacity, FlatList, Image
} from "react-native";
import { useSpring, animated } from "react-spring";
import BezierEasing from "bezier-easing";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../constants/colors";

const AnimatedView = animated(View);
const ChannelSelector = ({ data }) => {
    const [collapse, setCollapse] = useState(true);
    const [channel, setChannel] = useState({
        id: 1,
        name: "Meme Radar",
        icon: "https://neverthink.tv/assets/images/63e3939725b3d92af5e7b8429a0f4d57e6be661abf380b39348f360e528dd6e2.png",
        playlist: ["QSqIG5Dl-SM", "Km8kIX-8hVs", "c9EOCt9kkUo", "85RhW75xM8U", "URLyBDYHoGo", "jM0GePXOdT0", "exLTGu_c5fs", "-goTfMUabxc", "y7pZzp99Jgs"]
    });
    const animation = useSpring({
        height: !collapse ? 0 : 300,
        config: {
            duration: collapse ? 300 : 250,
            easing: BezierEasing(0.4, 0, 0.2, 1)
        }
    });
    return (
        <>
            <TouchableOpacity
                style={styles.buttonChannelSelector}
                onPress={() => setCollapse(!collapse)}
            >
                <Image
                    style={styles.image}
                    source={{ uri: channel.icon }}
                />
                <Text style={styles.text}>{channel.name}</Text>
                <Icon
                    name="caret-down"
                    color={colors.text}
                    size={25}
                />
            </TouchableOpacity>
            <AnimatedView style={animation}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.buttonChannelItem}
                            onPress={() => {
                                setChannel(item);
                                setCollapse(!collapse);
                            }}
                        >
                            <Image
                                style={styles.image}
                                source={{ uri: item.icon }}
                            />
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </AnimatedView>
        </>
    );
};
const styles = StyleSheet.create({
    buttonChannelItem: {
        alignItems: "center",
        backgroundColor: colors.sub,
        borderRadius: 5,
        flexDirection: "row",
        height: 70,
        justifyContent: "space-between",
        marginTop: 5,
        paddingHorizontal: 10
    },
    buttonChannelSelector: {
        alignItems: "center",
        backgroundColor: colors.sub,
        borderRadius: 5,
        flexDirection: "row",
        height: 70,
        justifyContent: "space-around",
        marginTop: 5
    },
    image: {
        height: 40, width: 40
    },
    text: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "700"
    }
});
export default ChannelSelector;
