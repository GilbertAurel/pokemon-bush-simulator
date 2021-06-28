import React from "react";

import CardSkeleton from "../../components/skeleton";

function pokemonListSkeleton() {
  return [1, 2, 3, 4, 5, 6, 7].map((index) => (
    <CardSkeleton key={index} type={"cardList"} />
  ));
}

export default pokemonListSkeleton;