import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = `<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>`;
function handleChange(e) {
    console.log(e, 'handleChange')
}
function MarkdownView() {

    return (
        <div className="Markdown-view">
            <CodeMirror
                value={code}
                options={{
                    theme: '"md-mirror"',
                    tabSize: 2,
                    keyMap: 'sublime',
                    mode: 'markdown',
                }}
            />
        </div>
    );
}

export default MarkdownView;
