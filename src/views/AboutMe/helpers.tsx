import { ReactNode } from 'react';
import {
    Git,
    Github,
    Js,
    Reactjs,
    Reactts,
    Vite,
    Eslint,
    Node,
    NPM,
    Yarn,
    PNPM,
  } from '@react-symbols/icons';

  interface ArrayIcons {
    icon: ReactNode,
    name: string
  }

export const array: ArrayIcons[] = [
    {
      icon: <Js width={60} height={60} />,
      name: 'JavaScript',
    },
    {
      icon: <Reactjs width={60} height={60} />,
      name: 'React Js',
    },
    {
      icon: <Reactts width={60} height={60} />,
      name: 'React Ts',
    },
    {
      icon: <Vite width={60} height={60} />,
      name: 'Vite',
    },
    {
      icon: <Eslint width={60} height={60} />,
      name: 'Eslint',
    },
    {
      icon: <Node width={60} height={60} />,
      name: 'Node Js',
    },
    {
      icon: <NPM width={60} height={60} />,
      name: 'NPM',
    },
    {
      icon: <Yarn width={60} height={60} />,
      name: 'Yarn',
    },
    {
      icon: <PNPM width={60} height={60} />,
      name: 'PNPM',
    },
    {
      icon: <Git width={60} height={60} />,
      name: 'Git',
    },
    {
      icon: <Github width={60} height={60} />,
      name: 'GitHub',
    },
  ];