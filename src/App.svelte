<script>
  import Alert from "./lib/base/alert/Alert.svelte";
  import Button from "./lib/base/button/Button.svelte";
  import ThemeSwitcher from "./theme-switcher/ThemeSwitcher.svelte";
</script>

<ThemeSwitcher />

<div class="p-8">
  <Button size="smaller" label="Button" state="white" />
</div>

<div class="p-8">
  <Alert type="discovery" state="soft" dismissable icon id="dismiss-alert" />
</div>

<div class="p-3 m-3 bg-danger-soft text-danger border-danger border">
  <div>Hello</div>
</div>

<div class="p-3 m-3 bg-warning-soft text-warning border-warning border">
  <div>Hello</div>
</div>

<div class="p-3 m-3 bg-success-soft text-success border-success border">
  <div>Hello</div>
</div>

<div class="p-3 m-3 bg-base-100 text-info border-info border">
  <div>Hello</div>
</div>
