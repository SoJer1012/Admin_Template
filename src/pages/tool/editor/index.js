import React from 'react';
import { Editor, EditorState } from 'draft-js';

export default class EditorMarkDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.setEditor = (editor) => {
            this.editor = editor;
        };
        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
    }

    componentDidMount() {
        this.focusEditor();
    }

    render() {
        return (
            <div onClick={this.focusEditor}>
                <Editor
                    ref={this.setEditor}
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
