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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} provides a range of features including customizable course creation, advanced student analytics, secure data management, and seamless communication tools. These features are designed to enhance the online education experience for both educators and students.',
    },
    {
      question: 'How can I integrate ${projectName} with existing systems?',
      answer:
        '${projectName} is designed to integrate smoothly with your current educational tools. Our support team can assist you in setting up the integration process to ensure a seamless transition.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, ${projectName} prioritizes data security. We use robust security measures to protect your information, ensuring that your data remains safe and private at all times.',
    },
    {
      question: 'Can I access ${projectName} on multiple devices?',
      answer:
        'Absolutely! ${projectName} is compatible with various devices, allowing you to access the platform from desktops, tablets, and smartphones, ensuring flexibility and convenience.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'Our dedicated support team is available to assist you with any questions or technical issues. You can reach out to us via email or through our contact form, and we will respond promptly.',
    },
    {
      question: 'How does ${projectName} help improve student engagement?',
      answer:
        "${projectName} offers interactive learning tools such as quizzes and discussion boards that keep students engaged. The platform's analytics also provide insights into student performance, helping educators tailor their teaching strategies.",
    },
    {
      question: 'Is there a trial period for ${projectName}?',
      answer:
        "Yes, we offer a trial period for new users to explore the features of ${projectName}. This allows you to experience the platform's capabilities before committing to a subscription.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our services, features, and how we can support your online education journey.`}
        />
      </Head>
      <WebSiteHeader projectName={'testdmode'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'testdmode'}
          image={['Person reading a FAQ document']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. We're here to help you make the most of our platform.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Find Answers Now`}
        />

        <FaqSection
          projectName={'testdmode'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'testdmode'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
