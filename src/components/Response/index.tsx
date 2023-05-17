import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';

type ResponseProps = {
    responseGPT: string;
    chatUser: string;
    nameUser: string;  
}

export function Response({ responseGPT, chatUser, nameUser }: ResponseProps){
    return(
        <View style={styles.container}>

            {
                responseGPT ? <Image source={require('../../images/imgResponse.png')} style={styles.imgRespnse} resizeMode='contain'/>
                :
                <View style={styles.nemeUserContainer}>
                    <Text style={styles.textNameUser}>{nameUser}</Text>
                </View>
            }           

            {
                chatUser && <Text style={styles.textResponse}>{chatUser}</Text>
            }
            {
                responseGPT && <Text style={styles.textResponse}>{responseGPT}</Text>
            }
            
        </View>
    );
}