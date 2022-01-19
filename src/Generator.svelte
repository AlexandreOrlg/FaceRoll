<script>
  import { onMount } from "svelte";

  import { Circle } from "svelte-loading-spinners";
  import { process, generateImage } from "./engineV2";
  import { canvas } from "./store";

  let loading = true;
  let cnvs = null;

  onMount(() => {
    let wave = process($canvas);
    loading = false;
    generateImage(wave, $canvas, cnvs);
  });
</script>

{#if loading}
  <div class="container">
    <Circle size="40" color="#f5576c" unit="px" duration="1s" />
    <h4 style="color: white; margin-top: 24px">Generating your ID...</h4>
  </div>
{/if}
<canvas style="width: 100%;" bind:this={cnvs} />

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
