<script lang="ts">
  import "./Button.css";
  import { twMerge } from "tailwind-merge";

  export let label: string = "";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let dataHsRemoveElement: string = "";

  export let size: "small" | "medium" | "large" = "medium";
  export let type: "outline" | "ghost" | "" = "";
  export let state: "solid" | "soft" = "solid";

  // Use **shrink** when button contains only icon
  export let width: "shrink" | "full" | "" = "";
  export let variant:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "neutral" = "neutral";

  // const buttonVariant = new Map([
  //   ["primary", ""],
  //   ["info", ""],
  //   ["primary", ""],
  //   ["primary", ""],
  //   ["primary", ""],
  //   ["primary", ""],
  // ]);
</script>

<button
  on:click
  class={twMerge("btn", loading && "loading", $$props.class)}
  {disabled}
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
