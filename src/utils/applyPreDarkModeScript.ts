const applyPreDarkModeScript = `
  (function() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.add('light');
      }
    } catch(e) {}
  })();
`;

export default applyPreDarkModeScript;
