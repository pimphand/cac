<template>
  <div class="rounded-3xl bg-surface/10 p-6 sm:p-8 backdrop-blur">
    <form @submit.prevent="submit" class="space-y-4" novalidate>
      <div>
        <label for="parentName" class="block text-sm font-medium text-white">{{ t.admission.form.parentName }}</label>
        <input
          id="parentName"
          v-model="form.parentName"
          type="text"
          required
          class="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-2.5 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p v-if="errors.parentName" class="mt-1 text-xs text-accent">{{ errors.parentName }}</p>
      </div>

      <div>
        <label for="childName" class="block text-sm font-medium text-white">{{ t.admission.form.childName }}</label>
        <input
          id="childName"
          v-model="form.childName"
          type="text"
          required
          class="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-2.5 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p v-if="errors.childName" class="mt-1 text-xs text-accent">{{ errors.childName }}</p>
      </div>

      <div>
        <label for="birthDate" class="block text-sm font-medium text-white">{{ t.admission.form.birthDate }}</label>
        <input
          id="birthDate"
          v-model="form.birthDate"
          type="date"
          required
          class="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-2.5 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p v-if="errors.birthDate" class="mt-1 text-xs text-accent">{{ errors.birthDate }}</p>
      </div>

      <div>
        <label for="program" class="block text-sm font-medium text-white">{{ t.admission.form.program }}</label>
        <select
          id="program"
          v-model="form.program"
          required
          class="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-2.5 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{{ t.admission.form.programPlaceholder }}</option>
          <option value="toddler">{{ t.admission.form.toddler }}</option>
          <option value="preschool">{{ t.admission.form.preschool }}</option>
          <option value="individualized">{{ t.admission.form.individualized }}</option>
        </select>
        <p v-if="errors.program" class="mt-1 text-xs text-accent">{{ errors.program }}</p>
      </div>

      <div>
        <label for="whatsapp" class="block text-sm font-medium text-white">{{ t.admission.form.whatsapp }}</label>
        <input
          id="whatsapp"
          v-model="form.whatsapp"
          type="tel"
          required
          :placeholder="t.admission.form.whatsappPlaceholder"
          class="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-2.5 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p v-if="errors.whatsapp" class="mt-1 text-xs text-accent">{{ errors.whatsapp }}</p>
      </div>

      <div>
        <label for="notes" class="block text-sm font-medium text-white">{{ t.admission.form.notes }}</label>
        <textarea
          id="notes"
          v-model="form.notes"
          rows="3"
          class="mt-1 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-2.5 text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text transition hover:opacity-90 disabled:opacity-60"
      >
        {{ submitting ? t.admission.form.submitting : t.admission.form.submit }}
      </button>

      <p v-if="statusMessage" class="text-sm" :class="statusType === 'success' ? 'text-white' : 'text-accent'">
        {{ statusMessage }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { useTranslations, type Locale } from '../../i18n/ui';

const props = defineProps<{ locale?: Locale }>();
const locale = props.locale ?? 'id';
const t = computed(() => useTranslations(locale));

interface FormState {
  parentName: string;
  childName: string;
  birthDate: string;
  program: string;
  whatsapp: string;
  notes: string;
}

const form = reactive<FormState>({
  parentName: '',
  childName: '',
  birthDate: '',
  program: '',
  whatsapp: '',
  notes: '',
});

const errors = reactive<Record<string, string>>({});
const submitting = ref(false);
const statusMessage = ref('');
const statusType = ref<'success' | 'error'>('success');

function validate(): boolean {
  Object.keys(errors).forEach((k) => delete errors[k]);
  if (!form.parentName.trim()) errors.parentName = t.value.admission.form.validation.parentName;
  if (!form.childName.trim()) errors.childName = t.value.admission.form.validation.childName;
  if (!form.birthDate) errors.birthDate = t.value.admission.form.validation.birthDate;
  if (!form.program) errors.program = t.value.admission.form.validation.program;
  if (!form.whatsapp.trim()) errors.whatsapp = t.value.admission.form.validation.whatsapp;
  else if (!/^08\d{8,11}$/.test(form.whatsapp.trim())) errors.whatsapp = t.value.admission.form.validation.whatsappInvalid;
  return Object.keys(errors).length === 0;
}

async function submit() {
  statusMessage.value = '';
  if (!validate()) return;
  submitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
    statusType.value = 'success';
    statusMessage.value = t.value.admission.form.success;
  } catch {
    statusType.value = 'error';
    statusMessage.value = t.value.admission.form.error;
  } finally {
    submitting.value = false;
  }
}
</script>
