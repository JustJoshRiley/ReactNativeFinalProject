import React, { useState } from 'react';

import { KeyboardAvoidingView, Platform, StyleSheet, View, FlatList, SafeAreaView, TextInput, Text, Button } from 'react-native';

import Item from './Item';
import { people } from './titanic_data';





function HomeScreen({navigation}) {
    const [search, setSearch] = useState('')
    return (
        <>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.kav}
            > 
            <View style={styles.listContainer}>
            <FlatList
                data={people.filter(item => item.sex.includes(search))}
                renderItem={({ item }) => {
                return (
                    <View style={styles.itemContainer}>
                        <Item people={item} survived={item.survived} />
                        <Button
                            style={styles.itemButton}
                            title='Details'
                            onPress={() => navigation.navigate('Details', {
                                item: { item }
                            })}
                        />
                    </View>
                )
                }}
                keyExtractor={item => item.name}
        />
            </View>
            <TextInput
                style={styles.search}
                placeholder='Search Survived'
                onChangeText={setSearch}
                value={search}
            />
        </KeyboardAvoidingView>
    </SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    itemContainer : {
        marginTop: 10,
        backgroundColor:"black"
    },
});



export default HomeScreen;