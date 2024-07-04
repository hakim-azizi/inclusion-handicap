import Card from "../components/Card";

function Handicap() {
  //   const [id , setId ]=useState([])
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const information = [
    [
      {
        id: 1,
        img: "https://acompetenceegale.com/wp-content/uploads/2023/02/Capture-decran-2023-02-15-175943.jpg",
        alt: "Lutte contre les discriminations à l'embauche",
        title: "Égalité des chances",
        text: "Pour que les personnes handicapées bénéficient des mêmes opportunités professionnelles que les autres, il est crucial de promouvoir l'égalité des chances dans tous les aspects du travail. Une société inclusive garantit une participation équitable pour tous ses membres.",
      },
      {
        id: 2,
        img: "https://www.cse-guide.fr/medias/2020/03/travailleur-handicap%C3%A9.jpg",
        alt: "Comment aider un travailleur handicapé ?",
        title: "Accessibilité au travail",
        text: "Assurer l'accessibilité des lieux de travail est fondamental pour permettre aux personnes handicapées de contribuer pleinement. Cela inclut des aménagements adaptés et des outils professionnels accessibles pour maximiser leur potentiel et leur contribution.",
      },
    ],
    [
      {
        id: 1,
        img: "https://acompetenceegale.com/wp-content/uploads/2023/02/Capture-decran-2023-02-15-175943.jpg",
        alt: "Lutte contre les discriminations à l'embauche",
        title: "Égalité des chances",
        text: "Pour que les personnes handicapées bénéficient des mêmes opportunités professionnelles que les autres, il est crucial de promouvoir l'égalité des chances dans tous les aspects du travail. Une société inclusive garantit une participation équitable pour tous ses membres.",
      },
      {
        id: 2,
        img: "https://www.cse-guide.fr/medias/2020/03/travailleur-handicap%C3%A9.jpg",
        alt: "Comment aider un travailleur handicapé ?",
        title: "Accessibilité au travail",
        text: "Assurer l'accessibilité des lieux de travail est fondamental pour permettre aux personnes handicapées de contribuer pleinement. Cela inclut des aménagements adaptés et des outils professionnels accessibles pour maximiser leur potentiel et leur contribution.",
      },
    ],
  ];

  return (
    <>
      <header className="title">
        <h1>Inclusion des personnes handicapées dans le monde du travail</h1>
      </header>
      <main>
        {/* eslint-disable react/jsx-props-no-spreading */}
        {information[id].map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </main>
    </>
  );
}

export default Handicap;
