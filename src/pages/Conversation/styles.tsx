import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        position: 'relative',
    },
    TitlesContainer: {
        width: '90%',
        height: 90,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleLevel: {
        fontSize: 22,
        fontWeight: '600',
        color: '#BF6415',
        marginBottom: 10
    },
    titleExercises:{
        fontSize: 18,
        fontWeight: '500',
    },
    conversationContainer:{
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    startConversation: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 14,
    },
    imgRespnse: {
        marginRight: 10,
        maxWidth: 50,
        maxHeight: 70,
    },
    textStarConversation: {
        maxWidth: '90%',
        borderWidth: 2,
        borderColor: '#A6A6A6',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexWrap: 'wrap',
        lineHeight: 22,
        backgroundColor: '#023E73',
        color: '#FFF',
    },





    chatContainer:{
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        paddingHorizontal: 5,

        position: 'absolute',
        bottom: 60,
    },
    textAreaChat:{
        width: '80%',
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#152610',
        color: '#FFF',
        fontSize: 16
    },
    buttonChat:{
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: '#A3F26B',
        borderRadius: 8,
    }
});

export default styles;