import { CategoryProductAPI, ProductAPI } from "./api";


const categories = await CategoryProductAPI.getAll();
const products = await ProductAPI.getAll();


export function toSlug(phrase: string): string {
  if (!phrase || phrase.trim() === "") return "";

  // Thay đ/Đ trước để không bị mất
  let str = phrase.replace(/Đ/g, "D").replace(/đ/g, "d");

  // Tách dấu Unicode rồi loại bỏ các ký tự mark (dấu)
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Chuyển về lowercase
  str = str.toLowerCase();

  // Loại bỏ ký tự không phải a-z, 0-9, khoảng trắng hoặc dấu -
  str = str.replace(/[^a-z0-9\s-]/g, "");

  // Đổi khoảng trắng thành -, trim và gom nhiều - thành 1
  str = str.trim().replace(/\s+/g, "-").replace(/-+/g, "-");

  return str;
}

function removeDiacritics(str: string): string {
  return str
    .normalize("NFD")               // Tách ký tự Unicode
    .replace(/[\u0300-\u036f]/g, ""); // Xóa dấu
}


export const categoriesWithSlug = categories.map(c => ({
    ...c,
    slug: toSlug(c.name)
    
}));


export const productsWithSlug = products.map(p => ({
    ...p,
    slug: toSlug(p.name)
    
}));


