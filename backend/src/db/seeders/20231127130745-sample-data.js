const db = require('../models');
const Users = db.users;

const Analytics = db.analytics;

const Courses = db.courses;

const DiscussionBoards = db.discussion_boards;

const Enrollments = db.enrollments;

const Instructors = db.instructors;

const Students = db.students;

const Organizations = db.organizations;

const AnalyticsData = [
  {
    // type code here for "relation_one" field

    student_engagement: 7,

    completion_rate: 3,

    instructor_performance: 3,

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    student_engagement: 8,

    completion_rate: 6,

    instructor_performance: 5,

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    student_engagement: 5,

    completion_rate: 8,

    instructor_performance: 8,

    // type code here for "relation_one" field
  },
];

const CoursesData = [
  {
    title: 'Alfred Wegener',

    syllabus: 'Marie Curie',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Jean Piaget',

    syllabus: 'Hans Bethe',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Heike Kamerlingh Onnes',

    syllabus: 'Michael Faraday',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const DiscussionBoardsData = [
  {
    // type code here for "relation_one" field

    topic: 'Albrecht von Haller',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Dmitri Mendeleev',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    topic: 'Paul Dirac',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const EnrollmentsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Pending',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Pending',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'Pending',

    // type code here for "relation_one" field
  },
];

const InstructorsData = [
  {
    first_name: 'Galileo Galilei',

    last_name: 'Gregor Mendel',

    qualifications: 'Gertrude Belle Elion',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'August Kekule',

    last_name: 'Robert Koch',

    qualifications: 'Pierre Simon de Laplace',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Frederick Sanger',

    last_name: 'Jean Piaget',

    qualifications: 'Justus Liebig',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const StudentsData = [
  {
    first_name: 'Marie Curie',

    last_name: 'Erwin Schrodinger',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Louis Victor de Broglie',

    last_name: 'Konrad Lorenz',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Stephen Hawking',

    last_name: 'William Bayliss',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Wilhelm Wundt',
  },

  {
    name: 'Ernest Rutherford',
  },

  {
    name: 'Claude Levi-Strauss',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }
}

async function associateAnalyticWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setCourse) {
    await Analytic0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setCourse) {
    await Analytic1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setCourse) {
    await Analytic2.setCourse(relatedCourse2);
  }
}

async function associateAnalyticWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setOrganization) {
    await Analytic0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setOrganization) {
    await Analytic1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setOrganization) {
    await Analytic2.setOrganization(relatedOrganization2);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateCourseWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course0 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Course0?.setOrganization) {
    await Course0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course1 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Course1?.setOrganization) {
    await Course1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course2 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Course2?.setOrganization) {
    await Course2.setOrganization(relatedOrganization2);
  }
}

async function associateDiscussionBoardWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard0 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (DiscussionBoard0?.setCourse) {
    await DiscussionBoard0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard1 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (DiscussionBoard1?.setCourse) {
    await DiscussionBoard1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard2 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (DiscussionBoard2?.setCourse) {
    await DiscussionBoard2.setCourse(relatedCourse2);
  }
}

// Similar logic for "relation_many"

async function associateDiscussionBoardWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard0 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (DiscussionBoard0?.setOrganization) {
    await DiscussionBoard0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard1 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (DiscussionBoard1?.setOrganization) {
    await DiscussionBoard1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard2 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (DiscussionBoard2?.setOrganization) {
    await DiscussionBoard2.setOrganization(relatedOrganization2);
  }
}

async function associateEnrollmentWithStudent() {
  const relatedStudent0 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setStudent) {
    await Enrollment0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setStudent) {
    await Enrollment1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setStudent) {
    await Enrollment2.setStudent(relatedStudent2);
  }
}

async function associateEnrollmentWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setCourse) {
    await Enrollment0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setCourse) {
    await Enrollment1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setCourse) {
    await Enrollment2.setCourse(relatedCourse2);
  }
}

async function associateEnrollmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setOrganization) {
    await Enrollment0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setOrganization) {
    await Enrollment1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setOrganization) {
    await Enrollment2.setOrganization(relatedOrganization2);
  }
}

// Similar logic for "relation_many"

async function associateInstructorWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor0 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Instructor0?.setOrganization) {
    await Instructor0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor1 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Instructor1?.setOrganization) {
    await Instructor1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor2 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Instructor2?.setOrganization) {
    await Instructor2.setOrganization(relatedOrganization2);
  }
}

// Similar logic for "relation_many"

async function associateStudentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student0 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Student0?.setOrganization) {
    await Student0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student1 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Student1?.setOrganization) {
    await Student1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student2 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Student2?.setOrganization) {
    await Student2.setOrganization(relatedOrganization2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Analytics.bulkCreate(AnalyticsData);

    await Courses.bulkCreate(CoursesData);

    await DiscussionBoards.bulkCreate(DiscussionBoardsData);

    await Enrollments.bulkCreate(EnrollmentsData);

    await Instructors.bulkCreate(InstructorsData);

    await Students.bulkCreate(StudentsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateAnalyticWithCourse(),

      await associateAnalyticWithOrganization(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateCourseWithOrganization(),

      await associateDiscussionBoardWithCourse(),

      // Similar logic for "relation_many"

      await associateDiscussionBoardWithOrganization(),

      await associateEnrollmentWithStudent(),

      await associateEnrollmentWithCourse(),

      await associateEnrollmentWithOrganization(),

      // Similar logic for "relation_many"

      await associateInstructorWithOrganization(),

      // Similar logic for "relation_many"

      await associateStudentWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('analytics', null, {});

    await queryInterface.bulkDelete('courses', null, {});

    await queryInterface.bulkDelete('discussion_boards', null, {});

    await queryInterface.bulkDelete('enrollments', null, {});

    await queryInterface.bulkDelete('instructors', null, {});

    await queryInterface.bulkDelete('students', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
