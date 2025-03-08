import { defineStore } from "pinia";

export const useVehicleStore = defineStore("vehicles", {
  state: () => ({
    vehicles: [],
  }),

  actions: {
    async fetchVehicles() {
      const { data: response } = await useFetch("/api/supabase?table=vehicles");
      
      if (response.value?.data) {
        this.vehicles = response.value.data;
      } else if (response.value?.error) {
        console.error("Error fetching vehicles:", response.value.error);
      }
    },
  },
});