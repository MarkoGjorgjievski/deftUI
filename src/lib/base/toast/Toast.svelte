<script lang="ts">
  import "./Toast.css";
  import { twMerge } from "tailwind-merge";
  import type { State, Variant } from "../types";
  import Button from "../button/Button.svelte";

  export let variant: Variant = "neutral";
  export let state: State = "solid";

  export let action: boolean = false;
  export let title: string = ""; // App notifications
  export let message: string =
    "Notifications may include alerts, sounds and icon badges.";
</script>

<div
  class={twMerge(
    "toast",
    variant,
    state,
    "max-w-xs border rounded-md shadow-lg"
  )}
  role="alert"
>
  <div class="flex p-4">
    <div class="flex-shrink-0">
      <svg
        class={twMerge(
          variant === "neutral" ? "text-primary" : "text-current",
          "h-4 w-4 mt-0.5"
        )}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
      </svg>
    </div>
    <div
      class={twMerge(
        title ? "ml-4" : "ml-3",
        state === "soft" ? "text-inverted dark:text-base" : "text-current"
      )}
    >
      {#if title}<h3 class="font-semibold">{title}</h3>{/if}
      <!-- if no title, message text - current -->
      <div class={twMerge(title && "mt-1", "text-sm")}>
        {message}
      </div>
      {#if action}<div class="mt-4">
          <div class="flex space-x-3 text-sm font-semibold">
            <button class="underline">Don't allow</button>
            <Button size="small" label="Allow" />
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
