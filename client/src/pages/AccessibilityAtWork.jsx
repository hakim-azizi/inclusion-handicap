import Card from "../components/Card";

function AccessibilityAtWork() {
  const information = [
    {
      id: 1,
      img: "https://www.cse-guide.fr/medias/2020/03/travailleur-handicap%C3%A9.jpg",
      alt: "Comment aider un travailleur handicapé ?",
      title:
        "L'accès à l'emploi reste restreint pour les personnes handicapées",
      text: "Dans son dernier rapport intitulé « Handicap, inclusion et travail » paru en 2022, l'OCDE observe que « si les taux d'emploi des personnes handicapées se sont améliorés au cours de la dernière décennie, le fossé entre les personnes en situation de handicap et celles sans handicap face à l'emploi reste important ». En 2019 (données les plus récentes disponibles), dans un ensemble de 32 pays de l'OCDE, moins d'une personne handicapée sur deux avait accès à l'emploi (44 %), un chiffre qui était plus de 25 points de pourcentage inférieurs à celui des personnes sans limitations fonctionnelles. Comme le montre notre graphique, la Suisse et le Canada font partie des pays les mieux lotis en matière d'inclusion professionnelle des personnes handicapées, avec des taux d'emploi compris entre 54 % et 58 % pour ces dernières, et un écart avec les personnes sans handicap qui était inférieur à 20 points",
    },
    {
      id: 2,
      img: "https://cdn.statcdn.com/Infographic/images/normal/31998.jpeg",
      alt: "Graphique sur l'accès à l'emploie des personnes en situation de handicap",
      title:
        "Graphique sur l'accès à l'emploie des personnes en situation de handicap",
      text: "Ce graphique compare le taux d'emploi des personnes en situation de handicap avec celui des personnes sans handicap, dans une sélection de pays de l'OCDE. Comme l'explique l'OCDE, « le déficit d'emploi persiste car les personnes handicapées sont confrontées à un déficit substantiel et durable de compétences : sans les compétences requises et la possibilité d'améliorer ces compétences sur un marché du travail en constante évolution, les personnes handicapées ne sont pas sur un pied d'égalité pour pourvoir un poste vacant ou conserver un emploi. Les faibles taux d'emploi sont également responsables de taux élevés de pauvreté chez les personnes handicapées ».",
    },
  ];

  return (
    <>
      <header className="title">
        <h1>Accessibilité au travail</h1>
      </header>
      <main>
        {/* eslint-disable react/jsx-props-no-spreading */}
        {information.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </main>
    </>
  );
}

export default AccessibilityAtWork;
