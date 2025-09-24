<script lang="ts">
  import { Select, SelectItem, Theme } from "carbon-components-svelte";
  import Icon from "@iconify/svelte";
  import { preferencesOpen } from "$lib/stores/preferences";

  let selected = "g100";
  $: isOpen = $preferencesOpen;

  function handleMouseOver() {
    preferencesOpen.set(true);
  }

  function handleMouseLeave() {
    preferencesOpen.set(false);
  }

  function stopPropagation(event: Event) {
    event.stopPropagation();
  }
  function handleClick() {
    preferencesOpen.update(state => !state);
  }
</script>

<Theme theme={selected} />

<div
  class="preferences-panel"
  on:click={handleClick}
  class:open={isOpen}
>
  <h1 style="opacity: 0.8;">Preferences</h1>
  <div on:click={stopPropagation}>
    <Select labelText="Carbon theme" bind:selected>
      <SelectItem value="white" text="White" />
      <SelectItem value="g10" text="Gray 10" />
      <SelectItem value="g80" text="Gray 80" />
      <SelectItem value="g90" text="Gray 90" />
      <SelectItem value="g100" text="Dark" />
    </Select>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap');
  .preferences-panel {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);

    right: 0em;
    height: 97%;
    border-radius: 1em 0 0 1em;
    width: 300px;
    padding: 1rem;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transition: 200ms cubic-bezier(1, 0, 0.01, 1);
    z-index: 1004;
    border: 1px solid var(--cds-border-subtle, #e0e0e0);
  }
  .preferences-panel.open {
      opacity: 1;
      transform: translateY(-50%) translateX(90%);
    }

  @media (min-width: 768px) and (max-width: 1500px) {
    .preferences-panel {
      position: fixed;
      /* left: 0; */
      /* transform: translateX(-100%); */
      top: 50%;
      transform: translateY(-50%) translateX(90%);
      backdrop-filter: blur(1em);
      -webkit-backdrop-filter: blur(1em);
      -moz-backdrop-filter: blur(1em);
      border-right: 1px solid var(--cds-border-subtle, #e0e0e0);
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      opacity: 0.5;
      width: 250px;
    }
    .preferences-panel.open {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }
  }

  @media (max-width: 767px) {
    .preferences-panel {
      transform: translateX(-100%) translateY(-50%);
      width: 270px;
      position: fixed;
      left: 0;
      backdrop-filter: blur(1em);
      -webkit-backdrop-filter: blur(1em);
      -moz-backdrop-filter: blur(1em);

      border-right: 1px solid var(--cds-border-subtle, #e0e0e0);
      border-radius: 0 1em 1em 0;

      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    }
    .preferences-panel.open {
      transform: translateX(0) translateY(-50%);
    }
  }
</style>
