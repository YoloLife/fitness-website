import React from "react";
import { CategoryPage } from "components/CategoryPage";
import { healthConditionsArticles } from "utils/sample-articles";

export default function HealthConditions() {
  return (
    <CategoryPage categoryId="health-conditions" articles={healthConditionsArticles} />
  );
}