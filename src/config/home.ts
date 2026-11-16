export const home = {
  hero: {
    eyebrow: 'Praying the Psalms',
    title: 'Pray the Psalms, one at a time',
    description: 'A guided walk through all 150 psalms. Study each one, pray it, and find Christ in it.',
    placeholder: 'Search by psalm, theme, or feeling...',
  },
  /** The chips under the hero search and the suggestions shown before anyone types. */
  popular: {
    label: 'Begin with',
    categories: ['start-here'],
    limit: 4,
  },
  recent: {
    title: 'Newly added',
    description: 'The latest psalms and prayer guides.',
    limit: 5,
  },
  /** The closing band. Remove an action to drop its button. */
  support: {
    title: 'Not sure how to begin?',
    description: 'Start with a short guide to praying the psalms, or tell us how this could serve you better.',
    actions: [
      { label: 'Start here', href: '/getting-started/start-here', variant: 'primary' },
      { label: 'Share feedback', href: 'https://github.com/jsantiago611/pray-the-psalms/issues', variant: 'secondary' },
    ],
  },
} as const;