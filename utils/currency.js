export function formatCurrency(amount) {
  if (typeof amount !== "number") {
    console.error("Invalid amount passed to formatCurrency:", amount);
    return "₵0.00";
  }
  return `GH₵ ${amount.toFixed(2)}`;
}
