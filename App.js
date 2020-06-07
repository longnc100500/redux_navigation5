import React from 'react';
import { Provider } from "react-redux";
import store from "./Redux/store";
import StackApp from './StackApp';
import { createStore } from "redux";
import index from "./Redux/reducers/index";
//const store = createStore(index);
const App = () =>
    <Provider store={store}>
        <StackApp />
    </Provider>
export default App;