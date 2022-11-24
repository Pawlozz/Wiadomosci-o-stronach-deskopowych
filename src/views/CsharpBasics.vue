<template lang="html">
  <div class="workspaceWrapper">
    <header>
      <h1>Gdzie pisać nasz kod?</h1>
      <h2>Dowiesz się gdzie pisać nasz kod</h2>
    </header>
    <section class="row">
      <img src="../assets/Visual_Studio.png" alt="" />
      <article>
        <h1>Microsoft Visual Studio</h1>
        <h3>
          Najpopularniejszym edytorem do edycji języka C# jest zdecydowanie
          visual Studio code. tym właśnie edytorem polecamy się posługiwać w
          trakicie przeglądania strony.
        </h3>
      </article>
    </section>
    <button>
      <span class="material-symbols-outlined"> download </span>&emsp; Pobierz
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.workspaceWrapper {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  justify-content: space-around;
  img {
    width: 20%;
    border-right: 2px solid #bc8bf3;
    padding-right: 2rem;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  h1 {
    background-color: transparent;
    color: #bc8bf3;
    padding: 0;
  }
  h3 {
    font-size: 1.8rem;
    color: #683c9a;
  }
}
button {
  padding: 1rem 3rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bc8bf3;
  color: white;
  border-radius: 5px;
  border: none;
  transition: background 0.5s;
  margin-top: 3rem;
  cursor: pointer;
  &:hover {
    background-color: #683c9a;
  }
  span {
    scale: 1.5;
  }
}
</style>
