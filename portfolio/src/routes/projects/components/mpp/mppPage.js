import React from "react";
import { useParams } from "react-router-dom";

const MppPage = () => {
  let { mppPageId } = useParams;

  return <div>{mppPageId}</div>;
};

export default MppPage;
