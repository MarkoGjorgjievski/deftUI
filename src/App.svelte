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
<div class="flex gap-2 p-3 h-40">
  <Button variant="primary" label="Button" size="small" disabled />
  <Button variant="primary" label="Button" size="small" />
  <Button variant="info" label="Button" />
  <Button variant="success" label="Button" />
  <Button variant="warning" label="Button" />
  <Button variant="danger" label="Button" />
  <Button variant="inverted" label="Button" />
  <Button variant="off-base" label="Button" />
  <Button variant="neutral" label="Button" size="large" />
</div>

<div class="flex gap-2 p-3">
  <Button variant="primary" state="soft" label="Button" />
  <Button variant="info" state="soft" label="Button" />
  <Button variant="success" state="soft" label="Button" />
  <Button variant="warning" state="soft" label="Button" />
  <Button variant="danger" state="soft" label="Button" />
</div>

<div class="flex gap-2 p-3">
  <Button variant="primary" state="outline" label="Button" />
  <Button variant="info" state="outline" label="Button" />
  <Button variant="success" state="outline" label="Button" />
  <Button variant="warning" state="outline" label="Button" />
  <Button variant="danger" state="outline" label="Button" />
  <Button variant="inverted" state="outline" label="Button" />
  <Button variant="off-base" state="outline" label="Button" />
</div>

<div class="flex gap-2 p-3">
  <Button variant="primary" state="ghost" label="Button" />
  <Button variant="info" state="ghost" label="Button" />
  <Button variant="success" state="ghost" label="Button" />
  <Button variant="warning" state="ghost" label="Button" />
  <Button variant="danger" state="ghost" label="Button" />
  <Button variant="inverted" state="ghost" label="Button" />
  <Button variant="off-base" state="ghost" label="Button" />
</div>
