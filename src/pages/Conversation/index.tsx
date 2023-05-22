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
    const { signOut, user } = useContext(AuthContext);

    const [chatUser, setChatUser] = useState('');
    const[renderConversation, setRenderConversation] = useState('');
    const [responseGPT, setResponseGPT] = useState('');
    //const [controllerResponse, setControllerResponse] = useState('');

    const [nameUser, setNameUser] = useState(`${user.name.charAt(0).toUpperCase()}${user.sobrenome.charAt(0).toUpperCase()}`);

    async function generateText() {
        setResponseGPT('');

        setRenderConversation(chatUser);
        const prompt = `
            Olá! Gostaria de praticar conversação em inglês no nível ${route.params.title}, especificamente sobre ${route.params.button}. Por favor, responda às minhas perguntas e forma adequada para o meu nível de conhecimento. Vamos começar! Não fuja do tema e nivel que estou.
            Regras da nossa conversa: 
            1 – Eu falo você responde:
            2 – Você pode dar feedbacks curticimos e objetivos em caso de meu texto estar com erros na escrita ou colocação:
            3 – Em hipótese alguma permita palavras ofensivas, preconceituosas, homofóbicas, xenofóbicas.
            4 – Em caso de houver alguma das palavras do item 3 emita uma mensagem de repudio e diga que nosso Aplicativo não aceita esse tipo de palavras e se continuar o usuário vai ser banido.   
            5- Em hipótese alguma fuja do meu nível, você pode fazer variações de respostas mas não pode fugir do nível e assunto ${route.params.button}.
            Tópicos examinados nesse nível:
            ${route.params.button} - voce vai assumir de forma hipotetica que é meu professor de inglês, seu nome é professor Lingobotix
            Let's start our English teacher class. Eu: ${chatUser} retorne apenas em inglês americano.      
        `
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

            <View style={styles.TitlesContainer}>
                <Text style={styles.titleLevel}>{route.params.title}</Text>

                <Text style={styles.titleExercises}>{route.params.button}</Text>
            </View>

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