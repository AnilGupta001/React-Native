// import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    TouchableOpacity,
    Linking
} from 'react-native';

function AppPro(): JSX.Element {
    const isDark = useColorScheme() === 'light';
const handle=()=>{
    Linking.openURL('https://www.google.com/');
}
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handle}>
                <Text style={isDark ? styles.darkText : styles.whiteText}>
                    Hello World!
                </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
});

export default AppPro;
