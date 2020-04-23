let GlobalVariables;
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


//how much do we care about fonts??
//we could use specific accessible fonts that are more aesthetically pleasing, or stick with arial

export default GlobalVariables = {
    container: {
        marginTop: 150,
        backgroundColor: 'blue',
        flexWrap: 'wrap'
    },
    primaryButton: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    commonColors: {
        color: '#29acdc',
        backgroundGray: '#ececec',
        grayColor: 'gray',
        lightGrayBackground: '#e7e7e7',
        contGreen: '#00ff00',
        contBlue: '#00d4d4',
        contYellow: '#f7ca18',
        contOrange: '#ff6347',
        contRed: '#ff0000',
        contPurple: '#bf6ee0'
    },
    bodyText: {
        color: 'black',
        fontSize: '18'
    },

    headerText: {
        color: '#29acdc',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40
    },

    header: {
        color: '#29acdc',
        fontWeight: 'bold',
        fontSize: 25
    },
    body: {
        fontSize: 18
    }
};


