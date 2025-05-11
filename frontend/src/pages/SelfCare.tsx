import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { selfCareArticles } from "utils/sample-articles";

export default function SelfCare() {
  return (
    <CategoryPage categoryId="self-care" articles={selfCareArticles} />
  );
}