<script>
  import { onMount } from "svelte";
  import { canvas } from "./store";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let videoSource = null;
  let loading = false;

  onMount(async () => {
    loading = true;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        videoSource.srcObject = stream;
        videoSource.play();
      });
  });

  const takePicture = () => {
    console.log("take picture");

    $canvas.width = 1920 / 2;
    $canvas.height = 1280 / 2;

    $canvas
      .getContext("2d")
      .drawImage(videoSource, 0, 0, $canvas.width, $canvas.height);

    dispatch("click", {});
  };
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={videoSource} />
<div class="button" on:click={takePicture}>Generate my sound ID</div>

<style>
  video {
    height: 200px;
    width: 250px;
    object-fit: cover;
    border-radius: 12px;
    transform: translateZ(10px);
  }

  .button {
    width: 100%;
    background-image: linear-gradient(100deg, #f093fb 0%, #f5576c 100%);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 12px;
    margin-top: 12px;
    font-weight: 600;
  }

  .button:hover {
    background-color: #1a35ce;
    cursor: pointer;
  }
</style>
