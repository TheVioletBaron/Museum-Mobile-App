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
        height: 60,
        width: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: '#29acdc',
        borderWidth: 3,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    titleButton: {
        height: (height-200)/3,         // this height is hardcoded in, it just correspond with number of pieces in the section
        width: '49%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: '#29acdc',
        borderWidth: 3,
        alignItems: 'center',
        marginLeft: 1,
        marginRight: 1,
        marginTop: 2,
        borderRadius: 10,
    },
    buttonText: {
        color: '#29acdc',
        fontSize: 23,
    },
    commonColors: {
        color: '#29acdc',
        backgroundGray: '#ececec',
        grayColor: '#f0f0f0',
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
        fontSize: 25,
        textAlign: 'center',
    },
    body: {
        fontSize: 18
    }
};


