<script lang="ts">
  import clsx from "@/helpers";

  export let state: "solid" | "outline" | "ghost" | "soft" | "white" | "link" =
    "white";
  export let size: "smaller" | "small" | "medium" | "large" = "medium";
  export let label: string = "";
  export let loading: boolean = false;
  export let disabled: boolean = false;
  // Use **shrink** when button contains only icon
  export let width: "shrink" | "full" | "default" = "default";
  export let dataHsRemoveElement: string = "";

  const btnCommonStyles =
    "inline-flex justify-center items-center gap-2 rounded-md font-semibold transition-all text-sm focus:ring-2 focus:ring-offset-2";

  const buttonState = new Map([
    [
      "solid",
      "border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-blue-500 dark:focus:ring-offset-gray-800",
    ],
    [
      "outline",
      "!py-[.688rem] border-2 border-gray-200 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none  dark:border-gray-700 dark:hover:border-blue-500",
    ],
    [
      "ghost",
      "border border-transparent text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
    ],
    [
      "soft",
      "bg-blue-100 border border-transparent text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none ring-offset-white focus:ring-blue-500",
    ],
    [
      "white",
      "border !font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800",
    ],
    [
      "link",
      "border border-transparent text-blue-500 hover:text-blue-700 focus:outline-none ring-offset-white focus:ring-blue-500",
    ],
  ]);

  const buttonSize = new Map([
    ["smaller", "py-1 px-2 text-xs"],
    ["small", "py-2 px-3"],
    ["medium", "py-3 px-4"],
    ["large", "py-3 px-4 sm:!p-5"],
  ]);

  const buttonShrinkSize = new Map([
    ["smaller", "h-[1.375rem] w-[1.375rem]"],
    ["small", "h-[2.375rem] w-[2.375rem]"],
    ["medium", "h-[2.875rem] w-[2.875rem]"],
    ["large", "h-[3.875rem] w-[3.875rem]"],
  ]);

  const buttonWidth = new Map([
    ["shrink", "flex-shrink-0"],
    ["full", "w-full"],
  ]);
</script>

<button
  type="button"
  class={clsx(
    btnCommonStyles,
    buttonState.get(state),
    width === "shrink" ? buttonShrinkSize.get(size) : buttonSize.get(size),
    buttonWidth.get(width),
    (disabled || loading) && "cursor-not-allowed"
  )}
  disabled={disabled || loading}
  data-hs-remove-element={dataHsRemoveElement}
  on:click
>
  {#if loading}
    <span class="sr-only">Loading...</span>
    <span
      class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-500 dark:text-white rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </span>
  {/if}
  <slot name="iconStart" />
  {label}
  <slot name="iconEnd" />
</button>
