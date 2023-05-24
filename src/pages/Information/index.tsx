import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';

export default function Information(){

    const textDescription = `
        O Lingobotix é um aplicativo projetado especialmente para ajudar estudantes de inglês e pessoas interessadas em praticar conversação no idioma. Nossa intenção é proporcionar a você uma experiência única, permitindo que você pratique suas habilidades de conversação em inglês de forma interativa.

        No Lingobotix, você terá a oportunidade de conversar com o nosso incrível assistente virtual, que foi cuidadosamente programado e treinado em inglês. Ele se chama Lingobotix, e a ideia principal do aplicativo é que ele se torne seu companheiro de estudo.

        Imagine ter alguém sempre disponível para praticar conversação em inglês, mesmo quando não há pessoas ao seu redor. O Lingobotix está aqui para preencher essa lacuna e ajudá-lo a aprimorar suas habilidades de comunicação no idioma.

        Uma das vantagens do Lingobotix é que ele é adequado para estudantes de todos os níveis. Não importa se você é iniciante, intermediário ou avançado, o Lingobotix está preparado para adaptar suas respostas e garantir que a conversa seja fluida e relevante para o seu nível de proficiência.

        Não se preocupe em encontrar tópicos para conversar. O Lingobotix aborda uma ampla variedade de assuntos, desde temas cotidianos até tópicos mais complexos, como ciência, cultura, esportes e muito mais. Sinta-se à vontade para explorar diferentes áreas de interesse enquanto pratica seu inglês.

        Além disso, estamos sempre trabalhando para aprimorar o Lingobotix e adicionar novos recursos. Queremos tornar sua experiência o mais enriquecedora possível, por isso valorizamos muito o seu feedback e sugestões. Fique à vontade para compartilhar suas opiniões conosco.

        Então, se você está buscando uma maneira conveniente e eficaz de praticar conversação em inglês, o Lingobotix é a escolha certa. Baixe agora mesmo e comece a desfrutar de uma experiência de aprendizado interativa, onde você pode conversar com o Lingobotix como se estivesse falando com uma pessoa de verdade.

        Aproveite o Lingobotix como seu parceiro de estudo e leve suas habilidades de conversação em inglês a um novo patamar!
    `

    return(
        <View style={styles.container}>
            <Image source={require('../../images/imgResponse.png')} resizeMode='contain' style={styles.imgLingo} />

            <Text style={styles.textTitle}>Bem-vindo ao Lingobotix!</Text>

            <ScrollView style={styles.informationContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.textDescription}>{textDescription}</Text>
            </ScrollView>
            
        </View>
    );
}