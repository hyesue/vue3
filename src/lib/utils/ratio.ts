const ratio = (
  {dividend, divisor}: {dividend: number; divisor: number},
  fractionDigits = 1,
) => {
  if (
    dividend === 0 ||
    Number.isNaN(dividend) ||
    divisor === 0 ||
    Number.isNaN(divisor)
  ) {
    return null;
  }

  return Number(((dividend / divisor) * 100).toFixed(fractionDigits));
};

export default ratio;
