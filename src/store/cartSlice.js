import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, actions) => {
            let product = state.value.find((item) => item.id == actions.payload && item.color == actions.payload.color)
            if (product) {
                state.value = state.value.map((item) => {
                    if (item.id == actions.payload.id && item.color == actions.payload.color) {
                        item.count += Number(actions.payload.count)
                    }
                    return item
                })
            } else {
                state.value.push(actions.payload)
            }
        },
        edit: (state, actions) => {
            state.value = state.value.map((item) => {
                if (item.color == actions.payload.color && item.id == actions.payload.id) {
                    item.count = actions.payload.count
                }
                return item;
            })
        },
        remove: (state, actions) => {
            state.value = state.value.filter((item) => {
                return !(item.id == actions.payload.id && item.color == actions.payload.color);
            });
        }
    }
})

export default cartSlice.reducer
export const { add, edit, remove } = cartSlice.actions