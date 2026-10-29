<template>
  <div>
    <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
      <button
        v-for="(img, idx) in images"
        :key="img.src"
        type="button"
        class="mb-4 block w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
        @click="openAt(idx)"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          width="640"
          height="480"
          loading="lazy"
          class="w-full object-cover transition duration-500 hover:scale-105"
        />
      </button>
    </div>

    <teleport to="body">
      <transition name="fade">
        <div
          v-if="activeIndex !== null"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          @keydown.esc="close"
          tabindex="0"
          ref="dialogRef"
        >
          <button
            type="button"
            class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            :aria-label="closeLabel"
            @click="close"
          >
            <X class="h-6 w-6" />
          </button>
          <button
            type="button"
            class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            :aria-label="prevLabel"
            @click="prev"
          >
            <ChevronLeft class="h-6 w-6" />
          </button>
          <img
            :src="images[activeIndex].src"
            :alt="images[activeIndex].alt"
            class="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />
          <button
            type="button"
            class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            :aria-label="nextLabel"
            @click="next"
          >
            <ChevronRight class="h-6 w-6" />
          </button>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { X, ChevronLeft, ChevronRight } from '@lucide/vue';

interface GalleryImage {
  src: string;
  alt: string;
}

const props = defineProps<{
  images: GalleryImage[];
  closeLabel?: string;
  prevLabel?: string;
  nextLabel?: string;
}>();

const closeLabel = props.closeLabel ?? 'Close gallery';
const prevLabel = props.prevLabel ?? 'Previous image';
const nextLabel = props.nextLabel ?? 'Next image';

const activeIndex = ref<number | null>(null);

function openAt(idx: number) {
  activeIndex.value = idx;
}
function close() {
  activeIndex.value = null;
}
function prev() {
  if (activeIndex.value === null) return;
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
}
function next() {
  if (activeIndex.value === null) return;
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
}

function onKey(e: KeyboardEvent) {
  if (activeIndex.value === null) return;
  if (e.key === 'Escape') close();
  else if (e.key === 'ArrowLeft') prev();
  else if (e.key === 'ArrowRight') next();
}

onMounted(() => window.addEventListener('keydown', onKey));
onUnmounted(() => window.removeEventListener('keydown', onKey));
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
