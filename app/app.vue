<script lang="ts" setup>
  import { subYears } from "date-fns";
  import z from "zod";

  let schema = z.object({
    date: z
      .date({
        error: "Date is required",
      })
      .max(subYears(new Date(), 18), {
        message: "Minimum age sbould be above 18",
      })
      .min(subYears(new Date(), 100), {
        message: "Maximum age should be below 100",
      }),
  });

  type Schema = z.output<typeof schema>;

  const state = reactive<Schema>({
    date: new Date(),
  });
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UForm :state="state" :schema="schema">
      <DatePicker v-model="state.date" />
      <UButton type="submit">Submit</UButton>
    </UForm>
  </div>
</template>
