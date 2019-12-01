import React from "react";
import {
    Text, StyleSheet, Image, FlatList
} from "react-native";

const ChannelSelector = ({ data }) => (
    <>
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
const styles = StyleSheet.create({
});
export default ChannelSelector;
