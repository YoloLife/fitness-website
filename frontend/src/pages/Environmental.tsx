import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { environmentalArticles } from "utils/sample-articles";

export default function Environmental() {
  return (
    <CategoryPage categoryId="environmental" articles={environmentalArticles} />
  );
}