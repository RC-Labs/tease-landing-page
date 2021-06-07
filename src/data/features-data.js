import { ReactComponent as DiamondFeature } from '../assets/images/UI-feature-diamond.svg';
import { ReactComponent as BotsFeature } from '../assets/images/UI-feature-bots.svg';
import { ReactComponent as InfluenceFeature } from '../assets/images/UI-feature-influence.svg';
import { ReactComponent as PrivacyFeature } from '../assets/images/UI-feature-privacy.svg';
import { ReactComponent as TechFeature } from '../assets/images/UI-feature-tech.svg';
import { ReactComponent as TeaseFeature } from '../assets/images/UI-feature-tease.svg';

const featuresData = [
  {
    title: "Dyskrecja i prywatność",
    description: 'Tease jest miejscem, w którym każdy ma czuć się komfortowo i bezpiecznie, dlatego na pierwszym miejscu stawiamy prywatność naszych użytkowników i zapewniamy wszystkie środki bezpieczeństwa umożliwiające ochronę ich danych.',
    icon: <PrivacyFeature />,
  }, {
    title: "Tylko realni użytkownicy",
    description: 'Za każdym kontem stworzonym w Tease stoi realna osoba. Nie natrafisz tutaj na fałszywe konta lub boty, podszywające się pod prawdziwych użytkowników. Zależy nam na tym, żeby osoby posiadające konto na Tease stworzyły prawdziwe relacje i nie musiały obawiać się, że rozmawiają z nieistniejącym użytkownikiem.',
    icon: <BotsFeature />,
  }, {
    title: "Nowoczesne technologie",
    description: 'Aplikacja została stworzona i jest stale ulepszana z wykorzystaniem nowoczesnych technologii. Chcemy, żeby użytkownicy mogli z niej korzystać z jak największą łatwością i komfortem. Z tego powodu trzymamy rękę na pulsie i szukamy rozwiązań i udogodnień, które nie są dostępne w konkurencyjnych aplikacjach.',
    icon: <TechFeature />,
  }, {
    title: "To ty budujesz aplikację",
    description: 'Potrzeby użytkowników są dla nas najważniejsze, dlatego każdy z Was może wziąć udział w dalszym budowaniu Tease. Nasi użytkownicy zadecydują o tym, w którym kierunku rozwiniemy aplikację, tak aby pozwoliła na spełnienie ich najskrytszych fantazji i osiągnięcia satysfakcji z jej użytkowania.',
    icon: <InfluenceFeature />,
  }, {
    title: "Kuś lub daj się skusić",
    description: 'Tylko od Ciebie zależy, po której stronie relacji się znajdziesz. Niezależnie od tego czy chcesz być sugar baby, czy sugar daddy, Tease pomoże Ci w odnalezieniu partnera, który pomoże Ci w spełnieniu Twoich potrzeb. Załóż konto i zadecyduj o tym jaką relację będziesz tworzyć.',
    icon: <TeaseFeature />,
  }, {
    title: "69 dni premium",
    description: 'Aby ułatwić znalezienie partnera, nowi użytkownicy mają możliwość wypróbowania konta premium za darmo. Po założeniu konta, przez 69 dni możesz korzystać z ekskluzywnych funkcji niedostępnych dla regularnych użytkowników. Daj się skusić i jak najszybciej wypróbuj te funkcje.',
    icon: <DiamondFeature />,
  },
];

export { featuresData };