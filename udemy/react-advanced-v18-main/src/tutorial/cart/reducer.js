const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") return { ...state, cart: [] };
  if (action.type === "REMOVE") {
    const newCart = state.cart.filter((item) => item.id !== action.id);

    return { ...state, cart: newCart };
  }
  if (action.type === "INCREASE") {
    const cart = state.cart.map((item) => {
      if (item.id === action.id) {
        return { ...item, amount: item.amount + 1 };
      }
      return { ...item };
    });
    return { ...state, cart, amount: state.amount + 1 };
  }
  if (action.type === "DECREASE") {
    const cart = state.cart
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return { ...item };
      })
      .filter((item) => item.amount > 0);
    return { ...state, cart, amount: state.amount - 1 };
  }
  if (action.type === "GET_TOTALS") {
    const { total, amount } = state.cart.reduce(
      (sum, item) => {
        sum.amount += item.amount;
        sum.total += item.price * item.amount;
        return sum;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    const tempTotal = parseFloat(total.toFixed(2));
    return { ...state, amount, total: tempTotal };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "LOAD_ITEMS") {
    return { ...state, loading: false, cart: action.items };
  }
  return state;
};

export default reducer;
