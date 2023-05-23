import React, { useState, useEffect, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard  } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

import { useRoute, RouteProp } from '@react-navigation/native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Response } from '../../components/Response';

import { AuthContext } from '../../context/AuthContext';

import api_openai from '../../services/api_openai';
import { OPENAI_API_KEY } from '../../../environmentVariables';


export default function Conversation(){

    const route = useRoute();
    const { signOut, user } = useContext(AuthContext);

    const [chatUser, setChatUser] = useState('');
    const[renderConversation, setRenderConversation] = useState('');
    const [responseGPT, setResponseGPT] = useState('');
    //const [controllerResponse, setControllerResponse] = useState('');

    const [nameUser, setNameUser] = useState(`${user.name.charAt(0).toUpperCase()}${user.sobrenome.charAt(0).toUpperCase()}`);

    async function generateText() {
        setResponseGPT('');

        setRenderConversation(chatUser);
        const prompt = `Hello, I would like to practice English conversation with you. Let's hypothetically assume your name is Lingobotix, my study companion for American English. We're going to engage in a fluent conversation where you'll adapt to my level, regardless of whether I'm a beginner, basic, intermediate, or advanced learner. Please respond appropriately according to my level of knowledge. Let's begin! Your responses should be concise and fluid, and you can vary your answers, but they should stay within my level. Your responses will be in American English, and if I make a mistake in a sentence or word, please correct me by asking if I meant something else and provide the correct phrase or word. Here I go: ${chatUser}`;
        
        // const prompt = chatUser;
        const model = 'text-davinci-002';
        const maxTokens = 2048;

        const REACT_APP_OPENAI_API_KEY = OPENAI_API_KEY;

        await api_openai.post('/completions', {
            prompt: prompt,
            model: model,
            max_tokens: maxTokens
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${REACT_APP_OPENAI_API_KEY}`
            }
        })
        .then(response => {
            //console.log(response.data.choices[0].text);
            setResponseGPT(response.data.choices[0].text);
            setChatUser('');

            let controllerResponse = response.data.choices[0].text;

            if(controllerResponse.length < 200){
                speakResponseGPTEnglish(response.data.choices[0].text)
            }else{

            }

        })
        .catch(error => {
            console.error(error);
        })
        
    }

    function speakResponseGPTEnglish(response: string){
        Speech.speak(response, {
            language: 'en'
        });
    }

    function speakResponseGPTPortuguese(response: string){
        Speech.speak(response, {
            language: 'pt-BR'
        });
    }

    return(
        <View style={styles.container} >
            <Header />

            {/* <View style={styles.TitlesContainer}>
                <Text style={styles.titleLevel}>{route.params.title}</Text>

                <Text style={styles.titleExercises}>{route.params.button}</Text>
            </View> */}

            <View style={styles.conversationContainer}>
                {
                    !chatUser && !responseGPT &&
                        <View style={styles.startConversation}>
                            <Image source={require('../../images/imgResponse.png')} style={styles.imgRespnse} resizeMode='contain'/>
                            <Text style={styles.textStarConversation}>
                                Hello, good to see you here! Start a conversation!
                            </Text>
                        </View>
                }

                <View style={styles.startConversation}>
                    {
                        renderConversation && <Response responseGPT={''} chatUser={renderConversation} nameUser={nameUser}/>
                    }
                </View>

                <View style={styles.startConversation}>
                    {
                        responseGPT && <Response responseGPT={responseGPT} chatUser={''} nameUser={''}/>
                    }
                </View>
                
            </View>

            <View style={styles.chatContainer}>
                <TextInput 
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textAreaChat}
                    placeholder='Inicie a conversa...'
                    textAlignVertical="top"
                    placeholderTextColor={'#FFF'}
                    value={chatUser}
                    onChangeText={setChatUser}
                />

                {
                    chatUser ?
                        <TouchableOpacity style={styles.buttonChat} 
                            onPress={() => { generateText(); Keyboard.dismiss();}}
                        >
                            <Feather name="send" size={40} color="black" />
                        </TouchableOpacity>
                    : 
                        <TouchableOpacity style={styles.buttonChat} 
                            onPress={() => { generateText(); Keyboard.dismiss();}}
                        >
                            <FontAwesome name="microphone" size={44} color="black"/>
                        </TouchableOpacity>
                }
                                
            </View>

            <Footer onPress={signOut}/>
        </View>
    );
}