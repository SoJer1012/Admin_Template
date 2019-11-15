import React from 'react';
import { Card,Table,Button,Icon,Modal,message } from "antd";
import { Link } from 'react-router-dom';

const ButtonGroup = Button.Group;
export default class Report extends React.Component{

    state = {
        dataSource: [
            {
                id: 1,
                userName: "王少杰",
                title: "2019年9月1日周报",
                date: "2019-09-01",
            },
            {
                id: 2,
                userName: "王少杰",
                title: "2019年9月2日周报",
                date: "2019-09-02",
            },
            {
                id: 3,
                userName: "王少杰",
                title: "2019年9月3日周报",
                date: "2019-09-03",
            }
        ]
    }

    //删除操作
    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: "确认",
            content: '您确认要删除第'+id+'条数据吗',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    };

    render() {
        const columns4 = [
            {
                key: 'id',
                title: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                key: 'name',
                title: '姓名',
                width: 80,
                dataIndex: 'userName'
            },
            {
                key: 'title',
                title: '标题',
                width: 80,
                dataIndex: 'title',
            },
            {
                key: 'date',
                title: '日期',
                width: 80,
                dataIndex: 'date',
            },
            {
                title: '操作',
                width: 120,
                render: (text, item) => {
                    return (
                        <ButtonGroup size="small">
                            <Button onClick={()=> {this.handleDelete(item)}}>
                                <Icon type="delete" theme="filled" />
                            </Button>
                            <Button onClick={()=> {this.handleDelete(item)}} >
                                <Icon type="edit" theme="filled"/>
                            </Button>
                        </ButtonGroup>
                    )
                }
            }
        ]
        return (
            <Card style={{margin: '10px 0'}} extra={<Button type="primary"><Link to={`/newReport`}>发布周报</Link></Button>}>
                <Table
                    bordered
                    columns={columns4}
                    dataSource={this.state.dataSource}
                    pagination={false}
                />
            </Card>

        )

    }
}