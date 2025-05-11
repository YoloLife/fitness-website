import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { lifestyleArticles } from "utils/sample-articles";

export default function Lifestyle() {
  return (
    <CategoryPage categoryId="lifestyle" articles={lifestyleArticles} />
  );
}