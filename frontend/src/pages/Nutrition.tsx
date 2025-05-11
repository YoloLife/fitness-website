import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { nutritionArticles } from "utils/sample-articles";

export default function Nutrition() {
  return (
    <CategoryPage categoryId="nutrition" articles={nutritionArticles} />
  );
}