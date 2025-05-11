import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { mentalHealthArticles } from "utils/sample-articles";

export default function MentalHealth() {
  return (
    <CategoryPage categoryId="mental-health" articles={mentalHealthArticles} />
  );
}