import React, { useState } from 'react';
import Header from './components/Header';
import { OPTIONS } from './constants';
import List from './components/List';
import Navigation from './components/Navigation';

const NewsFeed = () => {
    const [selectedValue, setSelectedValue] = useState(OPTIONS.RSS_URL_NRK);
    const onChangeValue = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <>
            <Header />
            <List selectedValue={selectedValue} />
            <Navigation
                selectedValue={selectedValue}
                onChangeValue={onChangeValue}
            />
        </>
    );
};

export default NewsFeed;
