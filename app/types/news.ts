// export type News = {
//     id?: number;

//     title: string;
//     description: string;

//     url?: string; // NotMapped bên .NET → FE nhận nhưng không gửi
//     view: number;
//     image: string;
//     categoryNewId: number;
//     author: string;
//     active: boolean;
//     order: number;
//     createdAt?: string;
// };




export type News = {
  id: number;
  title: string;
  description: string;
  view: number;
  image: string;
  author: string;
  active: boolean;
  order: number;
  categoryNewId: number;
  createdAt?: string;
  storeId?: number | null;  // ✅ Thêm field này
  store?: {                  // ✅ Optional navigation
    id: number;
    name: string;
    address?: string;
  };
};