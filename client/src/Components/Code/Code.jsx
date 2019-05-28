import React, { Component } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = { code: props.code };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ code: this.props.code });
    }
  }

  handleCodeInput({ code }) {
    this.setState({ code });
    this.props.onCodeChange({ code });
  }

  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={code => this.handleCodeInput({ code })}
        highlight={code => highlight(code, languages.js)}
        padding={14}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
          height: "100%",
          lineHeight: "1rem"
        }}
      />
    );
  }
}

export default Code;
