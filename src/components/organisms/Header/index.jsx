import React, { useState, useLayoutEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsXLg } from 'react-icons/bs';
import useWindowSize from 'react-use/lib/useWindowSize';
import Brand from '@/components/atoms/Brand';
import NavList, { MobileNavList } from '@/components/atoms/NavList';
import NavItem from '@/components/atoms/NavItem';
import Button from '@/components/atoms/Button';
import { HeaderWrapper } from './Header.style';
import { useAuth } from '@/context/AuthProvider';
import { screens } from '@/constants/screens';

const Header = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const { logout } = useAuth();
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    // Close mobile navbar on larger screen
    if (width > screens.md) {
      setShowMobileNavbar(false);
    }
  }, [width]);

  return (
    <HeaderWrapper>
      <Brand />
      <NavList>
        <NavItem to="/start-quiz">Start A Quiz</NavItem>
        <NavItem to="/finished">Finished</NavItem>
        <NavItem to="/paused">Paused</NavItem>
        <Button onClick={logout}>Logout</Button>
      </NavList>
      {/* Hamburger icon */}
      <Button
        className="hamburger-menu"
        onClick={() => setShowMobileNavbar(!showMobileNavbar)}
      >
        {
          showMobileNavbar
            ? (
              <BsXLg />
            )
            : <AiOutlineMenu />
        }
      </Button>
      {
        showMobileNavbar && (
          <MobileNavList>
            <NavItem to="/start-quiz">Start A Quiz</NavItem>
            <NavItem to="/finished">Finished</NavItem>
            <NavItem to="/paused">Paused</NavItem>
            <Button onClick={logout}>Logout</Button>
          </MobileNavList>
        )
      }

    </HeaderWrapper>
  );
};

export default Header;
