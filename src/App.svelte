<script>
  import Badge from "./lib/base/badge/Badge.svelte";
  import ButtonGroup from "./lib/base/button-group/ButtonGroup.svelte";
  import Button from "./lib/base/button/Button.svelte";
  import Alert from "./lib/base/alert/Alert.svelte";
  import ThemeSwitcher from "./theme-switcher/ThemeSwitcher.svelte";
  import Accordion from "./lib/base/accordion/Accordion.svelte";
  import AccordionGroup from "./lib/base/accordion/AccordionGroup.svelte";
  import Avatar from "./lib/base/Avatar/Avatar.svelte";
  import Tabs from "./lib/navigation/tabs/Tabs.svelte";
  import Tab from "./lib/navigation/tabs/Tab.svelte";
  import TabPanel from "./lib/navigation/tabs/TabPanel.svelte";

  const tabs = [
    { slug: "first", label: "First" },
    { slug: "second", label: "Second" },
    { slug: "third", label: "Third" },
  ];
</script>

<div class="flex gap-4">
  <div>
    <div class="p-3">
      <ThemeSwitcher />
    </div>

    <div class="p-4 gap-2 w-full">
      <Tabs {tabs} />
    </div>

    <div class="p-4 flex gap-2">
      <div class="p-3 flex gap-2">
        <Avatar size="smallest" />
        <Avatar size="small" active />
        <Avatar />
        <Avatar size="large" />
      </div>
      <div class="p-3 flex gap-2">
        <Avatar size="smallest" rounded="medium" />
        <Avatar size="small" rounded="medium" />
        <Avatar rounded="medium" active />
        <Avatar size="large" rounded="medium" />
      </div>
      <div class="flex -space-x-2">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>

      <div class="p-3 bg-base-100 text-base-content border border-base-300">
        <div>base-100</div>
      </div>

      <div class="p-3 bg-base-200 text-base-content">
        <div>base-200</div>
      </div>

      <div class="p-3 bg-base-300 text-base-content">
        <div>base-300</div>
      </div>
    </div>

    <div class="p-4">
      <ButtonGroup>
        <Button label="Button" variant="grouped" size="small" />
        <Button label="Button" variant="grouped" size="small" />
        <Button label="Button" variant="grouped" size="small" />
        <Button label="Button" variant="grouped" size="small" />
      </ButtonGroup>
    </div>

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

    <div class="p-4">
      <Badge variant="primary" state="soft" label="Badge" />
      <Badge variant="success" label="Badge" />
    </div>

    <div class="p-4">
      <AccordionGroup>
        <Accordion id="1" title="Accordion 1" content="This is content 1" />
        <Accordion id="2" title="Accordion 2" content="This is content 2" />
      </AccordionGroup>
    </div>
  </div>

  <div>
    <div class="p-4 flex flex-col gap-2">
      <Alert
        variant="info"
        state="solid"
        actionButtons={{
          confirm: { onClick: () => console.log("confirm"), label: "Confirm" },
          reject: { onClick: () => console.log("reject"), label: "Reject" },
        }}
      />
      <Alert variant="info" state="soft" id="info-soft" dismissible />
      <Alert variant="success" state="solid" />
      <Alert variant="success" state="soft" />
      <Alert variant="warning" state="solid" />
      <Alert variant="warning" state="soft" />
      <Alert variant="danger" state="solid" />
      <Alert variant="danger" state="soft" />

      <Alert variant="neutral" />
    </div>
  </div>
</div>
