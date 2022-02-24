import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function Details({ route }) {
    const person = route.params.item.item;
    const keys = Object.keys(person)

    let lived = ''

    if (person.survived === "Yes") {
        lived = '❤️'
    } else {
        lived = '💀'
    }

    return (
        <>
            <Text>{person.name} : {lived}</Text>
            <View>
                {keys.filter(key => key != 'name').map((key, index) => { 
                    return (
                        <Text>{key} : {person[key]}</Text>
                    )
                    })}
            </View>
        </>
    );
}

export default Details;