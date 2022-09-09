// @service()
export const greetMe = async (name: string): Promise<string> => {
  // In the browser, accessing process.arch cause an error.
  return `Hello ${name}, great to see you on ${typeof window === "undefined" ? `${process.arch} server` : "browser"}!`;
};
