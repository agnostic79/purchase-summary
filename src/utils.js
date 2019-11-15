export const formatPrice = (curr, val) => {
  if (val < 0) {
    return `-${curr}${Math.abs(val)}`;
  }
  return `${curr}${val}`;
};
