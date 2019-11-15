import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active,children,onClick}) => {
    return (<a
        className="todoList-box-tab-item"
        style={{ color: active ? '#f01414' : '#4d555d' }}
        onClick={onClick}
        disabled={active}
    >
        {children}
    </a>)
}
// class Link extends React.Component{
//
//     render() {
//         console.log(this.props)
//         const { active,children,onClick } = this.props
//         return (
//             <button
//                 onClick={onClick}
//                 disabled={active}
//                 style={{
//                     marginLeft: '4px'
//                 }}
//             >
//                 {children}
//             </button>
//         )
//     }
// }

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link