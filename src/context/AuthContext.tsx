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
}

type UserProps = {
    id: string;
    email: string;
    token: string;
    // name: string;
    // idade: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps ={
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextDate);

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        email: '',
        token: '',
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
                        token
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
                    token: ''
                });
            })
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, loadingAuth, loading, signOut, signInError }}>
            {children}
        </AuthContext.Provider>
    )
}