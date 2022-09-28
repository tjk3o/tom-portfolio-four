import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Toggle } from '../Toggle';

export const HEADER_HEIGHT = 60;

function Header({
  handleSetIsDarkTheme,
  isDarkTheme,
  showToggleText,
}: {
  handleSetIsDarkTheme: (preference: string) => void;
  isDarkTheme: boolean;
  showToggleText: boolean;
}): React.ReactElement {
  const { scrollY } = useScroll();

  const headerColor = useTransform(
    scrollY,
    [0, 130],
    ['var(--color-header-background)', 'var(--color-header-background)']
  );

  const headerTitleOpacity = useTransform(scrollY, [58, 59], ['0%', '100%']);

  return (
    <motion.header
      style={{
        position: 'fixed',
        zIndex: 2,
        top: 0,
        width: '100%',
        height: HEADER_HEIGHT,
        backdropFilter: 'blur(4px)',
        backgroundColor: headerColor,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      <motion.h1
        style={{
          color: 'var(--color-primary)',
          opacity: headerTitleOpacity,
          width: 'fit-content',
          margin: '0 auto',
          fontSize: '16px',
        }}
      >
        Profile
      </motion.h1>
      <Toggle
        isOn={isDarkTheme}
        toggleSwitch={handleSetIsDarkTheme}
        showToggleText={showToggleText}
      />
    </motion.header>
  );
}

export default Header;
