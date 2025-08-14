export const Colors = {
  background: '#1D1D1D',
  white: '#FFFFFF',
  CandyPurple: {
    primary: '#7464CF'
  },
  YellowMellow: {
    primary: '#F7DF1E'
  }
};

export const Links = {
  "AboutMe": {
    label: 'About me', 
    url: '#'
  },
  "Experience": {
    label: 'Experience', 
    url: '#'
  },
  "Projects": {
    label: 'Projects', 
    url: '#'
  },
  "GitHub": {
    label: 'My Github', 
    url: '#'
  },
  "Skills": {
    label: 'Skills', 
    url: '#'
  },
  "ContantMe": {
    label: 'Contact me', 
    url: '#'
  },
  "LinkedIn": {
    label: 'LinkedIn', 
    url: '#'
  },
  "Email": {
    label: 'Email', 
    url: '#'
  }
}

export const ThemeNames: { [key: string]: SiteTheme.Theme } = {
  yellowSunflower: 'Light',
  purpleCandy: 'Dark'
}

export const Menu:SiteTheme.ThemedMenu = {
  Dark: [
    Links.AboutMe,
    Links.Experience,
    Links.Projects,
    Links.GitHub,
    Links.ContantMe
  ],
  Light: [
    Links.AboutMe,
    Links.Experience,
    Links.Projects,
    Links.GitHub
  ]  
}