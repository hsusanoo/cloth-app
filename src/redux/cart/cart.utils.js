export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCardItem = cartItems.find(item => item.name === itemToAdd.name);

    if (existingCardItem) {
        return cartItems.map(item =>
            item.name === itemToAdd.name        // Replace by id when possible
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        )
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];
};