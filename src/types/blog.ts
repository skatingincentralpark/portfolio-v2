export type Post = {
  slug?: string;
  title?: string;
  content?: string;
};

export const validDirectories = {
  book: "book",
  misc: "misc",
};

export type Directory = keyof typeof validDirectories;
