import React, { useState } from "react";
import {
    Text, StyleSheet, Image, FlatList, View, TouchableOpacity
} from "react-native";
import { animated, useSpring } from "react-spring";
import BezierEasing from "bezier-easing";
import Icon from "react-native-vector-icons/FontAwesome5";

const AnimatedView = animated(View);

const ChannelSelector = ({ data }) => {
    const animation = useSpring({
        backgroundColor: "green",
        height: collapse ? 0 : 200,
    });
    const [collapse, setCollapse] = useState(false);
    return (
        <>
            <TouchableOpacity
                style={styles.buttonChannel}
                onPress={() => {
                    setCollapse(!collapse);
                    console.log(collapse);
                }}
            >
                <Text>ChannelName</Text>
                <Icon
                    name="plus"
                    backgroundColor="#3b5998"
                    size={20}
                />
            </TouchableOpacity>
            <AnimatedView style={animation}>
                <Text>Test</Text>
            </AnimatedView>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: item.icon }}
                        />
                        <Text>{item.name}</Text>
                    </>
                )}
                keyExtractor={(item) => item.id}
            />
        </>
    );
};
const styles = StyleSheet.create({
    buttonChannel: {
        alignItems: "center",
        backgroundColor: "red",
        flexDirection: "row",
        height: 70,
        justifyContent: "space-around"
    }
});
export default ChannelSelector;
