import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
    Modal,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
// const data = [
//     { id: 1, value: 1 },
//     { id: 2, value: 2 },
//     { id: 3, value: 3 },
//     { id: 4, value: 4 },
//     { id: 5, value: 5 },
//     { id: 6, value: 6 },
//     { id: 7, value: 7 },
// ]
const ModalBox = ({ value, count, visible, hideModal }) =>
    <Modal
        visible={visible}
        transparent={true}
    >
        <View style={{ width: '50%', height: '50%', backgroundColor: 'pink', position: 'absolute', top: 80, left: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{value}</Text>
            <TouchableOpacity
                onPress={() => hideModal()}
                style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>+</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{count}</Text>
            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold' }}>-</Text>
            </TouchableOpacity>
        </View>
    </Modal>
function renderItem(data, func) {
    let arr = [];

    return arr;
}
class Cart extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const { modalVisible } = this.props;

        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


            <FlatList
                data={this.props.cartData}
                renderItem={({ item }) =>
                    (
                        <TouchableOpacity
                            style={{ width: 50, height: 50, marginBottom: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellowgreen' }}
                            onPress={() => { this.props.showModal(item) }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.value}</Text>
                        </TouchableOpacity>)

                }
                keyExtractor={(item) => item.id}
                style={{ width: '100%', height: '90%', borderWidth: 1, marginTop: 50 }}
            />

            <TouchableOpacity style={{ width: '80%', height: 50, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Your items</Text>
            </TouchableOpacity>

            <ModalBox visible={modalVisible} hideModal={this.props.hideModal} />


        </View>)
    }
}
// function mapModalStateToProps(state) {
//     return {
//         visible: state.visible,
//         data: state.data
//     }
// }
// function mapModalDispatchToProps() {
//     return {
//         showMd: () => dispatch({ type: 'SHOW_MODAL' }),
//         hideMd: () => dispatch({ typ: 'HIDE_MODAL' })
//     }
// }
function mapCartStateToProps(state) {
    console.log('Hello');

    return {
        modalVisible: state.modal.visible,
        modalData: state.modal.modalData,
        cartData: state.cart.cartData.item,
    }
}
function mapCartDispatchToProps(dispatch) {
    return {
        showModal: (data) => dispatch({ type: 'SHOW_MODAL', data: data }),
        hideModal: () => dispatch({ type: 'HIDE_MODAL' })
    }
}
//onnect(mapModalStateToProps, mapModalDispatchToProps)(ModalBox);
export default connect(mapCartStateToProps, mapCartDispatchToProps)(Cart);