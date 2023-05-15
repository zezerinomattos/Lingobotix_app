import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';

// MY IMPORTS
import styles from './styles';

import { AuthContext } from '../../context/AuthContext';


export default function UserRegister(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [nameUser, setNameUser] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    // CHAMANDO O CONTEXT - CALLING THE CONTEXT
    const { registerUser, loading, signInError } = useContext(AuthContext);

    async function hendleRegister(){
        if(name === '' || age === '' || email === '' || password === ''){
            setMessage('Ops, preencha os campos!');
            return;
        }

        await registerUser({ name, age ,email, password });

    }


    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Cadastro
            </Text>
            <View style={styles.inputContainer}>

                <TextInput style={styles.input} placeholder='Informe seu nome' placeholderTextColor={'#023E73'} value={name} onChangeText={setName}/>

                <TextInput style={styles.input} placeholder='Informe sua idade ex: 20' placeholderTextColor={'#023E73'} value={age} onChangeText={setAge}/>

                <TextInput style={styles.input} placeholder='Informe seu e-mail' placeholderTextColor={'#023E73'} value={email} onChangeText={setEmail}/>

                <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' placeholderTextColor={'#023E73'} value={password} onChangeText={setPassword}/>

                {message && <Text style={styles.message}>{message}</Text>}
                {signInError && <Text style={styles.message}>{signInError}</Text>}

                <TouchableOpacity style={styles.button} onPress={hendleRegister}>
                    {
                        loading ?
                            <ActivityIndicator size={25} color={'#FFF'}/>
                        :
                            <Text style={styles.textButton}>Entrar</Text>
                    }                  
                </TouchableOpacity>

            </View>
            {message === '' && signInError === '' &&
                <Image source={require('../../images/LingoP.png')} resizeMode='contain' style={styles.logo}/> 
            }
        </View>
    );
}