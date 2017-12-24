const availableThemes = ['default', 'minimal']

export default {
  availableThemes: availableThemes,
  currentTheme: function() {
    var defaultTheme = availableThemes[0];
    var currentTheme = localStorage.getItem('theme');

    if (availableThemes.indexOf(currentTheme) < 0) {
      currentTheme = defaultTheme
    };

    return currentTheme
  },
  setTheme: function(theme) {
    localStorage.setItem('theme', theme)
  }
}
