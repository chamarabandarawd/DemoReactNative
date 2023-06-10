import { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default function AddPost() {

    useEffect(()=>{
        loadData();
    });
    
    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Load All Post</Text>
            </View>
            <View style={styles.content}>

            </View>
            <View style={styles.footer}>
                <Text>Copyright @ iCet 2023</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    header: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'red',
        fontSize: 30,
    },
    content: {
        flex: 10,
        borderWidth: 1,
        borderColor: 'black',


    },
    footer: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'

    },

});