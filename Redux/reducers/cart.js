import { ADD_ITEM, SUB_ITEM, REMOVE_ITEM } from '../actionTypes';
const initialState = {
    cartData: {
        item: [
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 },
            { id: 5, value: 5 },
            { id: 6, value: 6 },
            { id: 7, value: 7 },

        ],
    }

}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const id = action.id;
            const num = state.item.reduce((x, y) => {
                if (y.id === id)
                    return ++x;
            }, 0)
            if (num != 0) {
                var newAr = state.item;
                newAr.map((i) => {
                    if (i.id == id) {
                        i.count == ++num;
                    }
                })
                return {
                    ...state,
                    item: [...newAr]
                }
            } else {
                return {
                    ...state,
                    item: [...state.item, { id: id, count: 1 }]
                }
            }

        }
        case SUB_ITEM: {
            const id = action.id;
            var num = state.item.reduce((curVal, nextVal) => {
                if (nextVal.id === id) {
                    return ++curVal;
                }
            }, 0);
            if (num > 1) {
                var newAr = state.item;
                newAr.map((i) => {
                    if (i.id == id) {
                        i.count == --num;
                    }
                });
                return {
                    ...state,
                    item: [...newAr]
                }
            }
            else {
                var newAr = state.item.filter((i) => {
                    return i.id !== id;
                })
                return {
                    ...state,
                    item: [...newAr]
                }
            }

        }
        case REMOVE_ITEM: {
            const id = action.id;
            const tmp = state.item.filter((i) => {
                return item.id != id;
            })
            return {
                ...state,
                item: [tmp]
            }
        }
        default: return state;
    }
}