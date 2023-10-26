<script lang="ts">
  import Loader from "../loader/Loader.svelte";
  import "./Button.css";
  import { twMerge } from "tailwind-merge";

  import type {
    ButtonSize,
    ButtonState,
    ButtonVariant,
    ButtonWidth,
  } from "./ButtonTypes";

  export let label: string = "";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let dataHsRemoveElement: string = "";
  export let size: ButtonSize = "medium";
  export let state: ButtonState = "solid";
  export let variant: ButtonVariant = "neutral";
  // Use **shrink** when button contains only icon
  export let width: ButtonWidth = "";
</script>

<button
  on:click
  class={twMerge("btn", size, state, width, variant, loading && "loading")}
  {disabled}
  data-hs-remove-element={dataHsRemoveElement}
>
  {#if loading}
    <Loader />
  {/if}
  <slot name="iconStart" />
  {label}
  <slot name="iconEnd" />
</button>
