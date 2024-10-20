export function extractVariables(templateContent) {
  const regex = /{{(.*?)}}/g;
  const matches = [];
  let match;

  while ((match = regex.exec(templateContent)) !== null) {
    matches.push(match[1]);
  }

  return matches;
}
