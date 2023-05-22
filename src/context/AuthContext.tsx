import React, {useState, createContext, ReactNode, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamsList } from '../routes/auth.routes';

import firebase from '../services/firebase';

type AuthContextDate = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise <void>;
    signInError: string;
    messageSuccess: string;
    registerUser: (credentials: UserRegisterProps) => Promise <void>;
    passwordRecover: (credentials: PasswordRecoverProps) => Promise <void>;
}

type UserProps = {
    id: string;
    email: string;
    token: string;
    name: string;
    age: string;
    sobrenome: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps ={
    email: string;
    password: string;
}

type UserRegisterProps = {
    name: string; 
    age: string;
    email: string 
    password: string;
    sobrenome: string;
}

type PasswordRecoverProps ={
    email: string;
}

export const AuthContext = createContext({} as AuthContextDate);

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        email: '',
        token: '',
        name: '',
        sobrenome: '',
        age: '',
    });

    const [loading, setLoading] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(true)
    const [signInError, setSignInError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');

    const isAuthenticated = !!user.email;

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    useEffect(() => {
        async function getUser(){
            //PEGAR DADOS SALVOS - GET SAVED DATA
            const userInfo = await AsyncStorage.getItem('@lingobotix');
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            //VEREFICANDO SE TEM USER - VERIFYING IF YOU HAVE A USER
            if(Object.keys(hasUser).length > 0){
                setUser({
                    id: hasUser.id,
                    email: hasUser.email,
                    token: hasUser.token,
                    name: hasUser.name,
                    sobrenome: hasUser.sobrenome,
                    age: hasUser.age,
                })
            }
            setLoadingAuth(false);
        }

        getUser();

    }, [])

    // FUNÇÃO DE LOGIN - LOGIN FUNCTION
    async function signIn({ email, password }: SignInProps){
        setLoading(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async(response) => {

                if (response.user !== null) {

                    const { uid: id, refreshToken: token } = response.user
                    let email = response.user.email ?? '';

                    // const data = {
                    //     ...response.user,
                    // }

                    // AsyncStorage.setItem('@lingobotix', JSON.stringify(data));

                    const userRef = firebase.database().ref('users').child(response.user.uid);
                        userRef.once('value', (snapshot) => {
                            const userData = snapshot.val();                   
                            
                            setUser({
                                id,
                                email,
                                token,
                                name: userData?.name || '',
                                sobrenome: userData?.sobrenome || '',
                                age: userData?.age || '',
                            })

                            const data = { id, token, email, ...userData } 
                            AsyncStorage.setItem('@lingobotix', JSON.stringify(data));
                        });

                }

                setLoading(false);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
                setLoading(false);
                setSignInError('Ops, Verefique seus dados ou reinicie o aplicativo, algo deu errado!');
            });

    }

    // FUNÇÃO DE LOGOUT - LOGOUT FUNCTION
    async function signOut(){
        await AsyncStorage.clear()
            .then(() => {
                setUser({
                    id: '',
                    email: '',
                    token: '',
                    name: '',
                    sobrenome: '',
                    age: '',
                });

            })
    }

    // FUNÇÃO DE CADASTRO DE USUÁRIO - USER REGISTRATION FUNCTION
    async function registerUser({name, sobrenome, age ,email, password }: UserRegisterProps){
        setLoading(true);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async(response) => {
                if (response.user !== null) {
                    firebase.database().ref('users').child(response.user.uid).set({
                        name: name,
                        sobrenome: sobrenome,
                        age: age,
                    })
                }

                setLoading(false);

                // Atualizar a autenticação do usuário
                const user = await firebase.auth().currentUser;

                if (user) {
                    const id = user.uid;
                    const token = await user.getIdToken();
                    const email = user.email || '';

                    // const { uid, email, refreshToken } = response.user;
                    const data = { id, email, token, name, sobrenome, age };

                    AsyncStorage.setItem('@lingobotix', JSON.stringify(data));
    
                    setUser({
                        id,
                        email,
                        token,
                        name,
                        sobrenome,
                        age,
                    });
                }

                // Carregar os dados do usuário do AsyncStorage
                loadUserFromStorage();
                
            })
            .catch((error) => {
                console.log(`Error: ${error.message}`);
                //setSignInError('Algo deu errado, verifique seus dados e tente novamente!');
                setLoading(false);

                switch (error.message) {
                    case 'Password should be at least 6 characters':
                        setSignInError('A senha de ter pelo menos 6 caracteres!');
                        break;
                    case 'The email address is already in use by another account.':
                        setSignInError('Este email já está sendo utilizado por outro usuário!');
                        break;
                    case 'The email address is badly formatted.':
                        setSignInError('O formato do seu email é invalido!');
                        break;
                 
                    default:
                        setSignInError('Não foi possivel cadastrar. tente novamente mais tarde!');
                        break;
                 }
            })
    }

    //FUNÇÃO PARA CARREGAR ASYNCSTORAGE QUANDO CADASTRADO O USUÁRIO    
    async function loadUserFromStorage() {
        try {
          const data = await AsyncStorage.getItem('@lingobotix');
          if (data) {
            const { id, email, token, name, sobrenome, age } = JSON.parse(data);
            setUser({ id, email, token, name, sobrenome, age });
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
    }
    
    // FUNÇÃO DE RECUPERAR SENHA - PASSWORD RECOVER FUNCTION
    async function passwordRecover({ email }: PasswordRecoverProps){

        firebase.auth().sendPasswordResetEmail(email)
            .then(response => {
                setMessageSuccess('Enviamos um link no seu email para você redefinir a senha! Verifique também a sua caixa de SPAN e não esqueça de reiniciar o aplicativo.');

            })
            .catch(error => {
                setSignInError('Verifique se o email está correto!');
            })
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, loadingAuth, loading, signOut, signInError, registerUser, messageSuccess,  passwordRecover}}>
            {children}
        </AuthContext.Provider>
    )
}