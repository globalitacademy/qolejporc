export interface Department {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
