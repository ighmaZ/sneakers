import create from 'zustand';

 const cartStore = create((set) => ( {

    cart: 0,
    increase: () => set((state) => ( { cart: state.cart + 1})),
    decrease: () => set((state) => ( { cart: state.cart - 1}))


 }) )

 export default cartStore;