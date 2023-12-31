import { CSSObject, styled } from '@mui/material/styles';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link';
import Person2Icon from '@mui/icons-material/Person2';
import Settings from '@mui/icons-material/Settings';
import scss from './SideMenu.module.scss';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ['', 'analytics', 'profile', 'settings', ''];
const menuListTranslations = [
  'Home',
  'Analytics',
  'Profile',
  'Settings',
  'Sign Out',
];
const menuListIcons = [
  <HomeIcon key="home" />,
  <EqualizerIcon key="analytics" />,
  <Person2Icon key="profile" />,
  <Settings key="settings" />,
  <ExitToAppIcon key="sign out" />,
];

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const mobileCheck = useMediaQuery('(min-width: 600px)');

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    text === 'Sign Out' ? signOut() : null;
    setOpen(false);
  };

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        },
      }}
    >
      <div className={scss.drawerHeader}>
        <IconButton onClick={handleToggleDrawer}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <NextLink
              className={scss.link}
              href={`/dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
