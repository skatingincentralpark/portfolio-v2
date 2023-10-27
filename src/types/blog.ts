export type Post = {
  slug?: string;
  title?: string;
  author?: string;
  content?: string;
};

export const validDirectories = {
  book: "book",
  misc: "misc",
};

export type Directory = keyof typeof validDirectories;
