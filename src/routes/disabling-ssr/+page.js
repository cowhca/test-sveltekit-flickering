export const ssr = false;

export function load() {
  const number = Math.floor(Math.random() * 100);
  console.log("NO SSR\tIn +page.js:", number);
  return {
    number,
  };
}
