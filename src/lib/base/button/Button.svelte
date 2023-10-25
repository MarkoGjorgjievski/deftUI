<script lang="ts">
  import "./Button.css";
  import { twMerge } from "tailwind-merge";

  export let label: string = "";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let dataHsRemoveElement: string = "";

  export let size: "small" | "medium" | "large" = "medium";
  export let state: "solid" | "soft" | "outline" | "ghost" = "solid";

  // Use **shrink** when button contains only icon
  export let width: "shrink" | "full" | "" = "";
  export let variant:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "inverted"
    | "off-base"
    | "neutral" = "neutral";
</script>

<button
  on:click
  class={twMerge("btn", size, state, width, variant, loading && "loading")}
  {disabled}
  data-hs-remove-element={dataHsRemoveElement}
>
  {#if loading}
    <span class="sr-only">Loading...</span>
    <span role="status" aria-label="loading">
      <span class="sr-only">Loading...</span>
    </span>
  {/if}
  <slot name="iconStart" />
  {label}
  <slot name="iconEnd" />
</button>
