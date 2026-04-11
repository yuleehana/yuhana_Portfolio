export interface PROJECTS_MENU {
  id: string;
  title: string;
  subTitle: string;
  thumbnail: string;

  github?: string;
  demo?: string;
  period?: string;

  team?: string;

  // 카드에서 쓸 것
  shortDescription: string;
  skills: {
    name: string;
    img: string;
  }[];

  // 상세 모달에서 쓸 것
  detail: {
    description: string[];
    keyFeatures: {
      title: string;
      column: ROLES_COLUMN[];
    }[];
    problems: string[];
    solutions: string[];
    results: string[];
    members?: {
      me?: boolean;
      name: string;
      role: string[];
    }[];
    images: string[];
  };
}

export interface ROLES_COLUMN {
  subTitle: string;
  desc?: string[];
}
