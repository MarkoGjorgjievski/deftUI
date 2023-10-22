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
  <Alert type="info" state="soft" dismissable icon id="dismiss-alert" />
</div>
