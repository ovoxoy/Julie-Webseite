export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  stars?: number;
  date?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}