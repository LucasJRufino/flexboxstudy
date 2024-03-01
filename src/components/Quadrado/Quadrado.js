import React from "react";
import { StyleSheet, View } from "react-native";

const Quadradopequeno = ( props ) => {
    const { cor } = props;
    const { str } = props;
    var w = str == 1? undefined : styles.pequeno.width;

    return(
        <View style={{...styles.pequeno,
            backgroundColor: cor,
            width: w
        }}>
            
        </View>
    )
}

const Quadradomedio = ( props ) => {
    const { cor } = props;
    const { str } = props;

    var w = str == 1? undefined : styles.pequeno.width;

    return(
        <View style={{
            ...styles.pequeno,
            width: w,
            backgroundColor: cor
        }}>
            
        </View>
    )
}

const Quadradogrande = ( props ) => {
    const { cor } = props;
    const { str } = props;
    var w = str == 1? undefined : styles.pequeno.width;

    return(
        <View style={{
            ...styles.pequeno,
            width: w,
            backgroundColor: cor }}>
            
        </View>
    )
}

const Quadrado = () => {
    return(
        <View style={styles.container}>
            <Quadradopequeno
            cor='green'
            str='0'
            />

            <Quadradomedio
            cor='red'
            str='0'
            />

            <Quadradogrande
            cor='blue'
            str = '1'
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
},

pequeno: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
}
})

export default Quadrado;
