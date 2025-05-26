<script setup lang="ts">
import type { Country } from "../models/country.model";

interface Props {
  country: Country;
}

defineProps<Props>();
</script>

<template>
  <div class="aspect-video sm:aspect-video p-1">
    <img class="aspect-video sm:aspect-video w-full p-1" :src="country.flags.png" :alt="country.flags.alt" />
  </div>
  <div class="px-2">
    <h4 class="text-xl font-bold text-gray-500">
      {{ country.name.common }}
    </h4>
    <p class="text-sm text-gray-400">Capital: <span v-for="capital in country.capital" class="font-bold">
        {{ capital }}
        <template> </template>
      </span></p>
    <p class="text-sm text-gray-400">Population: <span class="font-bold">
        {{ country.population?.toLocaleString() }}
      </span></p>
    <p class="text-sm text-gray-400">Region: <span class="font-bold">
        {{ country.region }}
      </span></p>
    <p class="text-sm text-gray-400">Sub Region: <span class="font-bold">
        {{ country.subregion }}
      </span></p>
  </div>
</template>