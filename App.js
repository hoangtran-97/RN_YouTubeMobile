import React, { useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import Dashboard from "./src/containers/Dashboard/index";
import colors from "./src/constants/colors";

const App = () => {
    console.disableYellowBox = true;
    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <Dashboard />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.main,
        flex: 1,
    }
});

export default App;
