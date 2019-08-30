import React from 'react';
import { withRouter } from 'react-router-dom';

import { Arrow, MoreArrowContainer, StyledSpan } from './more.styles';

const More = ({ routeName, match, history }) => (
    <MoreArrowContainer
        onClick={() => history.push(`${match.url}/${routeName}`)}
    >
        <Arrow />
        <StyledSpan>See more</StyledSpan>
    </MoreArrowContainer>
);
export default withRouter(More);
