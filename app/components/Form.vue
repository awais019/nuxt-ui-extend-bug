<script lang="ts">
  import type { Form, FormProps, FormSchema } from "@nuxt/ui";
  import type { FormField } from "~/types/field";

  interface AuthFormProps extends FormProps<FormSchema> {
    fields: FormField[];
  }
</script>

<script lang="ts" setup>
  defineProps<AuthFormProps>();
</script>

<template>
  <div>Form</div>
</template>
