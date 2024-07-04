import Card from "../components/Card";

function EqualOpportunities() {
  const information = [
    {
      id: 1,
      img: "https://acompetenceegale.com/wp-content/uploads/2023/02/Capture-decran-2023-02-15-175943.jpg",
      alt: "Lutte contre les discriminations à l'embauche",
      title: "Handicap et discriminations",
      text: "Des inégalités d’accès privent les personnes en situation de handicap des formes de visibilité sociale qui leur permettraient de prendre part au bien-être collectif induit par l’exercice d’une fonction sociale au sein des dispositifs de droit commun. Elles sont surexposées de façon persistante au chômage, en particulier de longue durée ; or, un emploi, outre qu’il constitue une source de revenus, facilite également l’accès à un logement et, selon l’Institut national de la statistique et des études économiques (INSEE), réduit le risque d’isolement et de discrimination (Gérard Bouvier et Xavier Niel, 'Les discriminations liées au handicap et à la santé', INSEE Première, no 1308, 30 juillet 2010). En outre, ayant souvent des difficultés à accéder à une scolarisation en milieu ordinaire, elles ne bénéficient pas du pouvoir émancipateur de l’éducation. Celle-ci favorise l’accès à l’emploi, accroît les chances d’insertion sociale et abaisse l’exposition aux discriminations ; les jeunes handicapés moteurs scolarisés en milieu spécialisé, par exemple, sont trois fois plus nombreux à se plaindre de discriminations que ceux qui effectuent leur cursus en milieu ordinaire (INSEE Première, op. cit.). La participation des personnes en situation de handicap au bien-être collectif se trouve également contrainte par des inégalités d’accès au logement et aux soins : elles ont deux fois plus de probabilités que les autres groupes sujets aux discriminations de subir une expérience discriminante dans le cadre d’une recherche de logement (Défenseur des droits, Enquête sur l’accès aux droits. Vol. 5 : Les discriminations dans l’accès au logement, décembre 2017) ; elles font aussi état plus fréquemment que la moyenne de difficultés avec la Caisse primaire d’assurance maladie (Défenseur des droits, Enquête sur l’accès aux droits. Vol. 2 : Relations des usagères et usagers avec les services publics : le risque du non-recours, mars 2017).",
    },
    {
      id: 2,
      img: "https://www.lexidys.com/media/wysiwyg/blog/graphique-handicap-discrimination.jpg",
      alt: "Graphique représentant les differntes injustice social en fonction des handicap.",
      title: "Des discriminations ancrées dans la vie quotidienne",
      text: "La surexposition des personnes en situation de handicap aux discriminations met toutefois en lumière le poids des facteurs sociaux en la matière. En effet, nombre de pratiques, décisions et comportements individuels ou institutionnels ont des effets préjudiciables sur ces personnes. Bien qu’il soit parfois malaisé de les prendre en compte juridiquement dans toute leur étendue, ils génèrent des discriminations qui enferment à l’intérieur d’une vision figée les difficultés qu’elles rencontrent ; ces difficultés participent de leur invalidation sociale et relativisent l’effet émancipateur de l’accès aux dispositifs de droit commun.",
    },
  ];

  return (
    <>
      <header className="title">
        <h1>Égalité des chances</h1>
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

export default EqualOpportunities;
