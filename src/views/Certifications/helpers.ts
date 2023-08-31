import scrum from '../../assets/png/scrum.png';
import userExperience from '../../assets/png/user_experience.png';
import courseJsTs from '../../assets/jpg/ReactJs_Typescripct.jpg';
import reactJsTs from '../../assets/png/Reactjs_Typescript.png';
import { ItemProps } from './types';

export const items: ItemProps['props'][] = [
  {
    name: 'Certificación metodología SCRUM',
    url: scrum,
  },
  {
    name: 'Certificación Aspectos básicos del diseño de la  experiencia del  usuario',
    url: userExperience,
  },
  {
    name: 'Constancia impartición curso React Js y Typescipt',
    url: courseJsTs,
  },
  {
    name: 'Certificación Curso de React con Typescript',
    url: reactJsTs,
  },
];
