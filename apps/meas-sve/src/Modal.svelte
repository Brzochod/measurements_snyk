<script>
  export let open = false;
</script>

{#if open}
  <div class="backdrop">
    <div class="container">
      <slot />
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, .25)
  }

  .container {

  }
</style>