import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                style={{ width: '80%', height: 50, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Go to cart screen</Text>
            </TouchableOpacity>
        </View>
    }
}
export default Home;
