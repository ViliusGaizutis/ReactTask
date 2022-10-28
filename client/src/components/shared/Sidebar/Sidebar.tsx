import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
  useCallback
} from 'react';
import { useLocation, NavLink } from 'react-router-dom';

// Custom hooks
import useOnClickOutside from 'hooks/useOnClickOutside';

// Components
import Search from 'components/shared/Search/Search';

// Styles
import { Flex } from 'styles/global';
import * as S from './Sidebar.styles';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const navLinks = [
  { to: '/', name: 'Dashboard' },
  { to: '/about', name: 'About' },
  { to: '/feedback', name: 'Feedback' }
];

const Sidebar: FunctionComponent<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarRef = useRef<HTMLElement>(null);

  const { pathname } = useLocation();

  const handleSidebarClose = useCallback(() => setSidebarOpen(false), [setSidebarOpen]);

  useOnClickOutside(sidebarRef, handleSidebarClose);

  // Close sidebar on route change
  useEffect(() => {
    handleSidebarClose();
  }, [pathname, handleSidebarClose]);

  return (
    <S.Sidebar role="menu" ref={sidebarRef} open={sidebarOpen}>
      <Flex directionColumn alignFlexStart>
        <S.SidebarHeader>
          <Flex directionColumn>
            <Flex justifySpaceBetween>
              <span>Weather App</span>
              <S.SidebarCloseButton onClick={handleSidebarClose}>
                <span />
                <span />
              </S.SidebarCloseButton>
            </Flex>
            <Search />
          </Flex>
        </S.SidebarHeader>
        <S.SidebarBody>
          {navLinks.map(navLink => (
            <NavLink key={navLink.to} to={navLink.to} end>
              {({ isActive }) => <S.SidebarItem active={isActive}>{navLink.name}</S.SidebarItem>}
            </NavLink>
          ))}
        </S.SidebarBody>
      </Flex>
    </S.Sidebar>
  );
};

export default Sidebar;
