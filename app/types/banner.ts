export interface Banner {
  id: number;
  title: string;
  // description?: string; // nếu muốn dùng
  imageUrl: string;
  // redirectUrl?: string; // nếu muốn dùng
  isActive: boolean;
  displayOrder: number;
  createdAt: string; // DateTime ở TS thường dùng string hoặc Date
}