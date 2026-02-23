export type Language = 'KR' | 'EN';

export interface Project {
  id: number;
  title_kr: string;
  title_en: string;
  description_kr: string;
  description_en: string;
  category: string;
  image_url: string;
  video_url?: string;
}

export interface MediaItem {
  id: number;
  title_kr: string;
  title_en: string;
  summary_kr: string;
  summary_en: string;
  image_url: string;
  date: string;
}
