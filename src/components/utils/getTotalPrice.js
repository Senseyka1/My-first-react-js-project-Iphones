export const getTotalPrice = (items) => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
