export enum Status {
  PUBLISHED= "Published",
  CREATED= "Created",
  DRAFT= "Draft",
}

export interface CardProps {
  id: number;
  title: string;
  category: string;
  date: string;
  status: "Published" | "Created" | "Draft",
  views: number;
  image: string;
}
