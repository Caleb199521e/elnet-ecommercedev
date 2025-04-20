export function formatCurrency(amount) {
    const num = Number(amount); // Convert safely
    if (isNaN(num)) return 'GH₵ 0.00'; // Optional: handle bad values gracefully
    return `GH₵ ${num.toFixed(2)}`;
  }
  