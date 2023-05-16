import React, { useState, useEffect, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { useRoute, RouteProp } from '@react-navigation/native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Response } from '../../components/Response';

import { AuthContext } from '../../context/AuthContext';

// TYPANDO O USEROUT
type RouteInfoChatParams = {
    Conversation: {
        id: string;
        infoStartChat: string;
        title: string;
        button: string;
    };
}

type InfoChatRouteProps = RouteProp<RouteInfoChatParams, 'Conversation'>;

export default function Conversation(){

    const route = useRoute<InfoChatRouteProps>();
    const { signOut } = useContext(AuthContext);

    const [chatUser, setChatUser] = useState('');

    return(
        <View style={styles.container} >
            <Header />

            <View style={styles.TitlesContainer}>
                <Text style={styles.titleLevel}>{route.params.title}</Text>

                <Text style={styles.titleExercises}>{route.params.button}</Text>
            </View>

            <View style={styles.conversationContainer}>
                {
                    !chatUser && 
                        <View style={styles.startConversation}>
                            <Image source={require('../../images/imgResponse.png')} style={styles.imgRespnse} resizeMode='contain'/>
                            <Text style={styles.textStarConversation}>
                                Hello, good to see you here! Start a conversation!
                            </Text>
                        </View>
                }
                
            </View>

            <View style={styles.chatContainer}>
                <TextInput 
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textAreaChat}
                    placeholder='Inicie a conversa...'
                    textAlignVertical="top"
                    placeholderTextColor={'#FFF'}
                    onChangeText={setChatUser}
                />

                {
                    chatUser ?
                        <TouchableOpacity style={styles.buttonChat} >
                            <Feather name="send" size={40} color="black" />
                        </TouchableOpacity>
                    : 
                        <TouchableOpacity style={styles.buttonChat} >
                            <FontAwesome name="microphone" size={44} color="black" />
                        </TouchableOpacity>
                }
                                
            </View>

            <Footer onPress={signOut}/>
        </View>
    );
}