import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from "../actions/todoList";

const Footer = () => (
    <div className="todoList-box-tab">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>全部任务</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>待办任务</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>已完成任务</FilterLink>
    </div>
)

export default Footer