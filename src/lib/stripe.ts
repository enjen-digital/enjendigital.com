export const products = {
  premium: {
    priceId: 'price_1RJZUyGP0AhVj5Msxl0njxIT',
    name: 'Premium Booking System',
    description: 'Advanced features with digital marketing to attract new clients and boost revenue',
    mode: 'subscription' as const,
  },
  essential: {
    priceId: 'price_1RJZU2GP0AhVj5Ms4a1AuVkH',
    name: 'Essential Booking System',
    description: 'Everything you need to streamline your booking process and grow your business',
    mode: 'subscription' as const,
  },
} as const;

export const getProductByPriceId = (priceId: string) => {
  return Object.values(products).find((product) => product.priceId === priceId);
}