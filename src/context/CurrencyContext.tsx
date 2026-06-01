import React, { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyCode = 'USD' | 'PKR' | 'EUR' | 'GBP' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number;
  label: string;
  flag: string;
}

export const CURRENCY_LIST: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, label: 'US Dollar', flag: '🇺🇸' },
  PKR: { code: 'PKR', symbol: 'Rs.', rate: 280.0, label: 'Pakistani Rupee', flag: '🇵🇰' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'Euro', flag: '🇪🇺' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'British Pound', flag: '🇬🇧' },
  AED: { code: 'AED', symbol: 'AED ', rate: 3.67, label: 'UAE Dirham', flag: '🇦🇪' },
};

interface CurrencyContextType {
  currentCurrency: CurrencyConfig;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (priceInUSD: number) => string;
  convertToLocal: (priceInUSD: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currentCurrency, setCurrencyState] = useState<CurrencyConfig>(CURRENCY_LIST.USD);

  useEffect(() => {
    // Try to auto-detect currency based on saved settings in localStorage
    const saved = localStorage.getItem('maison_currency') as CurrencyCode;
    if (saved && CURRENCY_LIST[saved]) {
      setCurrencyState(CURRENCY_LIST[saved]);
      return;
    }

    // Secondary auto-detection using browser locales and timezones
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      const languages = navigator.languages || [navigator.language];
      const isPak = 
        timezone.toLowerCase().includes('karachi') || 
        timezone.toLowerCase().includes('pakistan') || 
        languages.some(lang => lang.toLowerCase().includes('pk') || lang.toLowerCase().includes('ur'));
      
      const isEur = timezone.toLowerCase().includes('europe') || languages.some(lang => lang.toLowerCase().includes('eu'));
      const isGbp = timezone.toLowerCase().includes('london') || languages.some(lang => lang.toLowerCase().includes('gb'));
      const isAed = timezone.toLowerCase().includes('dubai') || timezone.toLowerCase().includes('asia/dubai') || languages.some(lang => lang.toLowerCase().includes('ae'));

      if (isPak) {
        setCurrencyState(CURRENCY_LIST.PKR);
      } else if (isAed) {
        setCurrencyState(CURRENCY_LIST.AED);
      } else if (isEur) {
        setCurrencyState(CURRENCY_LIST.EUR);
      } else if (isGbp) {
        setCurrencyState(CURRENCY_LIST.GBP);
      } else {
        setCurrencyState(CURRENCY_LIST.USD);
      }
    } catch {
      setCurrencyState(CURRENCY_LIST.USD);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    if (CURRENCY_LIST[code]) {
      setCurrencyState(CURRENCY_LIST[code]);
      localStorage.setItem('maison_currency', code);
    }
  };

  const convertToLocal = (priceInUSD: number): number => {
    return Math.round(priceInUSD * currentCurrency.rate);
  };

  const formatPrice = (priceInUSD: number): string => {
    const convertedValue = convertToLocal(priceInUSD);
    return `${currentCurrency.symbol}${convertedValue.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currentCurrency, setCurrency, formatPrice, convertToLocal }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
