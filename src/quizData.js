// src/quizData.js

export const quizSections = [
  {
    id: "fundamental-rights",
    title: "Fundamental Rights",
    description: "Articles 12–35 – Rights guaranteed to every citizen.",
    subtopics: [
      {
        id: "fr-overview",
        title: "Overview of Fundamental Rights",
        description: "Basic understanding and classification of Fundamental Rights.",
        questions: [
          {
            question: "Which Part of the Constitution deals with Fundamental Rights?",
            options: ["Part I", "Part II", "Part III", "Part IV"],
            answer: "Part III",
            hint: "Think of Articles 12–35."
          },
          {
            question: "Fundamental Rights are mainly enforceable against?",
            options: ["Only individuals", "Only State", "State and sometimes individuals", "Only Parliament"],
            answer: "State and sometimes individuals",
            hint: "Article 12 defines 'State'."
          },
          {
            question: "Which Article is called the ‘heart and soul’ of the Constitution?",
            options: ["Article 14", "Article 19", "Article 21", "Article 32"],
            answer: "Article 32",
            hint: "Dr. Ambedkar used this phrase."
          }
        ]
      },
      {
        id: "fr-equality",
        title: "Right to Equality",
        description: "Articles 14–18 – Equality before law, prohibition of discrimination, etc.",
        questions: [
          {
            question: "Article 14 guarantees:",
            options: [
              "Equality before law and equal protection of laws",
              "Freedom of speech",
              "Freedom of religion",
              "Right against exploitation"
            ],
            answer: "Equality before law and equal protection of laws",
            hint: "It has two key phrases: 'equality before law' and 'equal protection of the laws'."
          },
          {
            question: "Article 17 abolishes:",
            options: ["Untouchability", "Titles", "Begaar", "Child labour"],
            answer: "Untouchability",
            hint: "Related to social discrimination based on caste."
          }
        ]
      }
    ]
  },

  {
    id: "fundamental-duties",
    title: "Fundamental Duties",
    description: "Article 51A – Duties of every citizen of India.",
    subtopics: [
      {
        id: "fd-overview",
        title: "Overview of Fundamental Duties",
        description: "Origin, nature and importance of Fundamental Duties.",
        questions: [
          {
            question: "Fundamental Duties were added by which Constitutional Amendment?",
            options: ["24th", "39th", "42nd", "44th"],
            answer: "42nd",
            hint: "It is called the ‘Mini Constitution’."
          },
          {
            question: "Fundamental Duties are mentioned in:",
            options: ["Part III", "Part IVA", "Part IV", "Part IX"],
            answer: "Part IVA",
            hint: "They are not in the same part as Directive Principles."
          }
        ]
      }
    ]
  }
];

// Helper: get a flat list of all subtopics
export function getAllSubtopics() {
  return quizSections.flatMap(section => section.subtopics);
}
