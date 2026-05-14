export const formatPrice = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};