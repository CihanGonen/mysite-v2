import "./Articles.css";

import LexicalEnvExecutionContext from "../ArticleContents/LexicalEnvExecutionContext";

import { useState } from "react";
import Hoisting from "../ArticleContents/Hoisting";

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState("lexical-env");
  const [header, setHeader] = useState(
    "Lexical Environment and Execution Context"
  );

  return (
    <div className="articles-wrapper">
      <div className="subjects-wrapper">
        <p
          onClick={() => {
            setSelectedArticle("lexical-env");
            setHeader("Lexical Environment and Execution Context");
          }}
          style={{
            color: selectedArticle === "lexical-env" ? "white" : "#f7df1e",
          }}
        >
          Lexical Environment and Execution Context
        </p>
        <br />
        <p
          onClick={() => {
            setSelectedArticle("hoisting");
            setHeader("Hoisting");
          }}
          style={{
            color: selectedArticle === "hoisting" ? "white" : "#f7df1e",
          }}
        >
          Hoisting
        </p>
      </div>
      <div className="articles-heading">
        <h1>{header}</h1>
      </div>

      <div className="articles-inner">
        <div className="article-wrapper">
          {selectedArticle === "lexical-env" ? (
            <LexicalEnvExecutionContext />
          ) : (
            <Hoisting />
          )}
        </div>
      </div>
    </div>
  );
}
