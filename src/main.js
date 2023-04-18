export default function extractSpecialAbilities(obj) {
  const { special } = obj;
  for (const elem of special) {
    if (!elem.description) {
      elem.description = 'Описание недоступно';
    }
  }
  return special;
}
