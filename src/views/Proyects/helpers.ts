import { useTranslation } from '@translations';
import instagramImage from '../../assets/png/instagram-clone.png';

interface Algo {
  name: string;
  img: string;
  description: string;
  siteWeb: string;
}

export const useHelpers = () => {
  const { t } = useTranslation();

  const proyects: Algo[] = [
    {
      name: t('projects.instagram'),
      img: instagramImage,
      description: t('projects.instagramDescription'),
      siteWeb: 'https://instagram-clone-juancarlos.netlify.app',
    },
    {
      name: 'Isdsdsd',
      img: instagramImage,
      description: 'Eso es una breve descripción del proyecto',
      siteWeb: 'https://instagram-clone-juancarlos.netlify.app',
    },
  ];

  return { proyects };
};
