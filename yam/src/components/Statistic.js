import {
  NavLink, useParams
} from "react-router-dom";

const Statistic = () => {
  //récupération du paramètre d'url "count"
  const { count } = useParams();
  //statictic/12

  return (
    <>
      <p>Statistic </p>
      <p>Nombre de brelan(s) : {count}</p>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
    </>
  );
};

export default Statistic;
