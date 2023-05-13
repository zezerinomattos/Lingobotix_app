import React, {useState} from 'react';
import { View, Text, FlatList, Modal  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ListLevel } from '../../components/ListLevel';
import { ModalInformation } from '../../components/ModalInformation';

type LevelProps = {
    id: string;
    title: string;
    style: string;
    buttonOne: string;
    buttonTwo: string;
    buttonThree: string;
    buttonFour: string;
    information: string;
}


export default function Home(){

    // CONTROLE LISTLEVEL "Deixar dinamica, cadastrar no front"
    const [level, setLevel] = useState<LevelProps[]>([
        {id:'1', title: 'Level one - Iniciantes', style: '#D9CCC1', buttonOne: 'Saudações', buttonTwo: 'Talking about me', buttonThree: 'Talking about my family', buttonFour: 'Order at the restaurant',information:'Comece sua jornada de aprendizado da língua inglesa pelo nível 1 do nosso aplicativo. Aqui, você terá a oportunidade de praticar uma conversa básica e dar seus primeiros passos nesse novo idioma. Não importa se você é iniciante, estamos aqui para ajudá-lo a alcançar seus objetivos de aprendizagem de forma simples e eficaz. Vamos lá!' },
        
        {id: '2', title: 'Level two - Iniciantes', style: '#02A676', buttonOne: 'Greetings', buttonTwo: 'Talking about me', buttonThree: 'Talking about my family', buttonFour: 'Order at the restaurant', information:'Informação do Nivel 2'},
        
        {id: '3', title: 'Level three - Iniciantes', style: '#103778', buttonOne: 'Vira', buttonTwo: 'Vira', buttonThree: 'Vira', buttonFour: 'Vira', information:'Informação do Nivel 3'},
        
        {id: '4', title: 'Level four - Iniciantes', style: '#E3371E', buttonOne: 'Vira', buttonTwo: 'Vira', buttonThree: 'Vira', buttonFour: 'Vira', information:'Comece sua jornada de aprendizado da língua inglesa pelo nível 1 do nosso aplicativo. Aqui, você terá a oportunidade de praticar uma conversa básica e dar seus primeiros passos nesse novo idioma. Não importa se você é iniciante, estamos aqui para ajudá-lo a alcançar seus objetivos de aprendizagem de forma simples e eficaz. Vamos lá!'},
    ]);
    //--------------------------------------------------------

    const [modalInformationVisible, setModalInformationVisible] = useState(false);
    const[levelInformation, setLevelInformation] = useState<string[]>(['']);

    // FUNÇÃO DE ONPRESS DO BOTÃO DE INFORMAÇÃO DO NIVEL
    function handleInformationButton(title: string, information: string){
        setModalInformationVisible(true);

        setLevelInformation([title, information]);
    }

    return(
        <View style={styles.container}>
            <Header />
            
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.listLevel}
                data={level}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListLevel data={item} onPress={handleInformationButton} />}
                contentContainerStyle={styles.listContent}
            />

            <Modal transparent={true} visible={modalInformationVisible} animationType='fade'>
                <ModalInformation 
                    handleCloseModal = {() => setModalInformationVisible(false)}
                    hendleLevelInformation = {levelInformation}
                />
            </Modal>

            <Footer />
        </View>
    );
}
