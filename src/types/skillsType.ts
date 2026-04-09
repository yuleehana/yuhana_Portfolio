export interface SKILLS_MENU {
  id: string;
  label: string;
  columns: SKILLS_COLUMN[];
}

export interface SKILLS_COLUMN {
  id: string;
  label: string;
  icon: string;
  desc: string;
}
