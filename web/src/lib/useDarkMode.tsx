/**
 *
 * useDarkMode
 *
 */
import { useCallback, useEffect, useState } from 'react';

const prefersDarkColorScheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export function isDarkMode() {
  return document.body.classList.contains('dark-mode');
}

// always prefer what the user prefers
if (prefersDarkColorScheme && !isDarkMode()) {
  document.body.classList.add('dark-mode');
} else if (!prefersDarkColorScheme && isDarkMode()) {
  document.body.classList.remove('dark-mode');
}

// an array of listeners is cheaper than multiple mutation observers on html class changes
const listeners: ((darkMode: boolean) => void)[] = [];

export function useDarkMode(): [darkMode: boolean, toggleDarkMode: () => void] {
  const [darkMode, setDarkMode] = useState(isDarkMode);
  useEffect(() => {
    listeners.push(setDarkMode);
    return () => {
      listeners.splice(listeners.indexOf(setDarkMode), 1);
    };
  }, [setDarkMode]);
  return [
    darkMode,
    useCallback(() => {
      let nextIsDarkMode = false;
      if (isDarkMode()) {
        document.body.classList.remove('dark-mode');
      } else {
        document.body.classList.add('dark-mode');
        nextIsDarkMode = true;
      }
      for (const l of listeners) {
        l(nextIsDarkMode);
      }
    }, []),
  ];
}
