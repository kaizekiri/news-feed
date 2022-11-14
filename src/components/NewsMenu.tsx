import React from 'react';
import styled, { css } from 'styled-components';
import NRK_LOGO from '../assets/nrk-logo.png';
import TV2_LOGO from '../assets/tv2-logo.png';
import CNBC_LOGO from '../assets/cnbc-logo.png';
import NYT_LOGO from '../assets/nyt-logo.png';
import { OPTIONS } from '../constants';

const LogosRowStyles = styled.div`
    display: flex;
    background: var(--background-color);
    gap: 10px;
    margin: 10px 0px 20px 0px;
    padding: 5px;
    overflow-x: scroll;
    position: sticky;
    top: 0;
`;

const LogoWrapperStyles = styled.div<{
    background?: string;
    isActive: boolean;
}>`
    width: 80px;
    height: 60px;
    border-radius: 16px;
    -webkit-border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => background || '#fff'};
    cursor: pointer;

    ${({ isActive }) =>
        isActive &&
        css`
            outline: 1px solid var(--background-color);
            box-shadow: 0 0 0 3px var(--border-active);
        `}
`;

const LogoStyles = styled.img`
    width: ${({ width }) => (width ? `${width}px` : '80px')};
    height: ${({ height }) => (height ? `${height}px` : '35px')};
    object-fit: contain;
`;

type Props = {
    selectedValue: string;
    onChangeValue: (value: string) => void;
};

function NewsMenu({ selectedValue, onChangeValue }: Props) {
    return (
        <LogosRowStyles>
            <LogoWrapperStyles
                background="#00b9f2"
                isActive={selectedValue === OPTIONS.RSS_URL_NRK}
                onClick={() => onChangeValue(OPTIONS.RSS_URL_NRK)}
            >
                <LogoStyles
                    src={NRK_LOGO}
                    alt="NRK logo"
                    width={75}
                    height={50}
                />
            </LogoWrapperStyles>
            <LogoWrapperStyles
                isActive={selectedValue === OPTIONS.RSS_URL_TV2}
                onClick={() => onChangeValue(OPTIONS.RSS_URL_TV2)}
            >
                <LogoStyles src={TV2_LOGO} alt="TV2 logo" height={55} />
            </LogoWrapperStyles>
            <LogoWrapperStyles
                isActive={selectedValue === OPTIONS.RSS_URL_CNBC}
                onClick={() => onChangeValue(OPTIONS.RSS_URL_CNBC)}
            >
                <LogoStyles src={CNBC_LOGO} alt="CNBC logo" />
            </LogoWrapperStyles>
            <LogoWrapperStyles
                isActive={selectedValue === OPTIONS.RSS_URL_NYT}
                onClick={() => onChangeValue(OPTIONS.RSS_URL_NYT)}
            >
                <LogoStyles src={NYT_LOGO} alt="NYT logo" />
            </LogoWrapperStyles>
        </LogosRowStyles>
    );
}

export default NewsMenu;
