export function getDefinition(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((data) => data[0]?.meanings[0]?.definitions[0]?.definition);
}

export async function getDefinitionTwo(word) {
  let res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  let data = await res.json();
  return data[0]?.meanings[0]?.definitions[0]?.definition;
}
