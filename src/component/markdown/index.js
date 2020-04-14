import React from 'react';
import MarkdownView from './component/view'
import "./utils/mdMirror.css";
function Markdown() {
  return (
    <div className="Markdown">
      <h1>Markdown</h1>
      <MarkdownView></MarkdownView>
    </div>
  );
}

export default Markdown;
