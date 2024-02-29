import React from "react";
import { View } from "react-native";

const Quadradopequeno = () => {
    return(
        <View style={{
            width: 50,
            height: 50,
            backgroundColor: 'blue'
        }}>
            
        </View>
    )
}

const Quadradomedio = () => {
    return(
        <View style={{
            width: 100,
            height: 100,
            backgroundColor: 'yellow'
        }}>
            
        </View>
    )
}

const Quadradogrande = () => {
    return(
        <View style={{
            width: 150,
            height: 150,
            backgroundColor: 'red' }}>
            
        </View>
    )
}

const Quadrado = () => {
    return(
        <View>
            <Quadradogrande/>
            <Quadradomedio/>
            <Quadradopequeno/>
        </View>
    )
}

export default Quadrado;
