import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { spiritualArticles } from "utils/sample-articles";

export default function Spiritual() {
  return (
    <CategoryPage categoryId="spiritual" articles={spiritualArticles} />
  );
}