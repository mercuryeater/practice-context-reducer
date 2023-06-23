import { useSelector } from "../votes/index";

function TotalVotes() {
  const { totalVotes } = useSelector();

  return (
    <>
      <h2>Total votes: {totalVotes}</h2>
    </>
  );
}

export default TotalVotes;
