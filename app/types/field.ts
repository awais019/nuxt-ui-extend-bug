import type { FormFieldProps } from "@nuxt/ui";

export type FormField = FormFieldProps & {
  name: string;
  label: string;
  placeholder?: string;
};
