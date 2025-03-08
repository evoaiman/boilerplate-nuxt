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
      <!-- EMR Software Card -->
      <div class="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
        <div class="p-3 sm:p-4 md:p-5">
          <div class="flex items-center gap-x-3 sm:gap-x-4">
            <div class="flex-shrink-0 size-[40px] sm:size-[48px] bg-blue-50 rounded-lg flex items-center justify-center">
              <svg class="size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                <path d="M2 13v-1h6v1"/>
                <path d="M5 12v6"/>
                <path d="M4 18h2"/>
              </svg>
            </div>

            <div class="grow">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">MyFetdos v1.0</h3>
              <p class="text-xs sm:text-sm text-gray-500">Software for Calculation of Cancer</p>
            </div>
          </div>

          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <ul class="space-y-2">
              <li class="flex items-center gap-x-2">
                <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" x2="4" y1="22" y2="15"/>
                </svg>
                Size: 64MB
              </li>
              <li class="flex items-center gap-x-2">
                <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                Updated: 30 February, 2025
              </li>
            </ul>
          </div>

          <div class="mt-4 flex items-center gap-x-2 sm:gap-x-3">
            <button type="button" class="py-1.5 sm:py-2 px-2 sm:px-3 inline-flex items-center gap-x-1.5 sm:gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <svg class="size-3.5 sm:size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Download
            </button>
            <button type="button" class="py-1.5 sm:py-2 px-2 sm:px-3 inline-flex items-center gap-x-1.5 sm:gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Details
            </button>
          </div>
        </div>
      </div>

      <!-- Imaging Software Card -->
      <div class="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
        <div class="p-4 md:p-5">
          <div class="flex items-center gap-x-4">
            <div class="flex-shrink-0 size-[48px] bg-purple-50 rounded-lg flex items-center justify-center">
              <svg class="size-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>

            <div class="grow">
              <h3 class="font-semibold text-gray-800 dark:text-gray-200">MyFetdos v1.0</h3>
              <p class="text-sm text-gray-500">DICOM Viewer & Analysis Tools</p>
            </div>
          </div>

          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <ul class="space-y-2">
              <li class="flex items-center gap-x-2">
                <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" x2="4" y1="22" y2="15"/>
                </svg>
                Size: 380MB
              </li>
              <li class="flex items-center gap-x-2">
                <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                Updated: March 10, 2024
              </li>
            </ul>
          </div>

          <div class="mt-4 flex items-center gap-x-3">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Download
            </button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Details
            </button>
          </div>
        </div>
      </div>

      <!-- Practice Management Card -->
      <div class="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
        <div class="p-4 md:p-5">
          <div class="flex items-center gap-x-4">
            <div class="flex-shrink-0 size-[48px] bg-teal-50 rounded-lg flex items-center justify-center">
              <svg class="size-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>

            <div class="grow">
              <h3 class="font-semibold text-gray-800 dark:text-gray-200">MyFetdos v1.0</h3>
              <p class="text-sm text-gray-500">Patient & Schedule Management</p>
            </div>
          </div>

          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <ul class="space-y-2">
              <li class="flex items-center gap-x-2">
                <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                  <line x1="4" x2="4" y1="22" y2="15"/>
                </svg>
                Size: 156MB
              </li>
              <li class="flex items-center gap-x-2">
                <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                Updated: March 1, 2024
              </li>
            </ul>
          </div>

          <div class="mt-4 flex items-center gap-x-3">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Download
            </button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Add any required functionality here
</script>

<style>
/* Add any custom styles here */
</style>