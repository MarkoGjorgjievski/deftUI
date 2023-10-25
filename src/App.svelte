<script>
  import Alert from "./lib/base/alert/Alert.svelte";
  import Button from "./lib/base/button/Button.svelte";
  import ThemeSwitcher from "./theme-switcher/ThemeSwitcher.svelte";
</script>

<ThemeSwitcher />

<div class="p-3 m-3 text-base-content border border-base-300">
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
  <Button class="primary solid" label="Button" />
  <Button class="info solid" label="Button" />
  <Button class="success solid" label="Button" />
  <Button class="warning solid" label="Button" />
  <Button class="danger solid" label="Button" />
  <Button class="inverted solid" label="Button" />
  <Button class="off-base solid" label="Button" />
  <Button class="neutral" label="Button" />
</div>

<div class="flex gap-2 p-3">
  <Button class="primary soft" label="Button" />
  <Button class="info soft" label="Button" />
  <Button class="success soft" label="Button" />
  <Button class="warning soft" label="Button" />
  <Button class="danger soft" label="Button" />
</div>

<div class="flex gap-2 p-3">
  <Button class="primary outline" label="Button" />
  <Button class="info outline" label="Button" />
  <Button class="success outline" label="Button" />
  <Button class="warning outline" label="Button" />
  <Button class="danger outline" label="Button" />
  <Button class="inverted outline" label="Button" />
  <Button class="off-base outline" label="Button" />
</div>

<div class="flex gap-2 p-3">
  <Button class="primary ghost" label="Button" />
  <Button class="info ghost" label="Button" />
  <Button class="success ghost" label="Button" />
  <Button class="warning ghost" label="Button" />
  <Button class="danger ghost" label="Button" />
  <Button class="inverted ghost" label="Button" />
  <Button class="off-base ghost" label="Button" />
</div>
