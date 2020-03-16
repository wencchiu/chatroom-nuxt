<template>
  <div id="app">
    <nuxt-link to="/">
      <h1>HAPPY CHATROOM</h1>
    </nuxt-link>
    <hr />
    <nuxt />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 30px 0;
  height: 100vh;
  background-color: #400040;
  font-family: 'Open Sans', sans-serif;
}

#app {
  box-sizing: border-box;
  width: 85vw;
  max-width: 1100px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #fff;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 10px 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
h1 {
  font-size: 50px;
}
h2 {
  font-size: 38px;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 21px;
}

hr {
  width: 90%;
  color: #400040;
}

a,
a:active {
  text-decoration: none;
  color: #400040;
}

button,
label,
input,
textarea {
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
}

label {
  color: rgba(0, 0, 0, 0.5);
}

input {
  border: solid 1px rgba(0, 0, 0, 0.4);
}
@media (max-width: 767px) {
  #app {
    padding: 12px;
  }

  h1 {
    font-size: 24px;
    padding: 0;
  }

  hr {
    margin: 5px auto;
  }
}
</style>
