export type ResourceGuide = {
  readonly href: `/resources/${string}`;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly bestFor: string;
};

export const resourceGuides = [
  {
    href: "/resources/how-to-improve-academic-vocabulary",
    title: "Improve Academic Vocabulary Naturally",
    description:
      "Use a practical word-choice method, original before-and-after examples, and a quick revision checklist for essays and research writing.",
    category: "Academic writing guide",
    bestFor: "Choosing precise words without making your writing sound forced",
  },
  {
    href: "/resources/best-word-game-dictionaries",
    title: "Word Game Dictionaries Compared",
    description:
      "Compare references for casual word games, tournament-style play, family game nights, and crossword solving.",
    category: "Word game buying guide",
    bestFor: "Choosing a reference that matches the words and rules you use",
  },
  {
    href: "/resources/best-vocabulary-tools-for-adults",
    title: "Vocabulary Tools for Adults Compared",
    description:
      "Compare practical tools for learning new words, remembering them, and using them with confidence.",
    category: "Vocabulary learning guide",
    bestFor: "Finding a learning method that fits your goals and routine",
  },
] as const satisfies readonly ResourceGuide[];
