<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import "./ButtonGroup.css";
  import type { ButtonSize } from "../button/ButtonTypes";

  export let direction: "break" | "vertical" | "" = "";
  export let size: ButtonSize = "medium";
</script>

<div class={twMerge("button-group", direction)}>
  <slot {size} state="grouped" />
</div>
