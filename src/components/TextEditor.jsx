import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="w-[90%] h-[550px] mx-auto mt-10 border border-gray-300 p-5 rounded-md shadow-lg bg-white">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Rich Text Editor
        </h2>
        <div className="h-[400px] flex flex-row justify-between gap-5 ">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper border border-gray-200 rounded-md"
            editorClassName="demo-editor px-3 py-2 bg-gray-50 rounded-md"
            toolbarClassName="border-b border-gray-200 mb-2"
            onEditorStateChange={this.onEditorStateChange}
          />
          <textarea
            className="mt-5 p-4 w-[500px] border border-gray-300 rounded-md text-sm font-mono bg-gray-50 resize-none"
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
      </div>
    );
  }
}
