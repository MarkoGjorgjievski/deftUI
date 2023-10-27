<script lang="ts">
  import { twMerge } from "tailwind-merge";
  //   import "./Accordion.css";

  export let title: string = "";
  export let content: string = "";
  export let id: string = "";
  export let bordered: boolean = false;
</script>

<div class={twMerge("hs-accordion", bordered && "bordered")} {id}>
  <button
    class="hs-accordion-toggle hs-accordion-active:text-primary group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
    aria-controls={id}
  >
    <svg
      class="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg
      class="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    {title}
  </button>
  <div
    {id}
    class="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300"
    aria-labelledby={id}
  >
    <div class="content">
      <p class="text-gray-800 dark:text-gray-200">{content}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .bordered {
    @apply border -mt-px bg-base-100 border-base-200 first:rounded-t-lg last:rounded-b-lg;
    button {
      @apply py-4 px-5;
    }
    .content {
      @apply pb-4 px-5;
    }
  }
</style>
