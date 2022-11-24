<template lang="html">
  <div>
    <router-view class="mainPage" />
    <div class="menu">
      <router-link to="/"
        ><img src="./assets/logo.png" alt="Logo strony"
      /></router-link>
      <ol>
        <li>
          <router-link to="/"
            ><span class="material-symbols-outlined"> home </span>
            <h1>Strona główna</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/workspace">
            <span class="material-symbols-outlined"> download </span>
            <h1>Środowisko pracy</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/csharp">
            <span class="material-symbols-outlined"> code </span>
            <h1>Przykładowe kody</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/xaml">
            <span class="material-symbols-outlined"> design_services </span>
            <h1>Xaml</h1>
          </router-link>
        </li>
      </ol>
    </div>
    <BackgroundImage />
  </div>
</template>
<script>
import BackgroundImage from './components/BackgroundImage.vue';

export default { components: { BackgroundImage } };
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

h1 {
  color: #ffffff;
  font-size: 3rem;
  background-color: #007800;
  padding: 1rem 2rem;
  border-radius: 10rem;
}
h2 {
  color: #05930c;
  padding: 1rem 2rem;
}

.menu {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: rgb(216, 216, 216);
  padding-left: calc(10rem + 15vh);

  ol {
    width: calc(100vw - 10rem - 15vh);
    justify-content: space-around;
    align-items: center;
    display: flex;
    list-style-type: none;

    span {
      padding: 1rem;
      background-color: #05930c;
      border-radius: 2rem;
      font-size: 2rem;
      color: #d8d8d8;
    }

    a {
      display: flex;
      text-decoration: none;
      color: currentColor;
      align-items: center;
      transition: 0.5s background;
      border-radius: 2rem;

      &:hover {
        background-color: #7cbf7f;
      }
      &:hover > h1 {
        color: rgb(67, 67, 67);
      }
      h1 {
        padding: 0 1rem;
        font-size: 2rem;
        transition: color 0.5s;
        color: #007800;
        background: none;
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 5rem;
    transform: translateY(-50%);
    width: 15vh;
    transform-origin: center;
    transition: 1s;
    border-radius: 100%;

    &:hover {
      transform: scale(0.9) translateY(-50%);
      box-shadow: 3px 3px 15px rgba(#007800, 0.5);
      cursor: pointer;
    }
  }
}

body {
  background-color: rgb(255, 255, 255);
}
hr {
  width: 80%;
  margin: 1rem 0;
  height: 0.15rem;
  background: rgb(57, 57, 57);
  border: rgb(57, 57, 57) solid 1px;
}
article {
  margin: 2rem;
  width: 80%;
}
ul {
  width: 75%;
  list-style-type: none;
  border-radius: 15px;
  overflow-x: hidden;
  max-height: 30rem;
  li {
    background-color: rgb(57, 57, 57);
    color: #ffffff;
    padding: 0.6rem;
    padding-left: 5rem;
    position: relative;
    counter-increment: code;
    &::before {
      content: counter(code) '.';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 4rem;
      background-color: #007800;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
}
p {
  color: #333;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  width: 80%;
}
ol {
  font-size: 1.6rem;
  color: #333;
}
</style>
