# Phân tích dự án client-site (Tru Nguyen / VWRC)

> Tài liệu này lưu lại kết quả phân tích codebase để tham chiếu về sau — đọc file này trước, không cần quét lại toàn bộ code trừ khi có thay đổi lớn.
> Cập nhật lần cuối: 2026-07-09.

## 1. Tổng quan kỹ thuật

- Framework: Next.js 16 (App Router), React 19, TypeScript, Tailwind 4.
- Backend: API .NET riêng (không nằm trong repo này), gọi qua `NEXT_PUBLIC_API_URL` / `API_URL` (biến môi trường trong `.env`, `.env.production`).
- Branch làm việc: `FE-TruNguyen` (đồng bộ với `origin/FE-TruNguyen`).
- Thư viện chính: `@ckeditor` (rich text CMS), `flowbite-react`, `framer-motion`, `swiper`, `fontawesome`/`lucide-react` (icon), `formidable` (upload).

## 2. Cấu trúc route (App Router)

Chia 4 route group:

- `(main)` — site công khai: trang chủ, sản phẩm, blog/tin tức, giới thiệu, tuyển dụng, liên hệ, cửa hàng.
- `(cms)/cms` — trang quản trị nội bộ (không có layout công khai).
- `(login)` — trang đăng nhập + API route auth (`/api/auth/login`, `/api/auth/logout`).
- `(export)` — landing page "Xuất khẩu" độc lập, layout riêng, tách biệt hoàn toàn với site chính.

Ngoài ra có `app/api/upload` (upload file dùng chung), `app/providers/GlobalDataProvider.tsx` (context toàn cục), `app/types/*` (model dữ liệu), `app/utils/api.ts` (lớp gọi API).

## 3. Phân nhóm nghiệp vụ

| Nhóm | Route / file chính | Mô tả |
|---|---|---|
| Sản phẩm | `(main)/product`, `(cms)/cms/product`, `(cms)/cms/category-product` | CRUD sản phẩm + danh mục, lọc theo danh mục, trang chi tiết theo slug |
| Tin tức/Blog | `(main)/blog`, `(cms)/cms/news` (+ `news/insert`, `news/update`) | CRUD bài viết, danh mục tin, "news-section" (nội dung con trong 1 bài) |
| Cửa hàng/đại lý | `(main)/store`, `(cms)/cms/store` | CRUD điểm bán/phân phối |
| Giới thiệu công ty | `(main)/about`, `(main)/recruitment`, `(main)/contact` | Nội dung tĩnh + slider member/partner, tuyển dụng, liên hệ |
| Xuất khẩu | `(export)/export` | Landing page riêng, **nội dung hard-code**, chưa nối CMS |
| Cấu hình site | `(cms)/cms/config-site`, `seo-meta`, `banner`, `menu`, `partner`, `member` | Cấu hình chung (hotline, social, GA), SEO meta (OG/Twitter/JSON-LD), banner trang chủ, menu điều hướng |
| Xác thực & user | `(login)`, `(cms)/cms/user`, `app/types/user.ts` | Login/logout dùng access/refresh token (HttpOnly cookie), role Dev/Admin/User (CMS quản lý user còn sơ khai) |
| Upload ảnh | `app/api/upload`, `ImageUpload.tsx`, `MultiImageUpload.tsx` | Lưu file vào `public/uploads/{folder}/{yyyy}/{mm}/{dd}/` |
| Lớp API | `app/utils/api.ts`, `GlobalDataProvider.tsx` | `request()` chung bọc fetch, các namespace theo entity (Category/Product/News/Menu/Store/ConfigSite) |

## 4. Vấn đề kỹ thuật / rủi ro đã phát hiện

1. **Bảo mật nghiêm trọng**: `/cms/*` không có middleware hay kiểm tra `accessToken` nào — ai biết URL cũng vào được toàn bộ trang quản trị và thao tác CRUD. Cần vá trước khi launch.
2. **Bug redirect login**: sau khi đăng nhập thành công, code redirect tới `/dashboard` nhưng route thực tế là `/cms` → 404.
3. **CMS dashboard rỗng**: `(cms)/cms/page.tsx` vẫn là scaffold mặc định `create-next-app`, chưa có trang tổng quan thật.
4. **Code rác/trùng lặp**: 7 biến thể header trong `(main)/components/header*` (gồm 1 file rỗng `header-new.tsx`), nhiều block code cũ bị comment-out lớn (vd. `(main)/product/page.tsx`).
5. **Git working tree bất thường**: `git status` cho thấy TOÀN BỘ file trong repo đang "modified" dù không ai chỉnh nội dung — nghi do lệch line-ending (CRLF/LF) hoặc thiếu `.gitattributes`.
6. **Mock data song song với API thật**: nhiều file `app/types/*.tsx` (product, news, store, member, partner) vẫn chứa dữ liệu mẫu hard-code cạnh các API thật — cần xác định cái nào còn dùng và dọn bỏ.
7. **Trang Export tách biệt**: nội dung landing xuất khẩu hard-code hoàn toàn, không liên kết CMS/config-site.

## 5. Đề xuất hướng tiếp theo (chưa làm)

- Thêm middleware bảo vệ `/cms/*` bằng kiểm tra `accessToken`.
- Sửa redirect sau login (`/dashboard` → `/cms`).
- Dọn dẹp header trùng lặp + code comment rác.
- Kiểm tra/chuẩn hoá line-ending (`.gitattributes`) để git status sạch.
- Xây dựng trang dashboard CMS thật.
- Cân nhắc nối trang Export với `config-site`/CMS thay vì hard-code.

## 6. Lịch sử thay đổi tài liệu này

- 2026-07-09: Tạo lần đầu sau khi khảo sát toàn bộ codebase.
