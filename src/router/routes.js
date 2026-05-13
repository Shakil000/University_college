import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ProgramsPage from '../pages/Programs.jsx';
import AdmissionsPage from '../pages/Admissions.jsx';
import FacultyPage from '../pages/Faculty.jsx';
import GalleryPage from '../pages/Gallery.jsx';
import NewsPage from '../pages/NewsPage.jsx';
import PortalPage from '../pages/Portal.jsx';
import ContactPage from '../pages/Contact.jsx';

export const routes = [
  {
    path: '/',
    element: Home,
    label: 'Home'
  },
  {
    path: '/about',
    element: About,
    label: 'About'
  },
  {
    path: '/programs',
    element: ProgramsPage,
    label: 'Programs'
  },
  {
    path: '/admissions',
    element: AdmissionsPage,
    label: 'Admissions'
  },
  {
    path: '/faculty',
    element: FacultyPage,
    label: 'Faculty'
  },
  {
    path: '/gallery',
    element: GalleryPage,
    label: 'Gallery'
  },
  {
    path: '/news',
    element: NewsPage,
    label: 'News'
  },
  {
    path: '/portal',
    element: PortalPage,
    label: 'Portal'
  },
  {
    path: '/contact',
    element: ContactPage,
    label: 'Contact'
  }
];
