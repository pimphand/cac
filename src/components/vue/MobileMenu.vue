<template>
  <div class="lg:hidden">
    <button
      type="button"
      class="inline-flex items-center justify-center rounded-full p-2 text-text hover:bg-soft-yellow focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Buka menu navigasi"
      :aria-expanded="open"
      aria-controls="mobile-menu-panel"
      @click="open = !open"
    >
      <Menu v-if="!open" class="h-6 w-6" />
      <X v-else class="h-6 w-6" />
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        id="mobile-menu-panel"
        class="absolute inset-x-0 top-20 border-t border-border bg-background/98 backdrop-blur shadow-lg"
      >
        <ul class="flex flex-col gap-1 px-4 py-4">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-xl px-4 py-3 text-base font-medium text-text hover:bg-soft-yellow hover:text-primary"
              @click="open = false"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              :href="contactHref"
              class="mt-2 block rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-white"
              @click="open = false"
            >
              {{ t.nav.contact }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Menu, X } from '@lucide/vue';
import { useTranslations, type Locale } from '../../i18n/ui';

const props = defineProps<{ locale: Locale }>();
const t = computed(() => useTranslations(props.locale));

const links = computed(() => [
  { label: t.value.nav.home, href: props.locale === 'en' ? '/en/' : '/' },
  { label: t.value.nav.about, href: props.locale === 'en' ? '/en/about' : '/about' },
  { label: t.value.nav.programs, href: props.locale === 'en' ? '/en/programs' : '/programs' },
  { label: t.value.nav.montessori, href: props.locale === 'en' ? '/en/montessori' : '/montessori' },
  { label: t.value.nav.gallery, href: props.locale === 'en' ? '/en/gallery' : '/gallery' },
  { label: t.value.nav.faq, href: (props.locale === 'en' ? '/en/' : '/') + '#faq' },
]);

const contactHref = computed(() => (props.locale === 'en' ? '/en/contact' : '/contact'));

const open = ref(false);
</script>