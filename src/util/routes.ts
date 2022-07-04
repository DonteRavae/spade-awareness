interface route {
  dest: string;
  name: string;
};

export const routes: route[] = [
  {
    dest: "/members",
    name: "Members",
  },
  {
    dest: "/media",
    name: "Media",
  },
  {
    dest: "/forum",
    name: "Forum",
  },
  {
    dest: "/counseling",
    name: "Counseling",
  },
  {
    dest: "/merchandise",
    name: "Merchandise",
  },
];
