<script>
  import Alert from "./lib/base/alert/Alert.svelte";
  import ButtonGroup from "./lib/base/button-group/ButtonGroup.svelte";
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
<ButtonGroup>
  <Button label="Button" variant="grouped" size="small" />
  <Button label="Button" variant="grouped" size="small" />
  <Button label="Button" variant="grouped" size="small" />
  <Button label="Button" variant="grouped" size="small" />
</ButtonGroup>

<ButtonGroup direction="vertical">
  <Button label="Button" variant="grouped" />
  <Button label="Button" variant="grouped" />
  <Button label="Button" variant="grouped" />
  <Button label="Button" variant="grouped" />
</ButtonGroup>

<ButtonGroup direction="break">
  <Button label="Button" variant="grouped" size="large" />
  <Button label="Button" variant="grouped" size="large" />
  <Button label="Button" variant="grouped" size="large" />
  <Button label="Button" variant="grouped" size="large" />
</ButtonGroup>

<div class="flex gap-2 p-3">
  <Button variant="primary" label="Button" size="small" disabled />
  <Button variant="primary" label="Button" size="small" loading />
  <Button variant="info" label="Button" />
  <Button variant="success" label="Button" />
  <Button variant="warning" label="Button" />
  <Button variant="danger" label="Button" />
  <Button variant="inverted" label="Button" />
  <Button variant="off-base" label="Button" />
  <Button variant="neutral" label="Button" size="large" />
</div>

<div class="flex gap-2 p-3">
  <Button variant="primary" state="soft" label="Button" loading />
  <Button variant="info" state="soft" label="Button" />
  <Button variant="success" state="soft" label="Button" />
  <Button variant="warning" state="soft" label="Button" disabled />
  <Button variant="danger" state="soft" label="Button" loading />
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

<div class="inline-flex rounded-md shadow-sm">
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
  >
    Small
  </button>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
  >
    Small
  </button>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
  >
    Small
  </button>
</div>

<div class="inline-flex rounded-md shadow-sm">
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 sm:p-4"
  >
    Default
  </button>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 sm:p-4"
  >
    Default
  </button>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 sm:p-4"
  >
    Default
  </button>
</div>

<div class="inline-flex rounded-md shadow-sm">
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 sm:p-[1.3125rem]"
  >
    Large
  </button>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 sm:p-[1.3125rem]"
  >
    Large
  </button>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 sm:p-[1.3125rem]"
  >
    Large
  </button>
</div>
