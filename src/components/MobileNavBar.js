import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import "../index.css";

const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 0rem;
    height:10vh;
    width: 100%;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background: #5B62B3;

    @media (min-width: 768px) {
        display:none;
    }


`;
const NavText = styled.div`
    z-index:3;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    font-family: "Paytone One";
    color: #FFF;
    background-color: #5B62B3;
    opacity:100%;
    text-transform: uppercase;
    position: relative;
    width: 100%;
`;
const NavTextSelected = styled.div`
    z-index:3;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    background-color: #9C92C7;
    color: white;
    opacity:100%;
    text-transform: uppercase;
    position: relative;
    font-family: "Paytone One";
    width: 100%;
`;
const Tab = styled.div`
    background-color: ${props => props.current ? "#5B62B3" : "inherit"};
    color: ${props => props.current ? "white" : "black"};
`;

const Logo = styled.div`
    z-index:100;
    position:relative;
    left:3%;
`;

const MobileNavBar = () => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation(); // Get the current route
    const current = location.pathname === "/" ? "home" : location.pathname === "/all" ? "all" : "";

    function handleClick() {
        setOpen(!open);
    }

    return (
        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/">
                    <img
                        style={{
                            height: "47px",
                            width: "54px",
                        }}
                        src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"
                        alt="Logo"
                    />
                </a>
            </Logo>
            <HamburgerMenu
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={20}
                strokeWidth={5}
                rotate={0}
                color="white"
                borderRadius={0}
                animationDuration={0.5}
                zIndex={100}
                className="over"
            />
            <Menu isOpen={open} width={"100vw"}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Tab current={current === "home"}>
                        {current === "home" ? (
                            <NavTextSelected>HOME</NavTextSelected>
                        ) : (
                            <NavText>HOME</NavText>
                        )}
                    </Tab>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/all">
                    <Tab current={current === "all"}>
                        {current === "all" ? (
                            <NavTextSelected>ARTICLES</NavTextSelected>
                        ) : (
                            <NavText>ARTICLES</NavText>
                        )}
                    </Tab>
                </Link>
            </Menu>
        </NavWrap>
    );
};

export default MobileNavBar;
