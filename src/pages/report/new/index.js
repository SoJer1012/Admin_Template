import React from 'react';
import { Button } from "antd";
import E from 'wangeditor';

export default class NewReport extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            editorContent: ''
        }
    }

    componentDidMount() {
        const elem = this.refs.editorElem;
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create()
    }

    clickHandle() {
        alert(this.state.editorContent)
    }

    render() {
        return (
            <div>
                <div ref="editorElem" style={{textAlign: 'left'}}></div>
                <Button
                    type="primary"
                    onClick={this.clickHandle.bind(this)}
                    style={{marginTop: '20px'}}
                >获取内容
                </Button>
            </div>
        )
    }
}