export interface FinancialTradeLine {
    id: number;
    itemName: string;
    quantity: number;
    price: number;
  }
  
  export interface FinancialTrade {
    id: number;
    date: string;
    seriesCode: string;
    traderName: string;
    financialTradeLines: FinancialTradeLine[];
  }
  