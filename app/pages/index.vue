<template>
  <div class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex">
    <button id="hs-dropdown-example" type="button"
      class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
      aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Actions
      <svg class="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </button>

    <div
      class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
      role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-example">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
        href="#">
        Newsletter
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
        href="#">
        Purchases
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
        href="#">
        Downloads
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
        href="#">
        Team Account
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const vehicleStore = useVehicleStore();
const instrumentStore = useInstrumentStore();

await vehicleStore.fetchVehicles();
await instrumentStore.fetchInstruments();
const softwareList = [
  {
    name: 'MyFetdos v1.1',
    description: 'Software for Calculation of Cancer',
    size: '64MB',
    updated: '30 February, 2025',
    icon: 'SvgDocument', // Dynamic component name
    downloadLink: '/downloads/myfetdos-v1.0', // Dynamic download link
    detailsLink: '/details/myfetdos-v1.0', // Dynamic details link
  },
  {
    name: 'MyFetdos v1.7',
    description: 'DICOM Viewer & Analysis Tools',
    size: '380MB',
    updated: 'March 10, 2024',
    icon: 'SvgDocument', // Dynamic component name
    downloadLink: '/downloads/myfetdos-dicom', // Dynamic download link
    detailsLink: '/details/myfetdos-dicom', // Dynamic details link
  },
  {
    name: 'MyFetdos v1.0',
    description: 'Patient & Schedule Management',
    size: '156MB',
    updated: 'March 1, 2024',
    icon: 'SvgDocument', // Dynamic component name
    downloadLink: '/downloads/myfetdos-management', // Dynamic download link
    detailsLink: '/details/myfetdos-management', // Dynamic details link
  },
];
</script>