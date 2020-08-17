const toSwissFrancs = (value) => {
  const formatter = new Intl.NumberFormat("fr-CH", {
    style: "currency",
    currency: "CHF"
  });
  return formatter.format(value)
};

const currencyUtils = {
  toSwissFrancs
};
export default currencyUtils;