export interface MovieDisplay {
  title: string;
  description: string;
  year: string;
  image: string;
}

export interface MovieData extends MovieDisplay{
  id: string;
}