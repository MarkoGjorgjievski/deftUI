<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import "./ButtonGroup.css";

  export let direction: "break" | "vertical" | "" = "";
</script>

<div class={twMerge("button-group", direction)}>
  <slot />
</div>
