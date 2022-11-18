import { createSlice } from "@reduxjs/toolkit";


// luu vao local
const items = localStorage.getItem('cartItems') != null ? JSON.parse(
  localStorage.getItem('cartItems')) : []

  
const totalAmount = localStorage.getItem('totalAmount') != null ? JSON.parse(
      localStorage.getItem('totalAmount')) : 0;

const totalQuantity = localStorage.getItem('totalQuantity') != null ? JSON.parse(
        localStorage.getItem('totalQuantity')) : 0;


const setItemLocal = (item , totalAmount , totalQuantity ) => {
  localStorage.setItem('cartItems',JSON.stringify(item));
  localStorage.setItem('totalAmount',JSON.stringify(totalAmount));
  localStorage.setItem('totalQuantity',JSON.stringify(totalQuantity));

}


const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,

};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    clearCart(state, action) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;

      setItemLocal([], 0, 0); // xoa cart luu trong local
    },
    // thêm item
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
        alert("Thêm vào giỏ hàng thành công"); 
       
       
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
        
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemLocal(state.cartItems.map((item) => item),
      state.totalAmount,
      state.totalQuantity )
    },
    
    // giảm item
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = Number(
          existingItem.totalPrice - Number(existingItem.price)
          
        );
        setItemLocal(state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
        )

       
      }
     
    },
    // xóa item
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
      
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        alert("Bạn chắc chắn muốn xóa chứ")
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemLocal(
      state.cartItems.map((item) => item),
      state.totalAmount,
      state.totalQuantity)
    },
   },
  }
);

export const cartActions = cartSlice.actions;
export default cartSlice;
