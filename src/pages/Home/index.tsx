import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, FlatList  } from 'react-native';

// MY IMPORTS
import styles from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ListLevel } from '../../components/ListLevel';

type LevelProps = {
    id: string;
    title: string;
    style: string;
    buttonOne: string;
    buttonTwo: string;
    buttonThree: string;
    buttonFour: string;
}

export default function Home(){

    const [level, setLevel] = useState<LevelProps[]>([
        {id:'1', title: 'Level one - Iniciantes', style: '#D9CCC1', buttonOne: 'Saudações', buttonTwo: 'Talking about me', buttonThree: 'Talking about my family', buttonFour: 'Order at the restaurant'},
        
        {id: '2', title: 'Level two - Iniciantes', style: '#02A676', buttonOne: 'Greetings', buttonTwo: 'Talking about me', buttonThree: 'Talking about my family', buttonFour: 'Order at the restaurant'},
        
        {id: '3', title: 'Level three - Iniciantes', style: '#103778', buttonOne: 'Vira', buttonTwo: 'Vira', buttonThree: 'Vira', buttonFour: 'Vira'},
        
        {id: '4', title: 'Level four - Iniciantes', style: '#E3371E', buttonOne: 'Vira', buttonTwo: 'Vira', buttonThree: 'Vira', buttonFour: 'Vira'},
    ]);

    return(
        <View style={styles.container}>
            <Header />
            
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.listLevel}
                data={level}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListLevel data={item} />}
                contentContainerStyle={styles.listContent}
            />

            <Footer />
        </View>
    );
}
