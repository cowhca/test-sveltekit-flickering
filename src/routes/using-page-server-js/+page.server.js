export function load() {
  const number = Math.floor(Math.random() * 100);
  console.log("In +page.server.js:", number);
  return {
    number,
  };
}
