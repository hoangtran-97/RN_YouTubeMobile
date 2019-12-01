import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from "react-native";
import Dashboard from "./src/containers/Dashboard/index";
import colors from "./src/constants/colors";

const App = () => (
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
            <Dashboard />
        </SafeAreaView>
    </>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.main,
        flex: 1,
    }
});

export default App;
