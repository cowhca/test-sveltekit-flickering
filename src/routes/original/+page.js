export function load() {
  const number = Math.floor(Math.random() * 100);
  console.log("ORIGINAL\tIn +page.js:", number);
  return {
    number,
  };
}
