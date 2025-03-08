<template>
    <div class="p-4 md:p-5">
        <div class="flex items-center gap-x-4">
            <div class="flex-shrink-0 size-[48px] bg-blue-50 rounded-lg flex items-center justify-center">
                <component :is="software.icon" class="text-2xl text-blue-500" filled :fontControlled="true" />
            </div>

            <div class="grow">
                <h3 class="font-semibold text-gray-800 dark:text-gray-200">{{ software.name }}</h3>
                <p class="text-sm text-gray-500">{{ software.description }}</p>
            </div>
        </div>

        <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <ul class="space-y-2">
                <li class="flex items-center gap-x-2">
                    <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                    </svg>
                    Size: {{ software.size }}
                </li>
                <li class="flex items-center gap-x-2">
                    <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    Updated: {{ software.updated }}
                </li>
            </ul>
        </div>

        <div class="mt-4 flex items-center gap-x-3">
            <a :href="software.downloadLink"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download
            </a>
            <a :href="software.detailsLink"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Details
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    software: {
        type: Object,
        required: true
    }
})
</script>

<style></style>