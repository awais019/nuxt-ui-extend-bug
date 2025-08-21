<script lang="ts"></script>

<script lang="ts" setup>
  import { CalendarDate, getLocalTimeZone } from "@internationalized/date";

  const model = defineModel<Date | undefined>({
    default: undefined,
  });

  const modelDate = computed({
    get: () => {
      const date = model.value ? new Date(model.value) : undefined;
      return date
        ? new CalendarDate(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
          )
        : undefined;
    },
    set: (value) => {
      model.value = value ? value.toDate(getLocalTimeZone()) : undefined;
    },
  });

  const showCalendar = ref(false);
</script>

<template>
  <UFormField name="date">
    <UPopover v-model:open="showCalendar">
      <UButton
        color="neutral"
        variant="subtle"
        icon="i-lucide-calendar-days"
        class="group-[:has([id*='error'])]:focus-visible:ring-error group-[:has([id*='error'])]:ring-error w-full"
        :ui="{ leadingIcon: modelDate ? '' : 'text-dimmed' }"
        @click="showCalendar = true"
      >
        <NuxtTime
          v-if="modelDate"
          :datetime="modelDate.toDate(getLocalTimeZone())"
          date-style="medium"
        />
      </UButton>
      <template #content>
        <UCalendar
          v-model="modelDate"
          class="p-2"
          @update:model-value="showCalendar = false"
        />
      </template>
    </UPopover>
  </UFormField>
</template>
