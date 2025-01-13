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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Interactive Learning Tools',
      description:
        'Engage students with interactive tools that enhance the learning experience. From quizzes to discussion boards, keep students motivated and involved.',
      icon: 'mdiSchool',
    },
    {
      name: 'Comprehensive Analytics',
      description:
        'Gain insights into student performance and course effectiveness with detailed analytics. Make informed decisions to improve educational outcomes.',
      icon: 'mdiChartLine',
    },
    {
      name: 'Seamless Integration',
      description:
        'Integrate ${projectName} with existing systems effortlessly. Our platform is designed to work harmoniously with your current educational tools.',
      icon: 'mdiPuzzleOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our institution. The ease of use and comprehensive features have significantly improved our teaching process.',
      company: 'FutureLearn Academy',
      user_name: 'Olivia Green, Academic Director',
    },
    {
      text: "Our students are more engaged than ever, thanks to the interactive tools provided by ${projectName}. It's a must-have for any educational institution.",
      company: 'Innovate Education',
      user_name: 'Liam Brown, Head of Student Affairs',
    },
    {
      text: "The analytics feature in ${projectName} has allowed us to tailor our courses to better meet student needs. It's an invaluable tool for educators.",
      company: 'Smart Learning Solutions',
      user_name: 'Emma White, Curriculum Developer',
    },
    {
      text: 'We love how ${projectName} integrates seamlessly with our existing systems. It has made managing our courses and students so much easier.',
      company: 'EduTech Innovations',
      user_name: 'Noah Wilson, IT Manager',
    },
    {
      text: 'The support team at ${projectName} is fantastic. They helped us every step of the way, ensuring a smooth transition to the platform.',
      company: 'Bright Future Academy',
      user_name: 'Sophia Martinez, Operations Manager',
    },
    {
      text: '${projectName} has revolutionized our approach to online education. The platform is intuitive, and the features are exactly what we needed.',
      company: 'Global Knowledge Hub',
      user_name: 'James Anderson, CEO',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, values, and the innovative features that make us a leader in online education.`}
        />
      </Head>
      <WebSiteHeader projectName={'testdmode'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testdmode'}
          image={['Team collaborating in modern office']}
          mainText={`Unveiling the Vision of ${projectName}`}
          subTitle={`Discover the driving force behind ${projectName}. Our commitment to innovation and excellence in online education sets us apart.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'testdmode'}
          image={['Diverse team brainstorming ideas']}
          mainText={`The Heartbeat of ${projectName}`}
          subTitle={`At ${projectName}, our mission is to revolutionize online education. We are dedicated to providing innovative solutions that empower educators and learners worldwide.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'testdmode'}
          image={['Icons representing key features']}
          withBg={1}
          features={features_points}
          mainText={`Discover ${projectName} Core Features`}
          subTitle={`Explore the innovative features that make ${projectName} a leader in online education. Designed to enhance learning and streamline management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'testdmode'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our ${projectName} Users `}
        />
      </main>
      <WebSiteFooter projectName={'testdmode'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
