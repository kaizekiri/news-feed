import React from 'react';

type Props = {
    title: string;
    link: string;
};

const Link = ({ title, link }: Props) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
    </a>
);

export default Link;
