import { defineStore } from 'pinia'

export const useInstrumentStore = defineStore('instruments', {
  state: () => ({
    instruments: [],
  }),
  actions: {
    async fetchInstruments() {
      const { data: response } = await useFetch("/api/supabase-api/instruments");
      
      if (response.value?.data) {
        this.instruments = response.value.data;
      } else if (response.value?.error) {
        console.error("Error fetching instruments:", response.value.error);
      }
    }
  }
})
