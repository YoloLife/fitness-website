import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { fitnessArticles } from "utils/sample-articles";

export default function Fitness() {
  return (
    <CategoryPage categoryId="fitness" articles={fitnessArticles} />
  );
}