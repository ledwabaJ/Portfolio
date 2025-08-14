declare namespace SiteTheme {
  type Theme = 'Light' | 'Dark';

  type MenuItem = {
    label: string;
    url: string;
  };

  type ThemedMenu = {
    [key in Theme]: MenuItem[];
  };

  type activeTheme = {
    theme: Theme
  }
}


