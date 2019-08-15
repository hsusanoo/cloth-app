import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ ...sectionProps }, index) => (
            <MenuItem
                key={index}
                size={index > 2 && 'large'}
                {...sectionProps}
            />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
