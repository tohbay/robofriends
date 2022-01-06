import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponents = robots.map((robot, index) => {
    return (
      <Card
        key={index}
        name={robots[index].name}
        email={robots[index].email}
        id={robots[index].id}
      />
    );
  });
  return <>{cardComponents}</>;
};

export default CardList;
