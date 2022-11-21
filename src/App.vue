<template lang="html">
  <div>
    <router-view class="mainPage" />
    <div class="menu">
      <router-link to='/'><img src="./assets/logo.png" alt="Logo strony"></router-link>
      <ol>
        <li>
          <router-link to="/"><span class="material-symbols-outlined">
              home
            </span>
            <h1>Strona główna</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/workspace">
            <span class="material-symbols-outlined">
              download
            </span>
            <h1>Środowisko pracy</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/csharp">
            <span class="material-symbols-outlined">
              code
            </span>
            <h1>Przykładowe kody</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/xaml">
            <span class="material-symbols-outlined">
              design_services
            </span>
            <h1>Xaml</h1>

          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.mainPage {
  width: 100%;
  height: 90vh;
  background: url(./assets/back.jpg);
  background-repeat: no-repeat;
  background-size: cover;
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

      h1 {
        padding: 0 1rem;
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
</style>