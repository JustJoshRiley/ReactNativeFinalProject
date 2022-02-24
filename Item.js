import React from "react";
import { StyleSheet, View, Text} from 'react-native'

function Item(props) {
    const {people, survived} = props
    const { name } = people
    
    let lived = ''
    
    if (survived === "Yes") {
        lived = '❤️'
    }
    else if (survived == "No") {
        lived = '💀'
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{name} {lived}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        color: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

    propContainer: {
        width: '100%',
        display:"flex",
        justifyContent: "center",
        alignItems:"center"
    },

});
export default Item;