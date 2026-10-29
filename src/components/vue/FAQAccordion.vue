<template>
  <div class="space-y-3">
    <div v-for="(item, idx) in items" :key="idx" class="rounded-2xl border border-border bg-surface">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
        :aria-expanded="openIndex === idx"
        @click="toggle(idx)"
      >
        <span class="font-display text-base font-semibold text-text">{{ item.question }}</span>
        <ChevronDown class="h-5 w-5 text-text-muted transition-transform" :class="openIndex === idx ? 'rotate-180' : ''" />
      </button>
      <transition
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-150 ease-in"
      >
        <div v-show="openIndex === idx" class="px-6 pb-5 text-sm leading-relaxed text-text-muted">
          {{ item.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown } from '@lucide/vue';

interface FaqItem {
  question: string;
  answer: string;
}

const props = defineProps<{ items: FaqItem[] }>();
const openIndex = ref<number | null>(0);

function toggle(idx: number) {
  openIndex.value = openIndex.value === idx ? null : idx;
}
</script>