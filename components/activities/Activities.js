import React  from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Accordion from '../Accordion';
import Divider from '../Divider';
import List from '../List'
import getActivityIconName from '../Helpers/getActivityIconName'
import Typography from '../Typography'

const allActions = [
    {
        action:'Retiree Account',
        time:'name',
        details: 'Find out more about Retiree Account',
        status:'sucess',
    },
    {
        action:'Voluntary Contribution',
        time:'name',
        details: 'Find out more about Voluntary Contribution',
        status:'sucess',
    },
    {
        action:'Micro Pension',
        time:'name',
        details: 'Find out more about Micro Pension',
        status:'sucess',
    },
];

/**
 * This shows a list of all current activities that occured in a bank account
*/

export default function Activities() {

return (
    <Accordion heading="Activities" >
        {
            allActions.map((action, index) => {
                return (
                    <TouchableOpacity  activeOpacity={0.8} key={index}>
                        <List 
                            elevateIcon
                            iconName = {getActivityIconName(action.action)}
                            
                           
                        >   
                            <View style={styles.listChildern} >
                                <Typography
                                    text={action.action.toUpperCase()}
                                    bold
                                />
                                <Typography
                                    text={action.details}
                                    color="#28a745"
                                />
                            </View>
                        </List>
                        <Divider bgcolor='#363564' />
                    </TouchableOpacity>
                );
            }
            )
        }
    </Accordion>
);
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    listChildern:{
        flexDirection:'column',
        justifyContent:'center',
        paddingVertical:20,
        overflow:'hidden',
    },
    root: {
        color:'blue',
    },
});