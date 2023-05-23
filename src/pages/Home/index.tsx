import React, {useState, useContext, useEffect} from 'react';
import { View, Text, FlatList, Modal, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamsList } from '../../routes/app.routes';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ListLevel } from '../../components/ListLevel';
import { ModalInformation } from '../../components/ModalInformation';

import { AuthContext } from '../../context/AuthContext';

import firebase from '../../services/firebase';


export default function Home(){

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    
    const [modalInformationVisible, setModalInformationVisible] = useState(false);
    const[levelInformation, setLevelInformation] = useState<string[]>(['']);

    const { signOut, user } = useContext(AuthContext);


    // FUNÇÃO DE ONPRESS DO BOTÃO DE INFORMAÇÃO DO NIVEL
    function handleInformationButton(){
        navigation.navigate('Conversation');
    }

    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <Text style={styles.textWelcome}>WELCOME</Text>
                    
                <Text style={styles.textPresentation}>
                    I am Lingobotix, your study companion.
                </Text>

                <Image source={require('../../images/imgResponse.png')} style={styles.logoLingo} resizeMode="contain"/>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleInformationButton}>
                        <Text style={styles.buttonText}>Let's chat!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalInformationVisible(true)}>
                        <Image source={require('../../images/book.png')} style={styles.buttonModal} resizeMode="contain"  />
                    </TouchableOpacity>
                </View>
            
            </View>
            
            {/* <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.listLevel}
                data={level}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListLevel data={item} onPress={handleInformationButton} />}
                contentContainerStyle={styles.listContent}
            /> */}

            <Modal transparent={true} visible={modalInformationVisible} animationType='fade'>
                <ModalInformation 
                    handleCloseModal = {() => setModalInformationVisible(false)}
                    hendleLevelInformation = {levelInformation}
                />
            </Modal>

            <Footer onPress={signOut}/>
        </View>
    );
}
