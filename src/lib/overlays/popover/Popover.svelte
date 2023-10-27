<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let placement: "top" | "bottom" | "left" | "right" = "top";
  export let trigger: "hover" | "focus" | "click" = "click";

  const trg = new Map([
    ["focus", "[--placement:focus]"],
    ["hover", "[--trigger:hover]"],
    ["click", "[--trigger:click]"],
  ]);

  const position = new Map([
    ["top", "[--placement:top]"],
    ["bottom", "[--placement:bottom]"],
    ["left", "[--placement:left]"],
    ["right", "[--placement:right]"],
  ]);
</script>

<div
  class={twMerge(
    "hs-tooltip inline-block",
    trg.get(trigger),
    position.get(placement)
  )}
>
  <a class="hs-tooltip-toggle block text-center" href="javascript:;">
    <slot name="element" />
    <span
      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 bg-base border border-base-200 shadow-sm rounded-md"
      role="tooltip"
    >
      <slot name="content" />
    </span>
  </a>
</div>
