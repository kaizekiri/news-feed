import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const SkeletonBox = styled.span`
    display: inline-block;
    height: 1em;
    width: 80%;
    position: relative;
    overflow: hidden;
    background-color: #1c2531;

    &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgb(233 226 226 / 0%) 0,
            rgb(39 59 85) 20%,
            rgb(32 51 76) 60%,
            rgb(238 232 232 / 0%)
        );
        animation: shimmer 2s infinite;
        content: '';
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
`;

const Skeleton = () => {
    return (
        <>
            {Array.from(Array(10).keys()).map((item) => (
                <ListItem key={item}>
                    <SkeletonBox />
                </ListItem>
            ))}
        </>
    );
};

export default Skeleton;
