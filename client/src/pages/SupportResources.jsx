import Card from "../components/Card";

function SupportResources() {
  const information = [
    {
      id: 1,
      img: "https://acompetenceegale.com/wp-content/uploads/2023/02/Capture-decran-2023-02-15-175943.jpg",
      alt: "Lutte contre les discriminations à l'embauche",
      title: "La notion de handicap",
      text: "Art.L.114 : « Constitue un handicap, au sens de la présente loi, toute limitation d’activité ou restriction de participation à la vie en société subie dans son environnement par une personne en raison d’une altération substantielle, durable ou définitive d’une ou plusieurs fonctions physiques, sensorielles, mentales, cognitives ou psychiques, d’un polyhandicap ou d’un trouble de santé invalidant ». Avec cette définition, le législateur affirme que le handicap recouvre une multiplicité de situations : handicap visible, invisible, physique, mental, psychique… De plus, le handicap n’existe pas « en soi » : il apparaît dans une situation donnée, pour une durée qui n’est pas forcément définitive, dans un environnement spécifique. La notion de handicap doit donc être décorrélée de celle de la gravité : une problématique de santé n’a pas être grave pour que l’on puisse parler de situation de handicap.",
    },
    {
      id: 2,
      img: "https://handicap.anfh.fr/sites/default/files/schemas_notion.png",
      alt: "Comment aider un travailleur handicapé ?",
      title: "La définition de travailleur handicapé",
      text: "L’article L.5213-1 du Code du Travail dispose que « Est considéré comme travailleur handicapé toute personne dont les possibilités d’obtenir ou de conserver un emploi sont effectivement réduites par suite de l’altération d’une ou plusieurs fonctions physique, sensorielle, mentale ou psychique. » L’appréciation de la qualité de travailleur handicapé relève de la Commission pour les Droits et l’Autonomie des Personnes Handicapées (CDAPH) de la MDPH, après avis de l’équipe pluridisciplinaire. La situation de travailleur handicapé est donc à différencier de la situation de handicap de manière générale, puisqu’il s’agit de l’adéquation entre les problématiques de santé de la personne et ses possibilités d’obtenir ou de conserver un emploi.",
    },
  ];

  return (
    <>
      <header className="title">
        <h1>Soutien et Ressources</h1>
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

export default SupportResources;
