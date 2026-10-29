<template>
  <div class="grid gap-8 lg:grid-cols-2">
    <div class="space-y-3">
      <button
        v-for="(p, idx) in principles"
        :key="p.title"
        type="button"
        class="w-full rounded-2xl border px-5 py-4 text-left transition"
        :class="active === idx ? 'border-primary bg-primary text-white shadow-md' : 'border-border bg-surface text-text hover:border-primary/40'"
        @click="active = idx"
      >
        <span class="font-display text-base font-semibold">{{ p.title }}</span>
      </button>
    </div>
    <div class="rounded-3xl border border-border bg-surface p-8 shadow-sm">
      <h3 class="font-display text-2xl font-semibold text-text">{{ principles[active].title }}</h3>
      <p class="mt-4 text-base leading-relaxed text-text-muted">{{ principles[active].description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Principle {
  title: string;
  description: string;
}

const props = defineProps<{ principles: Principle[] }>();
const active = ref(0);
</script>