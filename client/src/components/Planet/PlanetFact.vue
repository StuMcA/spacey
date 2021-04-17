<template>
  <section class="planet-fact-wrapper">
    <!-- NOTE I have hard coded the fact just to test the layout -Alex -->
    <h1>Facts</h1>
    <p>
      Venus is the second brightest natural object in the sky. The planet has an apparent magnitude of -3.8 to -4.6, which makes it visible on a bright, clear day. The Moon is the only other natural
      object that is brighter.
    </p>
    <button class="next-fact-button">Next Fact</button>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  display: none;
}
.planet-fact-wrapper {
  /* border: 1px solid darkgray; */
  text-align: center;
}
.next-fact-button {
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: 0.15s;
}
.next-fact-button:hover {
  background-color: rgb(122, 13, 13);
  box-shadow: 0 0 2rem red;
}
.next-fact-button:active {
  background-color: rgb(255, 0, 0);
}
@media screen and (max-width: 879px) {
  .planet-fact-wrapper {
    border-radius: 1rem;
    background-color: rgb(26, 26, 26);
    padding: 1rem 1rem 0 1rem;
  }
  p {
    text-align: left;
  }
  h1 {
    display: block;
    text-align: left;
  }
  .next-fact-button {
    border: 0rem solid rgb(121, 121, 121);
    border-radius: 0.5rem;
    background-color: rgb(70, 70, 70);
    color: white;
    font-size: 0.8rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    transition: 0.15s;
  }
  .next-fact-button:hover {
    background-color: rgb(219, 40, 40);
    box-shadow: 0 0 0rem red;
  }
  .next-fact-button:active {
    background-color: rgb(122, 0, 0);
  }
}
</style>
