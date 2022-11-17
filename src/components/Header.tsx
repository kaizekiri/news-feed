import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    font-size: 18px;
    background: #161b22;
    border-bottom: 1px solid var(--border-color);
    z-index: 10;
`;

function Header() {
    return (
        <Container>
            News Feed <span style={{ opacity: 0.2 }}>- Stay informed</span>
        </Container>
    );
}

export default Header;
