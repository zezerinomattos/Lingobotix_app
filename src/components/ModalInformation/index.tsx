import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

// MY IMPORTS
import styles from './styles';

interface ModalInfoProps {
    hendleLevelInformation: string[];
    handleCloseModal: () => void;
}

export function ModalInformation({ handleCloseModal, hendleLevelInformation }: ModalInfoProps){

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

    const information = `
    O Lingobotix é um aplicativo projetado especialmente para ajudar estudantes de inglês e pessoas interessadas em praticar conversação no idioma. Nossa intenção é proporcionar a você uma experiência única, permitindo que você pratique suas habilidades de conversação em inglês de forma interativa.
    
    No Lingobotix, você terá a oportunidade de conversar com o nosso incrível assistente virtual, que foi cuidadosamente programado e treinado em inglês. Ele se chama Lingobotix, e a ideia principal do aplicativo é que ele se torne seu companheiro de estudo.
    `;

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={[styles.content, {width: WIDTH - 20, height: HEIGHT / 1.6}]}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titleText}>Bem-vindo ao Lingobotix!</Text>
                </View>

                <Text style={styles.contText}>{information}</Text>
            </View>
        </TouchableOpacity>
    );
}