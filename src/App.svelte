<script>
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";
  import Camera from "./Camera.svelte";
  import Generator from "./Generator.svelte";

  let tilt;
  let state = 1;
  onMount(async () => {
    VanillaTilt.init(tilt, {
      "full-page-listening": true,
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.2,
    });
  });
  const handleMessage = () => {
    state = 2;
  };
</script>

<main>
  <!-- svelte-ignore a11y-media-has-caption -->
  <div class="glass-container" bind:this={tilt}>
    <svg
      height="50"
      style="margin-bottom: 24px;"
      viewBox="0 0 434 213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M220.102 93.0085C230.426 83.1408 243.978 70.1864 243.978 56C243.978 41.8136 230.426 28.8593 220.102 18.9915C219.026 17.9627 217.985 16.9675 216.998 16.008C227.184 6.10578 241.136 0 256.527 0C287.715 0 312.998 25.0721 312.998 56C312.998 86.9279 287.715 112 256.527 112C241.136 112 227.184 105.894 216.998 95.992C217.985 95.0325 219.026 94.0373 220.102 93.0085ZM216.998 95.992C216.011 95.0325 214.969 94.0373 213.893 93.0085C203.57 83.1408 190.017 70.1864 190.017 56C190.017 41.8136 203.57 28.8593 213.893 18.9915C214.969 17.9627 216.011 16.9675 216.998 16.008C206.812 6.10578 192.859 0 177.468 0C146.28 0 120.998 25.0721 120.998 56C120.998 86.9279 146.28 112 177.468 112C192.859 112 206.812 105.894 216.998 95.992Z"
        fill="white"
      />
      <path
        d="M52.8 156.4C51.2 148.4 44.6 138 27.4 138C14 138 2.7 147.6 2.7 160.2C2.7 170.9 10 178.2 21.3 180.5L31.2 182.5C36.7 183.6 39.8 186.8 39.8 190.9C39.8 195.9 35.7 199.6 28.3 199.6C18.3 199.6 13.4 193.3 12.8 186.3L0 189.7C1.1 199.8 9.4 211.9 28.2 211.9C44.7 211.9 53.8 200.9 53.8 190C53.8 180 46.9 171.6 34 169.1L24.1 167.2C18.9 166.2 16.4 163.1 16.4 159.2C16.4 154.5 20.8 150.2 27.5 150.2C36.5 150.2 39.7 156.3 40.4 160.2L52.8 156.4Z"
        fill="white"
      />
      <path
        d="M86.1609 199.8C79.6609 199.8 73.6609 195 73.6609 185.8C73.6609 176.5 79.6609 171.8 86.1609 171.8C92.6609 171.8 98.6609 176.5 98.6609 185.8C98.6609 195.1 92.6609 199.8 86.1609 199.8ZM86.1609 159.7C71.4609 159.7 60.3609 170.6 60.3609 185.8C60.3609 200.9 71.4609 211.9 86.1609 211.9C100.861 211.9 111.961 200.9 111.961 185.8C111.961 170.6 100.861 159.7 86.1609 159.7Z"
        fill="white"
      />
      <path
        d="M154.464 210.4H167.164C166.964 208.7 166.664 205.3 166.664 201.5V161.2H153.364V189.8C153.364 195.5 149.964 199.5 144.064 199.5C137.864 199.5 135.064 195.1 135.064 189.6V161.2H121.764V192.3C121.764 203 128.564 211.7 140.464 211.7C145.664 211.7 151.364 209.7 154.064 205.1C154.064 207.1 154.264 209.4 154.464 210.4Z"
        fill="white"
      />
      <path
        d="M194.158 182.1C194.158 176.4 197.558 171.9 203.358 171.9C209.758 171.9 212.458 176.2 212.458 181.7V210.4H225.758V179.4C225.758 168.6 220.158 159.9 207.958 159.9C202.658 159.9 196.758 162.2 193.758 167.3V161.2H180.858V210.4H194.158V182.1Z"
        fill="white"
      />
      <path
        d="M286.156 138H273.056V166.1C271.656 163.5 267.656 160 259.156 160C245.256 160 235.556 171.3 235.556 185.7C235.556 200.6 245.556 211.6 259.556 211.6C266.156 211.6 271.156 208.6 273.356 204.7C273.356 207 273.656 209.4 273.856 210.4H286.556C286.356 208.4 286.156 204.8 286.156 201.5V138ZM248.956 185.7C248.956 176.9 254.356 171.9 261.156 171.9C267.956 171.9 273.256 176.8 273.256 185.6C273.256 194.5 267.956 199.7 261.156 199.7C254.156 199.7 248.956 194.5 248.956 185.7Z"
        fill="white"
      />
      <path
        d="M331.556 176.5C331.556 181.747 327.303 186 322.056 186C316.81 186 312.556 181.747 312.556 176.5C312.556 171.253 316.81 167 322.056 167C327.303 167 331.556 171.253 331.556 176.5Z"
        fill="white"
      />
      <path
        d="M372.456 211.6V162.4H359.156V211.6H372.456ZM357.556 146.3C357.556 150.7 361.256 154.4 365.756 154.4C370.356 154.4 373.956 150.7 373.956 146.3C373.956 141.7 370.356 138 365.756 138C361.256 138 357.556 141.7 357.556 146.3Z"
        fill="white"
      />
      <path
        d="M433.595 139.2H420.495V167.3C419.095 164.7 415.095 161.2 406.595 161.2C392.695 161.2 382.995 172.5 382.995 186.9C382.995 201.8 392.995 212.8 406.995 212.8C413.595 212.8 418.595 209.8 420.795 205.9C420.795 208.2 421.095 210.6 421.295 211.6H433.995C433.795 209.6 433.595 206 433.595 202.7V139.2ZM396.395 186.9C396.395 178.1 401.795 173.1 408.595 173.1C415.395 173.1 420.695 178 420.695 186.8C420.695 195.7 415.395 200.9 408.595 200.9C401.595 200.9 396.395 195.7 396.395 186.9Z"
        fill="white"
      />
    </svg>
    {#if state === 1}
      <Camera on:click={handleMessage} />
    {:else}
      <Generator />
    {/if}
  </div>
  <div class="footer">
    Made with the <img
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/red-heart_2764-fe0f.png"
      style="height: 16px; padding : 0 6px"
      alt=""
    />
    at Paris by
    <a
      style="margin-left: 6px"
      href="https://www.linkedin.com/in/alexandre-orliaguet/"
    >
      Alexandre Orliaguet</a
    >
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url("https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    position: absolute;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .glass-container {
    display: grid;
    grid-template-rows: 50px 1fr 50px;
    align-items: center;
    justify-items: center;
    padding: 32px;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px) saturate(160%);
    -webkit-backdrop-filter: blur(4px) saturate(160%);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.45);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    overflow: hidden;
    height: 350px;
    width: 250px;
  }
</style>
