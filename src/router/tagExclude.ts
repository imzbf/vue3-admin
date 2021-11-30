export const list = [/^\/login/, /^\/redirect\/.*/];

export default (path: string) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].test(path)) {
      return true;
    }
  }

  return false;
};
