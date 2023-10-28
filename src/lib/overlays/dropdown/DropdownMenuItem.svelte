<script lang="ts">
  export let icon: string = "";
  export let href: string = "#";
  export let label: string = "";
</script>

<a
  class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
  {href}
>
  {#if icon}
    <i class="bi bi-{icon}" />
  {/if}
  {label}
</a>
