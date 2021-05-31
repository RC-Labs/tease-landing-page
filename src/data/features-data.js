import { ReactComponent as DiamondFeature } from '../assets/images/UI-feature-diamond.svg';
import { ReactComponent as BotsFeature } from '../assets/images/UI-feature-bots.svg';
import { ReactComponent as InfluenceFeature } from '../assets/images/UI-feature-influence.svg';
import { ReactComponent as PrivacyFeature } from '../assets/images/UI-feature-privacy.svg';
import { ReactComponent as TechFeature } from '../assets/images/UI-feature-tech.svg';
import { ReactComponent as TeaseFeature } from '../assets/images/UI-feature-tease.svg';

const featuresData = [
  {
    title: "Dyskrecja i prywatność",
    description: 'Chcesz wiedziec, kto jest w twojej okolicy? Wybierasz się na wyjazd służbowy i szukasz zabawy? A może znudziły cię regularne aktywności na urlopie? Za pomocą inteligentnych filtrów sprawdź kto jest w Tease i daj się ponieść.',
    icon: <PrivacyFeature />,
  }, {
    title: "Tylko realni użytkownicy",
    description: 'Wysyłaj teksty na podryw aby zwiększyć swoje szanse. Wymieniaj prezenty na ossstre fotki. Zostań na czacie lub umów się na spotkanie!',
    icon: <BotsFeature />,
  }, {
    title: "Nowoczesne technologie",
    description: 'Wszystko zależy od ciebie. Opowiedz się po jednej stronie,  w zależności od tego, czy masz duże potrzeby do zaspokojenia, lub czerpiesz satysfakcję z dawania :)',
    icon: <TechFeature />,
  }, {
    title: "To ty budujesz aplikację",
    description: 'Nasz system chroni cię przed szkodliwymi sytuacjami. Zgłaszaj niewłaściwe zachowania, dodawaj użytkowników do czarnej listy i ciesz się bezpieczeństwem w Tease.',
    icon: <InfluenceFeature />,
  }, {
    title: "Kuś lub daj się skusić",
    description: 'Prywatność to jedna z najważniejszych dla nas kwestii. Chronimy twoje dane w sposób skrupulatny na bezpiecznych serwerach aby nasi użytkownicy mogli w pełni cieszyć się aplikacją i przyjemnościami.',
    icon: <TeaseFeature />,
  }, {
    title: "69 dni premium",
    description: 'Prywatność to jedna z najważniejszych dla nas kwestii. Chronimy twoje dane w sposób skrupulatny na bezpiecznych serwerach aby nasi użytkownicy mogli w pełni cieszyć się aplikacją i przyjemnościami.',
    icon: <DiamondFeature />,
  },
];

export { featuresData };