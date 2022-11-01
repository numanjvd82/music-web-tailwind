import React from 'react';

export default function useDarkMode() {
  const [isDark, setDark] = React.useState(false);

  const theme = isDark ? 'dark' : 'light';

  function toggleTheme() {
    setDark(!isDark);
  }

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      window.document.body.classList.add('transition-colors');
      window.document.body.classList.add('bg-navDark');
      window.document.body.classList.add('text-white');
    }

    return () => {
      window.document.body.classList.remove('transition-colors');
      window.document.body.classList.remove('bg-navDark');
      window.document.body.classList.remove('text-white');
    };
  }, [theme, toggleTheme]);

  return [theme, toggleTheme];
}
