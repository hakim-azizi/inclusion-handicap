import Card from "../components/Card";

function AwarenessTraining() {
  const information = [
    {
      id: 1,
      img: "https://acompetenceegale.com/wp-content/uploads/2023/02/Capture-decran-2023-02-15-175943.jpg",
      alt: "Lutte contre les discriminations à l'embauche",
      title: "Politique handicap en entreprise : nos conseils RH",
      text: "Les personnes handicapées ont le droit d’accéder à l’emploi comme tout le monde. Pourtant, il est encore trop souvent difficile pour elles de trouver un travail. La loi du 11 février 2005 a instauré l’obligation pour les entreprises de plus de 20 salariés d’employer des travailleurs handicapés. Vous souhaitez mettre en place une politique handicap dans votre entreprise mais vous ne savez pas par où commencer ? Pas de panique, nous sommes là pour vous aider !. Manager, connaissez-vous l’OETH ? Il s’agit de LA réglementation concernant l’obligation d’emploi des travailleurs handicapés. Définie par la loi n° 2018-771 du 5 septembre 2018 “pour la liberté de choisir son avenir professionnel” l’OETH connaît des modifications depuis le 1er janvier 2020. La nouvelle version de cette réglementation garde en grande partie les axes de la précédente. Les principales évolutions ? Les modalités de calcul et de déclaration changent considérablement ! L’objectif étant d’inclure toujours plus. Certains pensent encore, à tort, que la mise en place d’une politique handicap en entreprise n’est pas une nécessité, que les choses évoluent naturellement, sans besoin d’encadrement particulier. Il n’en est rien. La preuve ? Voici quelques chiffres sur l’évolution du marché du travail en lien avec les salariés en situation de handicap en France.",
    },
    {
      id: 2,
      img: "https://quickms.fr/wp-content/uploads/2021/09/ETP-MENSUEL-LEGAL-DOETH-AGEFIPH-1.png",
      alt: "Comment aider un travailleur handicapé ?",
      title:
        "Comptabiliser les travailleurs considérés comme respectant l’obligation d’emploi",
      text: "Sachez que tout travailleur handicapé, quel que soit son contrat de travail (CDI, CDD, intérim, stage, période de mise en situation en milieu professionnel) est comptabilisé en tant que BOETH au prorata de son temps de travail. À noter : les BOETH de plus de 50 ans sont affectés d’un coefficient de revalorisation de 1,5. Nous vous conseillons vivement de suivre l’indicateur de décompte des BOETH (dans la DSN : bloc « contrat » « statut BOETH ») ! QuickMS vous apporte son aide et vous propose des indicateurs sur mesure avec sa solution dédiée GrafiQ. Ceux-ci se mettent à jour au fur et à mesure que les DSN sont téléchargées chaque mois. Par exemple : un indicateur mesurant l’effectif équivalent temps plein :.",
    },
  ];

  return (
    <>
      <header className="title">
        <h1>Formation et Sensibilisation</h1>
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

export default AwarenessTraining;
