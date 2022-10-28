import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { useMatch } from 'react-router-dom';

// Store
import { toggleTheme } from 'redux/actionCreators/theme';
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/theme';

// Assets
import { IconLightMode, IconDarkMode, IconMenu } from 'assets/images/svg';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from './Header.styles';

// Components
import GeoLocation from '../GeoLocation/GeoLocation';
import Search from '../Search/Search';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FunctionComponent<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const theme = useAppSelector(selectTheme);

  const matchHome = useMatch('/');
  const matchLocation = useMatch('/locations/:locationId');
  const matchDashboard = !!(matchHome || matchLocation);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  const handleSidebarOpen = (): void => setSidebarOpen(true);

  return (
    <S.Header>
      <Container>
        <Flex justifySpaceBetween={matchDashboard} justifyFlexEnd={!matchDashboard}>
          {matchDashboard && (
            <>
              <GeoLocation />
              <Search />
            </>
          )}
          <S.HeaderAction>
            <Flex>
              <ButtonSwitch
                aria-label="Toggle theme"
                width="6.25rem"
                switchType="theme"
                onClick={handleThemeSwitch}
              >
                <IconLightMode />
                <IconDarkMode />
              </ButtonSwitch>
              <S.HeaderMenuButton
                type="button"
                aria-haspopup="menu"
                aria-expanded={sidebarOpen ? true : undefined}
                aria-label="Open sidebar"
                themeType={theme}
                onClick={handleSidebarOpen}
              >
                <IconMenu />
              </S.HeaderMenuButton>
            </Flex>
          </S.HeaderAction>
        </Flex>
      </Container>
    </S.Header>
  );
};

export default Header;
