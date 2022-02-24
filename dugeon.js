export function sum(a, b) { return a + b; }

export function dugeon(hero) {
  const {strength, iq} = hero;
  if (strength >= 50 && iq >= 90) {
    return `${hero.hero}⚔️💰💍👑`;
  } else if (strength >= 50) {
    return `${hero.hero}⚔️🏥`;
  } else if (iq >= 90) {
    return `${hero.hero}🐍💰💍👑`;
  } else {
    return `💀`;
  }
}
