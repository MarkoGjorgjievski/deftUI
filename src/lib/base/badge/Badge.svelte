<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import type { State, Variant } from "../types";

  export let variant: Variant = "off-base";
  export let state: State = "solid";
  export let label: string = "";
</script>

<span
  class={twMerge(
    "inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium",
    variant,
    state
  )}
>
  <slot name="iconStart" />
  {label}
  <slot name="iconEnd" /></span
>
