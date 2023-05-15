import React, {useState, createContext, ReactNode, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from '../services/firebase';

type AuthContextDate = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise <void>;
    signInError: string;
    registerUser: (credentials: UserRegisterProps) => Promise <void>;
}

type UserProps = {
    id: string;
    email: string;
    token: string;
    name: string;
    age: string;
    nameUser: string;
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
    nameUser: string;
    email: string 
    password: string;
}

export const AuthContext = createContext({} as AuthContextDate);

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        email: '',
        token: '',
        name: '',
        age: '',
        nameUser: '',
    });

    const [loading, setLoading] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(true)
    const [signInError, setSignInError] = useState('');

    const isAuthenticated = !!user.email;

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
                    age: hasUser.age,
                    nameUser: hasUser.nameUser,
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

                    const data = {
                        ...response.user
                    }

                    AsyncStorage.setItem('@lingobotix', JSON.stringify(data));

                    // DISPONIBILIZANDO O TOKEN PARA AS ROTAS - MAKING THE TOKEN AVAILABLE FOR THE ROUTES

                    setUser({
                        id,
                        email,
                        token,
                        name: '',
                        age: '',
                        nameUser: ''
                    })
                }

                setLoading(false);
            })
            .catch(error => {
                console.log(`Error: ${error}`);
                setLoading(false);
                setSignInError('Ops, Verefique seus dados, algo deu errado!');
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
                    age: '',
                    nameUser: ''
                });
            })
    }

    // FUNÇÃO DE CADASTRO DE USUÁRIO - USER REGISTRATION FUNCTION
    async function registerUser({name, age, nameUser ,email, password }: UserRegisterProps){
        setLoading(true);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                if (response.user !== null) {
                    firebase.database().ref('users').child(response.user.uid).set({
                        name: name,
                        age: age,
                        nameUser: nameUser
                    })
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
                setSignInError('Algo deu errado, verifique seus dados e tente novamente!');
                setLoading(false);
            })
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, loadingAuth, loading, signOut, signInError, registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}