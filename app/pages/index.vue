<template>
  <!-- Hero Section -->
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pt-24 sm:pt-44">
    <div class="text-center">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 md:text-5xl">
        Myfetdos Software Downloads
      </h1>
      <p class="mt-3 text-base sm:text-lg text-gray-600">
        Access and download verified medical software for healthcare professionals
      </p>
    </div>
  </div>

  <!-- File Grid -->
  <div class="max-w-[85rem] px-4 py-6 sm:py-10 sm:px-6 lg:px-8 mx-auto">
    <!-- Search and Filter Bar -->


    <!-- File Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div v-for="(software, index) in softwareList" :key="index"
        class="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
        <Card :software="software" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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