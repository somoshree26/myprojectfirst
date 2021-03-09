import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../views/Home';
import SplashScreen from '../views/SplashScreen';
import SignInScreen from '../views/SignInScreen';
import SignUpScreen from '../views/SignUpScreen';
import MainPage from '../views/MainPage';
import FileReport from '../views/FileReport';
import AboutUs from '../views/AboutUs';
import DefenseTutorial from '../views/DefenseTutorial';
import Helpline from '../views/Helpline';
import Bluetooth from '../views/Bluetooth';
import Location from '../views/Location';
import Page1 from '../views/Page1';
import Stories from '../views/Stories';


const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Welcome to Grab',
            
            headerStyle: {
                backgroundColor: 'green'
                
              },
              headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
            }
        },
        Details: {
            screen: SplashScreen,
            navigationOptions: { title: 'Login'
        
        }
        },
        SignInScreen: {
            screen: SignInScreen,
            navigationOptions: { title: 'Signin'
        
        }
        },
        SignUpScreen: {
            screen: SignUpScreen,
            navigationOptions: { title: 'SignUp'
        
        }
        },
        MainPage: {
            screen: MainPage,
            navigationOptions: { title: 'Welcome!'
        
        }
        },
        FileReport: {
            screen: FileReport,
            navigationOptions: { title: 'File Report'
        
        }
        },
        Page1: {
            screen: Page1,
            navigationOptions: { title: 'Page1'
        
        }
        },
        AboutUs: {
            screen: AboutUs,
            navigationOptions: { title: 'AboutUs'
        
        }
        },
        DefenseTutorial: {
            screen: DefenseTutorial,
            navigationOptions: { title: 'Defense Tutorial'
        
        }
        },
        Helpline: {
            screen: Helpline,
            navigationOptions: { title: 'Helpline'
        
        }
        },
        Bluetooth: {
            screen: Bluetooth,
            navigationOptions: { title: 'Bluetooth'
        
        }
        },
        Location: {
            screen: Location,
            navigationOptions: { title: 'MyLocation'
        
        }
        },
        Stories: {
            screen: Stories,
            navigationOptions: { title: 'Stories'
        
        }
        },
        
    },
    {
        headerMode: 'screen',
        cardStyle:{ backgroundColor: '#aaa'}
    },
    {
        initialRouteName: "Home"
    }


);

export default AppNavigator;
