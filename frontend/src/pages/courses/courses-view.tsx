import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/courses/coursesSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

import { hasPermission } from '../../helpers/userPermissions';

const CoursesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.courses);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View courses')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View courses')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Title</p>
            <p>{courses?.title}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Syllabus</p>
            {courses.syllabus ? (
              <p dangerouslySetInnerHTML={{ __html: courses.syllabus }} />
            ) : (
              <p>No data</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>ResourceMaterials</p>
            {courses?.resources?.length ? (
              dataFormatter.filesFormatter(courses.resources).map((link) => (
                <button
                  key={link.publicUrl}
                  onClick={(e) => saveFile(e, link.publicUrl, link.name)}
                >
                  {link.name}
                </button>
              ))
            ) : (
              <p>No ResourceMaterials</p>
            )}
          </div>

          <>
            <p className={'block font-bold mb-2'}>Instructors</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>

                      <th>Last Name</th>

                      <th>Phone Number</th>

                      <th>E-Mail</th>

                      <th>Disabled</th>

                      <th>FirstName</th>

                      <th>LastName</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.instructors &&
                      Array.isArray(courses.instructors) &&
                      courses.instructors.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/users/users-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='firstName'>{item.firstName}</td>

                          <td data-label='lastName'>{item.lastName}</td>

                          <td data-label='phoneNumber'>{item.phoneNumber}</td>

                          <td data-label='email'>{item.email}</td>

                          <td data-label='disabled'>
                            {dataFormatter.booleanFormatter(item.disabled)}
                          </td>

                          <td data-label='first_name'>{item.first_name}</td>

                          <td data-label='last_name'>{item.last_name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!courses?.instructors?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Students</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>

                      <th>Last Name</th>

                      <th>Phone Number</th>

                      <th>E-Mail</th>

                      <th>Disabled</th>

                      <th>FirstName</th>

                      <th>LastName</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.students &&
                      Array.isArray(courses.students) &&
                      courses.students.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/users/users-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='firstName'>{item.firstName}</td>

                          <td data-label='lastName'>{item.lastName}</td>

                          <td data-label='phoneNumber'>{item.phoneNumber}</td>

                          <td data-label='email'>{item.email}</td>

                          <td data-label='disabled'>
                            {dataFormatter.booleanFormatter(item.disabled)}
                          </td>

                          <td data-label='first_name'>{item.first_name}</td>

                          <td data-label='last_name'>{item.last_name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!courses?.students?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>organizations</p>

            <p>{courses?.organizations?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Analytics Course</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>StudentEngagement</th>

                      <th>CompletionRate</th>

                      <th>InstructorPerformance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.analytics_course &&
                      Array.isArray(courses.analytics_course) &&
                      courses.analytics_course.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/analytics/analytics-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='student_engagement'>
                            {item.student_engagement}
                          </td>

                          <td data-label='completion_rate'>
                            {item.completion_rate}
                          </td>

                          <td data-label='instructor_performance'>
                            {item.instructor_performance}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!courses?.analytics_course?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Discussion_boards Course</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.discussion_boards_course &&
                      Array.isArray(courses.discussion_boards_course) &&
                      courses.discussion_boards_course.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/discussion_boards/discussion_boards-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='topic'>{item.topic}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!courses?.discussion_boards_course?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Enrollments Course</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>PaymentStatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.enrollments_course &&
                      Array.isArray(courses.enrollments_course) &&
                      courses.enrollments_course.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/enrollments/enrollments-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='payment_status'>
                            {item.payment_status}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!courses?.enrollments_course?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/courses/courses-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

CoursesView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_COURSES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default CoursesView;
