import React from "react";
import { useData } from "../Contexts/DataContext";

const Resumo = () => {
  const { data } = useData();
  console.log(data);

  return <div>Resumo</div>;
};

export default Resumo;
