import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Password from '../Screens/Password';
import BottomTabNavigation from './BottomTabNavigation';
import Airtime from '../screens/airtime/Airtime';
import Transfer from '../screens/transfer/Transfer';
import Bills from '../screens/bills/Bills';
import Cash from '../screens/cash/Cash';
import QuickPay from '../screens/quickPay/QuickPay';
import Split from '../screens/split/Split';
import ScreenHeader from '../screens/screenHeader/ScreenHeader';
import Profile from '../screens/profile/Profile';


const Stack = createStackNavigator()

const screens = [
    {
        name: 'DashBoard',
        component: BottomTabNavigation 
    },
    {
        name: 'password',
        component: Password 
    },
    {
        name: 'Airtime',
        component: Airtime, 
    },
    {
        name: 'profile',
        component: Profile, 
    },
    {
        name: 'Transfer',
        component: Transfer, 
    },
    {
        name: 'Bills',
        component: Bills, 
    },
    {
        name: 'Cash',
        component: Cash, 
    },
    {
        name: 'QuickPay',
        component: QuickPay, 
    },
    // {
    //     name: 'Welcome',
    //     component: Welcome, 
    // },
    {
        name: 'Split',
        component: Split, 
    },
]
const noHeaderArray = ['DashBoard', 'password', 'profile'];

export default function MainStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="DashBoard"
            screenOptions = {()=>({
                headerShown:true,
            })}
        >
            {
                screens.map(screen => 
                    <Stack.Screen 
                        key={screen.name}
                        name={screen.name}
                        component= {screen.component}
                        options={{
                            headerShown:true,
                            header:({route})=>{
                                const showHeader = !noHeaderArray.includes(route.name);
                                return showHeader && <ScreenHeader heading={route.name} />
                            },
                        }}
                    />
                    )
            }
        </Stack.Navigator>
    )
}
