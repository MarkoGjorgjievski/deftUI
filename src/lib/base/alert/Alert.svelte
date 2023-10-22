<script lang="ts">
  import clsx from "@/helpers";
  import Button from "../button/Button.svelte";

  export let title: string = "Alert";
  export let description: string = "Description";
  export let state: "solid" | "soft" = "solid";
  export let type:
    | "dark"
    | "secondary"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "discovery" = "dark";
  export let icon: boolean = false;
  export let actionButtons: Array<string> = [];
  export let dismissable: boolean = false;
  // always pass ID when alert is dismissable
  export let id: string = "";
  export let onDismissClick: () => unknown | null = () => null;

  const commonAlertStyles = "text-sm p-4 rounded-md";
  const dismissStyles =
    "hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300";

  const solidAlertStyles = new Map([
    ["dark", "bg-gray-800 text-white dark:bg-white dark:text-gray-800"],
    ["secondary", "bg-gray-500"],
    ["info", "bg-blue-500 text-white"],
    ["success", "bg-green-500 text-white"],
    ["danger", "bg-red-500 text-white"],
    ["warning", "bg-orange-500 text-white"],
    ["light", "bg-white text-gray-600"],
    [
      "discovery",
      "bg-white border shadow-lg dark:bg-gray-800 dark:border-gray-700",
    ],
  ]);

  const softAlertStyles = new Map([
    ["dark", "bg-gray-50 border border-gray-200 text-gray-600"],
    ["secondary", "bg-gray-800/[.1] border border-gray-200 text-gray-600"],
    ["info", "bg-blue-50 border border-blue-200 text-blue-600"],
    ["success", "bg-green-50 border border-green-200 text-green-600"],
    ["danger", "bg-red-50 border border-red-200 text-red-600"],
    ["warning", "bg-orange-50 border border-orange-200 text-orange-600"],
    ["light", "bg-white/[.1] border border-white/[.1] text-gray-600"],
    [
      "discovery",
      "bg-white border shadow-lg dark:bg-gray-800 dark:border-gray-700",
    ],
  ]);

  const alertState = new Map([
    ["solid", solidAlertStyles],
    ["soft", softAlertStyles],
  ]);

  const alertIconFill = new Map([
    ["info", "blue"],
    ["discovery", "blue"],
    ["success", "green"],
    ["danger", "red"],
    ["warning", "orange"],
  ]);

  const alertIcons = new Map([
    ["info", "bi bi-info-circle-fill"],
    ["success", "bi bi-check-circle-fill"],
    ["warning", "bi bi-exclamation-triangle-fill"],
    ["danger", "bi bi-exclamation-octagon-fill"],
    ["discovery", "bi bi-info-circle-fill"],
  ]);

  $: if (actionButtons.length) {
    state = "soft";
  }
</script>

<div
  class={clsx(
    commonAlertStyles,
    alertState.get(state)?.get(type),
    dismissable && dismissStyles
  )}
  role="alert"
  {id}
>
  <div class="flex">
    {#if icon}
      <div class="flex-shrink-0">
        <i
          class={clsx(
            alertIcons.get(type),
            state === "solid"
              ? "text-white"
              : `text-${alertIconFill.get(type)}-500`
          )}
        />
      </div>
    {/if}
    <div class={clsx(icon && "ml-4")}>
      <h3
        class={clsx(
          type === "discovery"
            ? "text-gray-800 dark:text-white"
            : `text-small text-${alertIconFill.get(type)}-800 text-sm`,
          "font-semibold"
        )}
      >
        {title}
      </h3>
      <div
        class={clsx(
          "mt-1 text-sm",
          type === "discovery"
            ? "text-gray-700 dark:text-white"
            : `text-${alertIconFill.get(type)}-700`
        )}
      >
        {description}
      </div>
      {#if actionButtons.length}
        <div class="-mx-3 -mb-3 mt-2">
          <Button label="Don't allow" state="ghost" size="small" />
          <Button label="Allow" state="ghost" size="small" />
        </div>
      {/if}
    </div>
    {#if dismissable}
      <div class="pl-3 ml-auto">
        <div class="-mx-1.5 -my-1.5">
          <Button
            width="shrink"
            state="ghost"
            size="smaller"
            dataHsRemoveElement="#{id}"
            on:click={onDismissClick}
          >
            <span slot="iconStart"
              ><i
                class={clsx(
                  "bi bi-x",
                  state === "solid"
                    ? "text-white"
                    : `text-${alertIconFill.get(type)}-500`
                )}
              /></span
            >
          </Button>
        </div>
      </div>
    {/if}
  </div>
</div>
