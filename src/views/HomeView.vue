<template lang="html">
  <div class="homeWrapper">
    <h1>Podstawy języka C#</h1>
    <h2>Dowiesz się jak wygląda składnia oraz podstawy c#</h2>
    <p>
      Kod wykonywany podczas uruchomienia naszego skrypu musimy umiescić
      wewnątrz funkcji napisanej poniżej.
    </p>
    <ul>
      <li>public static void Main()</li>
      <li>{</li>
      <li>&emsp;*twój kod*</li>
      <li>}</li>
    </ul>
    <p>Spróbujmy teraz rozwinąć nasz kod dodając powitanie użytkownika</p>
    <ul>
      <li>public static void Main()</li>
      <li>{</li>
      <li>
        &emsp;Console.WriteLine("Podaj swoje imię: "); // wypisuje podaj swoje
        imie
      </li>
      <li>
        &emsp;string imie = Console.ReadLine(); // przypisuje wprowadzoną
        wartość do zmiennej imię
      </li>
      <li>
        &emsp;Console.WriteLine($"Witaj {imie}"); // wypisuje witaj i imię
        wipisane przez użytkownika
      </li>
      <li>}</li>
    </ul>
    <p>teraz przejdźmy do pętli pętle w C# zapisujemy w następujący sposób</p>
    <ul>
      <li>public static void Main()</li>
      <li>{</li>
      <li>&emsp; for (int i = 0; i &lt; 10; i++) {</li>
      <li>
        &emsp;&emsp;Console.WriteLine(i); // wypisze wartości od jeden do 10
      </li>
      <li>&emsp;}</li>
      <li>&emsp;int c = 0;</li>
      <li>&emsp; while (c &lt; 20) {</li>
      <li>&emsp;&emsp; Console.WriteLine(c) //wypisuje c zwiękaszane o 2</li>
      <li>&emsp;&emsp; c += 2;</li>
      <li>&emsp;}</li>
      <li>}</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.homeWrapper {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  overflow: scroll;
}
</style>
