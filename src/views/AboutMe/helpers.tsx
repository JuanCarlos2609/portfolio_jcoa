import htmlIcon from '../../assets/svg/html.svg';
import cssIcon from '../../assets/svg/css.svg';
import jsIcon from '../../assets/svg/js.svg';
import vscIcon from '../../assets/svg/studioCode.svg';
import reactIcon from '../../assets/svg/react.svg';
import tsIcon from '../../assets/svg/typescript.svg';
import materialicon from '../../assets/svg/material-ui-1.svg';
import eslintIcon from '../../assets/svg/eslint.svg';
import viteIcon from '../../assets/svg/vitejs.svg';
import gitIcon from '../../assets/svg/git-icon.svg';
import githubIcon from '../../assets/svg/github.svg';
import awsIcon from '../../assets/svg/aws.svg';
import postmanIcon from '../../assets/svg/postman.svg';
import yarnIcon from '../../assets/svg/yarn.svg';
import nodeIcon from '../../assets/svg/nodejs.svg';

interface icons {
  icon: string;
  name: string;
}

export const skillsArray: icons[] = [
  {
    icon: htmlIcon,
    name: 'Html',
  },
  {
    icon: cssIcon,
    name: 'CSS',
  },
  {
    icon: jsIcon,
    name: 'Javascript',
  },
  {
    icon: tsIcon,
    name: 'Typescript',
  },
  {
    icon: reactIcon,
    name: 'ReactJs',
  },
  {
    icon: nodeIcon,
    name: 'NodeJs',
  },
  {
    icon: yarnIcon,
    name: 'Yarn',
  },
  {
    icon: materialicon,
    name: 'Maaterial-Ui',
  },
  {
    icon: viteIcon,
    name: 'Vite',
  },
  {
    icon: eslintIcon,
    name: 'Eslint',
  },
  {
    icon: awsIcon,
    name: 'AWS',
  },
  {
    icon: gitIcon,
    name: 'Git',
  },
  {
    icon: githubIcon,
    name: 'Github',
  },
  {
    icon: vscIcon,
    name: 'Vscode',
  },
  {
    icon: postmanIcon,
    name: 'Postman',
  },
];
