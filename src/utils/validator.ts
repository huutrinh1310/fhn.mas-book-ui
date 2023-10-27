export const validatePrice = (price: number) => {
    const rounded = Math.round(price * 100) / 100;
    return rounded.toFixed(2);
}