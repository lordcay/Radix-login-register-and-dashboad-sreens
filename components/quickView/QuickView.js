import React from 'react';
import { View, StyleSheet } from 'react-native';
import Accordion from '../Accordion';
import IconButton from '../IconButton'


const quickNavigation = [
    {
        title: 'Service',
        text: 'Self Service',
        icon: 'ios-phone-portrait-outline',
    },
    {
        title: 'Data',
        text: 'Data Recapture',
        icon: 'swap-horizontal-outline',
    },
    {
        title: 'Client',
        text: 'Client Update',
        icon: 'document-text-outline',
    },
    {
        title: 'Branch',
        text: 'Branch Locator',
        icon: 'md-airplane-outline',
    },
    {
        title: 'Statement',
        text: 'E-Statement',
        icon: 'cash-outline',
    },
    {
        title: 'Calculator',
        text: 'Pension Calculator',
        icon: 'ios-git-merge-outline',
    },
];

export default function QuickView() {
    return (
        <Accordion heading="Quick view" open={true} >
            <View style={styles.listConatiner} >
                {
                    quickNavigation.map(_ => {
                        return (
                            <IconButton
                                key={_.text}
                                iconName={_.icon}
                                text={_.text}
                                color="#28a745"
                                screenName={_.title}
                            />
                        );
                    })
                }
            </View>
        </Accordion>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    listConatiner:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        overflow:'hidden',
    },
});