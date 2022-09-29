import create from 'zustand';

 const cartStore = create((set) => ( {

    cart: 0,
    increase: () => set((state) => ( { cart: state.cart + 1})),
    decrease: () => set((state) => ( { cart: Math.max(state.cart - 1, 0)})) // used math.max so that cart wont go negative


 }) )

 export default cartStore;