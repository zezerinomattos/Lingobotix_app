import React, {useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamsList } from '../../routes/auth.routes';

// MY IMPORTS
import styles from './styles';

import { AuthContext } from '../../context/AuthContext';


export default function SignIn(){
    // Usando as rotas - using the routes
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const [passwordRestart, setPasswordRestart] = useState(false);

    // CHAMANDO O CONTEXT - CALLING THE CONTEXT
    const { signIn, loading, signInError, messageSuccess, passwordRecover } = useContext(AuthContext);

    async function hendleLogin(){
       if(email === '' || password === ''){
        setMessage('Ops, preencha os campos!');
        return;
       }

       await signIn({email, password});
    }

    async function openRegister(){
        setMessage('');
        // ABRINDO TELA DE CADSTRO - OPENING REGISTRATION SCREEN
        navigation.navigate('UserRegister');
    }

    // RECUPERAR SENHA - RECOVER PASSWORD
    async function hendlePasswordRestart(){
        if(email === ''){
            setMessage('Informe seu endereço de email!');
            return;
        }

        await passwordRecover({email});

    }

    return(
        <View style={styles.container}>

            <Text style={styles.textTitle}>
                Login
            </Text>

            {
                passwordRestart ? (
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Informe seu e-mail' placeholderTextColor={'#023E73'} value={email} onChangeText={setEmail}/>

                            <TouchableOpacity style={styles.button} onPress={hendlePasswordRestart}>
                            {
                                loading ?
                                    <ActivityIndicator size={25} color={'#FFF'}/>
                                :
                                    <Text style={styles.textButton}>Enviar</Text>
                            }                  
                        </TouchableOpacity>

                        {messageSuccess && <Text style={styles.message}>{messageSuccess}</Text>}
                        {signInError && <Text style={styles.message}>{signInError}</Text>}

                        <TouchableOpacity style={styles.buttonPasswordReset} onPress={(() => setPasswordRestart(false))}>
                            <Text style={styles.textButtonRegister}>Fazer Login</Text>
                        </TouchableOpacity>

                    </View>
                )
                :
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder='Informe seu e-mail' placeholderTextColor={'#023E73'} value={email} onChangeText={setEmail}/>

                        <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' placeholderTextColor={'#023E73'} value={password} onChangeText={setPassword}/>

                        {message && <Text style={styles.message}>{message}</Text>}
                        {signInError && <Text style={styles.message}>{signInError}</Text>}

                        <TouchableOpacity style={styles.button} onPress={hendleLogin}>
                            {
                                loading ?
                                    <ActivityIndicator size={25} color={'#FFF'}/>
                                :
                                    <Text style={styles.textButton}>Entrar</Text>
                            }                  
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.buttonRegister} onPress={openRegister}>
                            <Text style={styles.textButtonRegister}>NÃO TENHO CONTA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonPasswordReset} onPress={(() => setPasswordRestart(true))}>
                            <Text style={styles.textButtonRegister}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                    </View>
            }
            {message === '' && signInError === '' &&
                <Image source={require('../../images/LingoP.png')} resizeMode='contain' style={styles.logo}/> 
            }
        </View>
    );
}