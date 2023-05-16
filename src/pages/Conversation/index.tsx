import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';

// MY IMPORTS
import styles from './styles';
import { Response } from '../../components/Response';

// TYPANDO O USEROUT
type RouteInfoChatParams = {
    Conversation: {
        infoStartChat: string;
    };
}

type InfoChatRouteProps = RouteProp<RouteInfoChatParams, 'Conversation'>;

export default function Conversation(){

    const route = useRoute<InfoChatRouteProps>();

    return(
        <View style={styles.container} >
            <Text>
                {route.params.infoStartChat}
            </Text>
            {/* <ScrollView style={styles.response} showsVerticalScrollIndicator={false}>
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
                <Response />
            </ScrollView>     */}
        </View>
    );
}