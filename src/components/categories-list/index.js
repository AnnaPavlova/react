import React from 'react';
require('./styles.css');
import {EditBtn, PlusBtn, DeleteBtn} from '../buttons/index';

export const CategoriesList = ({categories}) => (
    <ul className="categories-list">
        {categories.map((item, index) => <Category data={item} key={index} />)}
    </ul>
)

CategoriesList.propTypes = {
    items: React.PropTypes.array
}

export const Category = ({data}) =>(
    <li className={data.isExpanded ? 'open' : ''}>
        <span className="open-ico"></span>
        {data.title}
        <EditBtn/>
        <PlusBtn/>
        <DeleteBtn/>
        {data.categories ? <CategoriesList categories={data.categories}/> : null}
    </li>
)