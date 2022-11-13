import React from 'react';
import styled from 'styled-components';

const ListItemStyles = styled.div`
    padding: 12px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-color);

    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background: var(--hover-color);
        cursor: pointer;
    }
`;

type Props = {
    children: React.ReactNode;
};

const ListItem = ({ children }: Props) => (
    <ListItemStyles>{children}</ListItemStyles>
);

export default ListItem;
