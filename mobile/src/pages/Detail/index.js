import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const message = `Olá ${incidente.name}, estou ajudando no caso ${incident.name} com ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)} `;

    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herio do caso:  ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incidente.whatsapp}&text=${message}`);
    }

    return(
        <View style = { styles.container }>
             <View style = { styles.header }>
                <Image source = { logoImg }/>
                <TouchableOpacity onPress = { navigateBack }>
                    <Feather 
                        name = "arrow-left" 
                        size = {28}
                        color = "#E82041" />
                </TouchableOpacity>
            </View>

            <View style = { styles.incident}>
                        <Text style = { [ styles.incidentProperty, { marginTop: 0 } ] }>ONG: </Text>
                        <Text style = { styles.incidentValue }> { incident.name } </Text>
                        <Text style = { styles.incidentValue }> { incident.name } de { incident.city }/{ incident.uf } </Text>

                        <Text style = { styles.incidentProperty }>CASO: </Text>
                        <Text style = { styles.incidentValue }> { incident.title } </Text>

                        <Text style = { styles.incidentProperty }>VALOR: </Text>
                        <Text style = { styles.incidentValue }> 
                        {Intl.NumberFormat('pt-BR', {  
                                    style: 'currency',
                                    currency: 'BRL'
                             }).format(incident.value)} 
                        </Text>
            </View>

            <View style = { styles.contactBox}>
                <Text style = { styles.heroTitle}>salve o dia</Text>
                <Text style = { styles.heroTitle}>Seja o herio desse caso</Text>

                <Text style = { styles.heroDescription}> Entre em contato:</Text>                
                <View style = { styles.actions}>
                    <TouchableOpacity style = { styles.action } onPress = { sendMail }>
                        <Text style = { styles.actionText }>E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.action } onPress = { sendWhatsapp }>
                        <Text style = { styles.actionText }>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}