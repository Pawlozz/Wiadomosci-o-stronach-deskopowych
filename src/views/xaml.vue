<template lang="html">
  <div class="homeWrapper">
    <h1>Co to Xaml i jak go uzywać?</h1>
    <h2>W tej stronie dowiesz się jak tworzyć interfejs w Xaml</h2>
    <p>
      XAML to język oparty na języku XML utworzony przez firmę Microsoft jako
      alternatywa dla kodu programowania do tworzenia wystąpień i inicjowania
      obiektów oraz organizowania tych obiektów w hierarchiach
      nadrzędny-podrzędny
    </p>
    <h2>Język XAML ma kilka zalet w porównaniu z kodem równoważnym:</h2>
    <ol>
      <li>
        Kod XAML jest często bardziej zwięzły i czytelny niż równoważny kod.
      </li>
      <li>
        Hierarchia nadrzędny-podrzędna z natury w języku XML umożliwia kodowi
        XAML naśladowanie z większą czytelnością wizualną hierarchii
        nadrzędny-podrzędny obiektów interfejsu użytkownika.
      </li>
      <li>
        Język XAML może być łatwo napisany ręcznie przez programistów, ale także
        nadaje się do narzędzi i generowany przez narzędzia do projektowania
        wizualnego.
      </li>
    </ol>
    <h2>
      Istnieją również wady, głównie związane z ograniczeniami, które są
      wewnętrzne dla języków znaczników:
    </h2>
    <ol>
      <li>
        XAML nie może zawierać kodu. Wszystkie programy obsługi zdarzeń muszą
        być zdefiniowane w pliku kodu.
      </li>
      <li>
        Język XAML nie może zawierać pętli do powtarzalnego przetwarzania.
      </li>
      <li>Język XAML nie może zawierać przetwarzania warunkowego</li>
      <li>
        Język XAML zazwyczaj nie może utworzyć wystąpienia klas, które nie
        definiują konstruktora bez parametrów. (Jednak czasami istnieje sposób
        obejścia tego ograniczenia).
      </li>
      <li>
        Język XAML zazwyczaj nie może wywoływać metod. (To ograniczenie może
        czasami zostać pokonane).
      </li>
    </ol>
    <h2>Tu można zobaczyć przykładowy kod guzików xaml</h2>
    <ul>
      <li>&lt;Application x:Class="AnimatedButton.App"</li>
      <li>xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"</li>
      <li>xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"</li>
      <li>StartupUri="Window1.xaml"</li>
      <li>&gt;</li>
      <li>&lt;Application.Resources&gt;</li>
      <li>&lt;Style TargetType="Button"&gt;</li>
      <li>&lt;Setter Property="Width" Value="90" /&gt;</li>
      <li>&lt;Setter Property="Margin" Value="10" /&gt;</li>
      <li>&lt;/Style&gt;</li>
      <li>&lt;/Application.Resources&gt;</li>
    </ul>
    <h2>Tutaj masz skonczony efekt kodu :)</h2>
    <img src="../assets/Buttonsxaml.gif" alt="Guziki w xamlu" class='butto' />
  </div>
</template>
<script>
export default {
  name: 'xamlView',
};
</script>
<style lang="scss">
.homeWrapper {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}

.butto {
  padding: 15px;
}
</style>
