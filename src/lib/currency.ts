const EXCHANGE_RATES: Record<string, number> = {
  USD: 1.0,
  PKR: 280.0,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
};

const SYMBOLS: Record<string, string> = {
  USD: '$',
  PKR: 'Rs.',
  EUR: '€',
  GBP: '£',
  AED: 'AED ',
};

export function getActiveCurrency(): { code: string; symbol: string; rate: number } {
  // Check if saved
  const saved = localStorage.getItem('maison_currency');
  if (saved && EXCHANGE_RATES[saved]) {
    return { code: saved, symbol: SYMBOLS[saved], rate: EXCHANGE_RATES[saved] };
  }

  // Auto detect
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const languages = navigator.languages || [navigator.language];
    
    const isPak = 
      timezone.toLowerCase().includes('karachi') || 
      timezone.toLowerCase().includes('pakistan') || 
      languages.some(lang => lang.toLowerCase().includes('pk') || lang.toLowerCase().includes('ur'));
    
    if (isPak) {
      return { code: 'PKR', symbol: SYMBOLS.PKR, rate: EXCHANGE_RATES.PKR };
    }

    const isEur = timezone.toLowerCase().includes('europe') || languages.some(lang => lang.toLowerCase().includes('eu'));
    if (isEur) {
      return { code: 'EUR', symbol: SYMBOLS.EUR, rate: EXCHANGE_RATES.EUR };
    }

    const isGbp = timezone.toLowerCase().includes('london') || languages.some(lang => lang.toLowerCase().includes('gb'));
    if (isGbp) {
      return { code: 'GBP', symbol: SYMBOLS.GBP, rate: EXCHANGE_RATES.GBP };
    }

    const isAed = timezone.toLowerCase().includes('dubai') || languages.some(lang => lang.toLowerCase().includes('ae'));
    if (isAed) {
      return { code: 'AED', symbol: SYMBOLS.AED, rate: EXCHANGE_RATES.AED };
    }
  } catch {
    // Ignore error
  }

  return { code: 'USD', symbol: SYMBOLS.USD, rate: EXCHANGE_RATES.USD };
}

export function formatPrice(priceInUSD: number): string {
  const currency = getActiveCurrency();
  const converted = Math.round(priceInUSD * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
}

