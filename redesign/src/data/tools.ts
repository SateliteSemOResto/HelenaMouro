export type ToolGroup = { title: string; items: string[] };

// Groups alternate left / right automatically, in this order.
export const toolGroups: ToolGroup[] = [
  { title: "Programming Languages", items: ["Java", "C", "Python", "JavaScript", "Kotlin", "TypeScript"] },
  { title: "Front-End Development", items: ["HTML", "React", "JavaScript", "TypeScript", "CSS"] },
  { title: "Back-End Development", items: ["Node.js", "Express.js", ".NET"] },
  { title: "Databases", items: ["SQL", "MySQL", "PL/SQL"] },
  { title: "Software Engineering", items: ["UML", "Agile/SCRUM", "Domain-Driven Design"] },
  { title: "UI/UX Design", items: ["Figma", "Adobe Creative Cloud"] },
  { title: "Other Technologies", items: ["Unity", "Augmented Reality", "ANTLR"] },
];
