<script>
  import Alert from "./lib/base/alert/Alert.svelte";
  import Button from "./lib/base/button/Button.svelte";
  import ThemeSwitcher from "./theme-switcher/ThemeSwitcher.svelte";
</script>

<ThemeSwitcher />

<div class="p-3 m-3 text-base-content border">
  <div>base</div>
</div>

<div class="p-3 m-3 bg-base-100 text-base-content border border-base-300">
  <div>base-100</div>
</div>

<div class="p-3 m-3 bg-base-200 text-base-content">
  <div>base-200</div>
</div>

<div class="p-3 m-3 bg-base-300 text-base-content">
  <div>base-300</div>
</div>
<div class="flex gap-2 p-3">
  <button class="btn bg-primary text-primary-content focus:ring-offset-primary"
    >Button</button
  >
  <button class="btn bg-info text-primary-content">Button</button>
  <button class="btn bg-success text-primary-content">Button</button>
  <button class="btn bg-warning text-primary-content">Button</button>
  <button class="btn bg-danger text-primary-content">Button</button>
  <button class="btn bg-base border border-base-200 text-base-content shadow-sm"
    >Button</button
  >
</div>

<div class="flex gap-2 p-3">
  <button class="btn bg-primary-soft text-primary">Button</button>
  <button class="btn bg-info-soft text-info">Button</button>
  <button class="btn bg-success-soft text-success">Button</button>
  <button class="btn bg-warning-soft text-warning">Button</button>
  <button class="btn bg-danger-soft text-danger">Button</button>
  <button class="btn bg-base-100 text-base-content">Button</button>
</div>
