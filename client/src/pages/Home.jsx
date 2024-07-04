import Card from "../components/Card";

function Home() {
  const information = [
    {
      id: 1,
      img: "photos/image.jpg",
      alt: "",
      title: "Égalité des chances",
      text: "Pour que les personnes handicapées bénéficient des mêmes opportunités professionnelles que les autres, il est crucial de promouvoir l'égalité des chances dans tous les aspects du travail. Une société inclusive garantit une participation équitable pour tous ses membres.",
    },
    {
      id: 2,
      img: "photos/image.jpg",
      alt: "présentation de la phot",
      title: "Accessibilité au travail",
      text: "Assurer l'accessibilité des lieux de travail est fondamental pour permettre aux personnes handicapées de contribuer pleinement. Cela inclut des aménagements adaptés et des outils professionnels accessibles pour maximiser leur potentiel et leur contribution.",
    },
    {
      id: 3,
      img: "photos/image.jpg",
      alt: "présentation de la phot",
      title: "Formation et Sensibilisation",
      text: "Former et sensibiliser les employés à la diversité et à l'inclusion est essentiel pour créer un environnement de travail respectueux. Ces initiatives renforcent la cohésion et le respect mutuel au sein de l'entreprise, favorisant une culture inclusive.",
    },
    {
      id: 4,
      img: "photos/image.jpg",
      alt: "présentation de la phot",
      title: "Soutien et Ressources",
      text: "Offrir des ressources et des soutiens adaptés est vital pour l'intégration des personnes handicapées. Un soutien adéquat leur permet de s'épanouir professionnellement, de surmonter les obstacles et de contribuer pleinement à l'entreprise.",
    },
  ];
  return (
    <>
      <header className="title">
        <h1>Inclusion des personnes handicapées dans le monde du travail</h1>
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
export default Home;
