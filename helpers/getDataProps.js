const getDataProps = {
  query: {
    program: 'program',
    review: 'review',
    teacher: 'teacher',
    webinar: 'webinar'
  },
  select: {
    program: {
      default: 'id title slug category timenprice study_field',
      studyFields: 'id study_field',
      pathsStudyFields: 'id study_field category',
      pathsPrograms: 'id slug study_field category'
    },
    review: {
      default: 'id name profession title story picture'
    },
    teacher: {
      default: 'id name achievements portrait'
    },
    webinar: {
      default: 'id name date picture title'
    }
  },
  populate: {
    program: {
      default: [
        { path: 'study_field', select: 'title slug' },
        { path: 'category', select: 'type label slug' }
      ],
      studyFieldSlugs: [
        { path: 'study_field', select: 'slug' },
        { path: 'category', select: 'type' }
      ]
    }
  }
}

module.exports = getDataProps
