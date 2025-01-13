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
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Course Management',
      description:
        'Easily create and edit courses with comprehensive syllabi, resource materials, and assessment tools. Simplify the educational process for instructors and students alike.',
      icon: 'mdiBookOpenPageVariant',
    },
    {
      name: 'Student Tracking',
      description:
        'Maintain a detailed database of enrolled students, track their progress, and manage grades efficiently. Ensure every student receives the attention they need.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Instructor Profiles',
      description:
        'Manage instructor profiles with detailed qualifications, course assignments, and availability. Keep your teaching staff organized and informed.',
      icon: 'mdiAccountTie',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed our educational approach. The intuitive interface and robust features make managing courses a breeze.',
      company: 'EduTech Innovations',
      user_name: 'Alice Johnson, Head of Learning',
    },
    {
      text: 'Our students love the interactive elements and seamless navigation. ${projectName} truly enhances the learning experience.',
      company: 'Bright Future Academy',
      user_name: 'Michael Smith, Principal',
    },
    {
      text: 'As an instructor, I appreciate the comprehensive tools available. ${projectName} makes course management efficient and effective.',
      company: 'Global Knowledge Hub',
      user_name: 'Emma Brown, Senior Instructor',
    },
    {
      text: 'The analytics feature is a game-changer. We can now track student progress and engagement with ease.',
      company: 'Learning Solutions Inc.',
      user_name: 'John Davis, Data Analyst',
    },
    {
      text: '${projectName} has streamlined our enrollment process, saving us time and resources. Highly recommend it!',
      company: 'Smart Education Group',
      user_name: 'Sophia Lee, Enrollment Manager',
    },
    {
      text: 'The support team is fantastic! They helped us set up and customize ${projectName} to fit our needs perfectly.',
      company: 'Innovative Learning Co.',
      user_name: 'James Wilson, IT Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Comprehensive Online Education Platform`}</title>
        <meta
          name='description'
          content={`Explore our all-in-one online education platform, offering course creation, student management, instructor profiles, and more. Enhance your learning experience today.`}
        />
      </Head>
      <WebSiteHeader projectName={'testdmode'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testdmode'}
          image={['Diverse students engaged in learning']}
          mainText={`Transform Learning with ${projectName} Today`}
          subTitle={`Discover a seamless online education experience with ${projectName}. Manage courses, students, and instructors effortlessly, all from one platform.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'testdmode'}
          image={['Icons representing diverse features']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Key Features`}
          subTitle={`Unlock the full potential of online education with ${projectName}. Discover features designed to enhance learning and streamline management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'testdmode'}
          image={['Team collaborating on innovative solutions']}
          mainText={`Discover the Heart of ${projectName}`}
          subTitle={`At ${projectName}, we are committed to revolutionizing online education. Our platform empowers educators and students to achieve their full potential through innovative tools and seamless management.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'testdmode'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Users Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'testdmode'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team is here to assist you with any inquiries or support you need. Expect a response within 24 hours.`}
        />
      </main>
      <WebSiteFooter projectName={'testdmode'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
