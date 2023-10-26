<script lang="ts">
  import Loader from "../loader/Loader.svelte";
  import "./Button.css";
  import { twMerge } from "tailwind-merge";

  import type { Size, State, Variant, Width } from "../types";

  export let label: string = "";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let dataHsRemoveElement: string = "";
  export let size: Size = "medium";
  export let state: State | "outline" | "ghost" = "solid";
  export let variant: Variant = "neutral";
  // Use **shrink** when  contains only icon
  export let width: Width = "";
</script>

<button
  on:click
  class={twMerge("btn", size, state, width, variant, loading && "loading")}
  {disabled}
  data-hs-remove-element={dataHsRemoveElement}
  type="button"
>
  {#if loading}
    <Loader />
  {/if}
  <slot name="iconStart" />
  {label}
  <slot name="iconEnd" />
</button>
