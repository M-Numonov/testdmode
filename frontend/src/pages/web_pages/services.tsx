import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'testdmode';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Customizable Course Creation',
      description:
        'Design and tailor courses to meet specific educational needs. Our platform offers flexible tools to create engaging and interactive content.',
      icon: 'mdiPencilRuler',
    },
    {
      name: 'Advanced Student Analytics',
      description:
        'Track student progress and performance with detailed analytics. Gain insights to improve teaching strategies and student outcomes.',
      icon: 'mdiChartBar',
    },
    {
      name: 'Secure Data Management',
      description:
        'Ensure the safety and privacy of your data with our robust security measures. Trust ${projectName} to protect your educational information.',
      icon: 'mdiLockOutline',
    },
    {
      name: 'Seamless Communication Tools',
      description:
        'Facilitate effective communication between students and instructors with integrated messaging and discussion boards.',
      icon: 'mdiMessageTextOutline',
    },
    {
      name: 'Multi-Device Compatibility',
      description:
        'Access ${projectName} from any device, ensuring a consistent and flexible learning experience for students and educators alike.',
      icon: 'mdiTabletCellphone',
    },
    {
      name: 'Comprehensive Support Services',
      description:
        'Benefit from our dedicated support team, ready to assist you with any questions or technical issues you may encounter.',
      icon: 'mdiHeadset',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our online education approach. The platform is intuitive and packed with features that make teaching and learning seamless.',
      company: 'EduVision Institute',
      user_name: 'Sarah Thompson, Director of Education',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They helped us integrate the platform smoothly, and our students love the new features.',
      company: 'Learning Pathways',
      user_name: 'David Lee, IT Coordinator',
    },
    {
      text: 'With ${projectName}, we have seen a significant improvement in student engagement and performance. The analytics tools are particularly helpful.',
      company: 'Bright Minds Academy',
      user_name: 'Emily Carter, Academic Advisor',
    },
    {
      text: "Our instructors appreciate the customizable course creation tools. ${projectName} has made it easy to tailor content to our students' needs.",
      company: 'Innovative Learning Solutions',
      user_name: 'Michael Brown, Lead Instructor',
    },
    {
      text: 'The secure data management feature gives us peace of mind. We trust ${projectName} to keep our information safe and accessible.',
      company: 'Secure Education Group',
      user_name: 'Jessica White, Data Manager',
    },
    {
      text: '${projectName} has been a game-changer for our institution. The multi-device compatibility ensures that our students can learn anytime, anywhere.',
      company: 'Global Knowledge Network',
      user_name: 'James Wilson, Program Coordinator',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the range of services offered by ${projectName}, designed to enhance online education and streamline management for educators and institutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'testdmode'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testdmode'}
          image={['Diverse team discussing strategies']}
          mainText={`Empower Your Education with ${projectName}`}
          subTitle={`Discover the comprehensive services offered by ${projectName} to enhance your online education experience. From course management to analytics, we have you covered.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'testdmode'}
          image={['Icons representing service features']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Service Features`}
          subTitle={`Unlock the full potential of your educational platform with ${projectName}. Our features are designed to streamline and enhance your online education experience.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'testdmode'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'testdmode'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
