import React, { useState } from 'react';
import NewsMenu from './components/NewsMenu';
import { OPTIONS } from './constants';
import List from './components/List';

const NewsFeed = () => {
    const [selectedValue, setSelectedValue] = useState(OPTIONS.RSS_URL_NRK);
    const onChangeValue = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <>
            <NewsMenu
                selectedValue={selectedValue}
                onChangeValue={onChangeValue}
            />
            <List selectedValue={selectedValue} />
        </>
    );
};

export default NewsFeed;
