import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

// MY IMPORTS
import styles from './styles';


export default function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    async function hendleLogin(){
        alert(`email ${email} - password ${password}`);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Login
            </Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Informe seu e-mail' placeholderTextColor={'#023E73'} value={email} onChangeText={setEmail}/>

                <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' placeholderTextColor={'#023E73'} value={password} onChangeText={setPassword}/>

                {message && <Text style={styles.message}>{message}</Text>}

                <TouchableOpacity style={styles.button} onPress={hendleLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <Image source={require('../../images/LingoP.png')} resizeMode='contain' style={{width: 150}}/>
        </View>
    );
}