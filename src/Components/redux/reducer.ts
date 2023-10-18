import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface ProductDetails {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
    
  }
  interface CartProductDetails {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
    quantity: number;
  }
export interface State {
  productsList: ProductDetails[]|[];
  loading: boolean;
  cartList:CartProductDetails[]|[];
}

const initialState: State = {
  productsList: [],
  loading: false,
  cartList:[]
};

export const productsAction = createAsyncThunk(
  "getProducts",
  async (_, { getState, fulfillWithValue, rejectWithValue }) => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();
     
    if (data) {
      return fulfillWithValue(data);
    } else {
      return rejectWithValue(data);
    }
  }
);

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
       
    //   state.cartList.push(action.payload);
   const  cart = state.cartList.filter(item => item.id === action.payload.id);
  if(cart.length===0){
    const updatedState = [...state.cartList,{...action.payload,quantity:1}]
    state.cartList = updatedState
  }  
    
    },
    increaseQuantity:(state,action)=>{
        const  list = state.cartList.map(item => {
            if(item.id === action.payload.id){
                return {...item,quantity:action.payload.quantity+1}
            }
            return item
        }); 

        state.cartList = list

    },
    decreaseQuantity:(state,action)=>{
        const  list = state.cartList.map(item => {
            if(item.id === action.payload.id){
                if(item.quantity>0){
                    return {...item,quantity:action.payload.quantity-1}
                }
               
                
            }
            return item
        }); 

        state.cartList = list
        const res=   state.cartList.filter(item => item.quantity !== 0);
        state.cartList = res
    }
  },

  extraReducers: (builder) => {
    builder.addCase(productsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productsAction.fulfilled, (state, action) => {
     
      state.productsList = action.payload;
      state.loading = false;
    });
    builder.addCase(productsAction.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

const { actions, reducer } = cartSlice;

export const { addItemToCart ,increaseQuantity,decreaseQuantity} = actions;

export default reducer;
