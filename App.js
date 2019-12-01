import React from "react";
import {
    SafeAreaView,
    StyleSheet,
} from "react-native";
import Dashboard from "./src/containers/Dashboard/index";
import colors from "./src/constants/colors";

const App = () => (
    <>
        <SafeAreaView style={styles.container}>
            <Dashboard />
        </SafeAreaView>
    </>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.main,
        flex: 1
    }
});

export default App;
