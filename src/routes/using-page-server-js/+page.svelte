<script>
  export let data;
  console.log("In +page.svelte:", data.number);
</script>

<p>
  {data.number}
</p>

<style>
  p {
    font-size: 20rem;
    text-align: center;
  }
</style>
