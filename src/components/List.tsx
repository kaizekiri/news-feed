import React from 'react';
import styled from 'styled-components';
import RSSFeed from './RSSFeed';
import {
    OPTIONS,
    RSS_URL_CNBC,
    RSS_URL_NRK,
    RSS_URL_NYT,
    RSS_URL_TV2,
} from '../constants';

const Card = styled.div`
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
`;

type Props = {
    selectedValue: string;
};

const List = ({ selectedValue }: Props) => (
    <Card>
        {selectedValue === OPTIONS.RSS_URL_NRK && <RSSFeed url={RSS_URL_NRK} />}
        {selectedValue === OPTIONS.RSS_URL_TV2 && <RSSFeed url={RSS_URL_TV2} />}
        {selectedValue === OPTIONS.RSS_URL_CNBC && (
            <RSSFeed url={RSS_URL_CNBC} />
        )}
        {selectedValue === OPTIONS.RSS_URL_NYT && <RSSFeed url={RSS_URL_NYT} />}
    </Card>
);

export default List;
