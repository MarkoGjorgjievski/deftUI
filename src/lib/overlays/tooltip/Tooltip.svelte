<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let message: string = "";
  export let placement: "top" | "bottom" | "left" | "right" = "top";

  const position = new Map([
    ["top", "[--placement:top]"],
    ["bottom", "[--placement:bottom]"],
    ["left", "[--placement:left]"],
    ["right", "[--placement:right]"],
  ]);
</script>

<span class={twMerge("hs-tooltip inline-block", position.get(placement))}>
  <span class="hs-tooltip-toggle">
    <slot />
    <span
      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
      role="tooltip"
    >
      {message}
    </span>
  </span>
</span>
