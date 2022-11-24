<template lang="html">
  <div class='homeWrapper'>
    <h1>Tu zobaczysz pare ciekawych przykładowych kodów c#</h1>

    <h2>Kod kalkulatora</h2>
    <ul>
      <li>Using system;</li>
      <li>namespace Calculator.ConsoleApp</li>
      <li>{</li>
      <li>&emsp;class Program</li>
      <li>&emsp;{</li>
      <li>&emsp;&emsp;static void Main(string[] args)</li>
      <li>&emsp;&emsp;{</li>
      <li>Console.WriteLine("Witaj w aplikacji KALKULATOR!");</li>
      <li>while (true)</li>
      <li>&emsp;{</li>
      <li>try</li>
      <li>&emsp;{</li>
      <li>Console.WriteLine("Podaj proszę 1 liczbę:");</li>
      <li>var number1 = GetInput();</li>
      <li>Console.WriteLine("Jaką operację chcesz wykonać? Możliwe operacje to: '+',</li>
      <li>var operation = Console.ReadLine();</li>
      <li>Console.WriteLine("Podaj proszę 2 liczbę:");</li>
      <li>var number2 = GetInput();</li>
      <li>var result = Calculate(number1, number2, operation);</li>
      <li>Console.WriteLine($"Wynik Twojego działania to: {Math.Round(result, 2)}.\n");</li>
      <li>catch (Exception ex)</li>
      <li>{</li>
      <li>Console.WriteLine(ex.Message);</li>
      <li>}</li>
    </ul>
    <h2>Tak działa ten kod kalkulatora</h2>
    <img src='../assets/calc.png' />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.homeWrapper {
  width: 100%;
  height: 182vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
}
</style>
