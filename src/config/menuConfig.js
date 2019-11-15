// src/config/menuConfig.js
const menuList = [
    {
        name: '首页',
        url: 'home',
        icon: 'home'
    },
    {
        name: '音乐模块',
        url: 'music',
        icon: 'bars',
        children: [{ name: '音乐系列', url: 'music' }]
    },
    {
        name: '工具模块',
        url: 'tool',
        icon: 'tool',
        children: [
            { name: '小应用', url: 'tools' },
            { name: '富文本编辑器', url: 'editor' },
            { name: '待办事项', url: 'todoList' }
        ]
    },
    {
        name: '画廊模块',
        url: 'pic',
        icon: 'edit',
        children: [{ name: '时光相片', url: 'album' }, { name: '瀑布流', url: 'waterfall' }]
    },
    {
        name: '搜索模块',
        url: 'search',
        icon: 'search',
        children: [{ name: '搜索引擎', url: 'searchEngine' }]
    },
    {
        name: 'mock联调',
        url: 'dev',
        icon: 'apple-o',
        children: [
            { name: 'mock', url: 'mock' },
            { name: '双向绑定', url: 'reform' },
            { name: '更多模块开发中', url: 'todo' }
        ]
    },
    {
        name: '项目地址',
        url: 'follow',
        icon: 'heart-o'
    },
    {
        name: '周报记录',
        url: 'report',
        icon: 'file-text'
    }
];
export default menuList;