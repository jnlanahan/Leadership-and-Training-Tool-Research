import { create } from 'zustand';

interface ReportState {
  selectedCategory: string;
  selectedMarket: string;
  setSelectedCategory: (category: string) => void;
  setSelectedMarket: (market: string) => void;
}

export const useReportStore = create<ReportState>((set) => ({
  selectedCategory: 'all',
  selectedMarket: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedMarket: (market) => set({ selectedMarket: market }),
})); 