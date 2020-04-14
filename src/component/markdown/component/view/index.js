import React, { Component } from 'react';
import { markdownParserWechat, markdownParser } from "../../utils/helper";
import content from "../../../../md/git配置多个ssh.md";
import {
    MJX_DATA_FORMULA,
    MJX_DATA_FORMULA_TYPE,
  } from "../../utils/constant";
  import pluginCenter from "../../utils/pluginCenter";
class MarkdownView extends Component {
    componentDidMount() {
        try {
            window.MathJax = {
              tex: {
                inlineMath: [["$", "$"]],
                displayMath: [["$$", "$$"]],
                tags: "ams",
              },
              svg: {
                fontCache: "none",
              },
              options: {
                renderActions: {
                  addMenu: [0, "", ""],
                  addContainer: [
                    190,
                    (doc) => {
                      for (const math of doc.math) {
                        this.addContainer(math, doc);
                      }
                    },
                    this.addContainer,
                  ],
                },
              },
            };
            // eslint-disable-next-line
            require("mathjax/es5/tex-svg-full");
            pluginCenter.mathjax = true;
          } catch (e) {
            console.log(e);
          } 
    }
    addContainer(math, doc) {
        const tag = "span";
        const spanClass = math.display ? "span-block-equation" : "span-inline-equation";
        const cls = math.display ? "block-equation" : "inline-equation";
        math.typesetRoot.className = cls;
        math.typesetRoot.setAttribute(MJX_DATA_FORMULA, math.math);
        math.typesetRoot.setAttribute(MJX_DATA_FORMULA_TYPE, cls);
        math.typesetRoot = doc.adaptor.node(tag, { class: spanClass, style: "cursor:pointer" }, [math.typesetRoot]);
    }
    render() {
        console.log(content, 'nice-rich-text-box')
        return(
            <div className = "Markdown-view" >
                <section
                    id='nice'
                    data-tool="mdnice编辑器"
                    data-website="https://www.mdnice.com"
                    dangerouslySetInnerHTML={{
                        __html: markdownParser.render(content),
                    }}
                />
            </div>
        );
    }
}

export default MarkdownView;
