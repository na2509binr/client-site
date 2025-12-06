export const API_URL = process.env.NEXT_PUBLIC_API_URL;



// -------------------------
// Helper API Call chung
// -------------------------
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {


    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status} - ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    console.log("API_URL:" + API_URL);
    console.log("Endpoint:" + endpoint);
    console.log("Options:" + options);
    console.error("Fetch exception:", err);
    throw err;
  }
}







// -------------------------
// Category Product API
// -------------------------

export const CategoryProductAPI = {
  getAll: () => request<any[]>("/api/category-product/get-all"),

  getById: (id: number) =>
    request(`/api/category-product/get-by-id/${id}`),

  insert: (data: any) =>
    request("/api/category-product/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/category-product/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/category-product/delete/${id}`, {
      method: "DELETE",
    }),
};

// ----------------------------------
// Product API
// ----------------------------------
export const ProductAPI = {
  getAll: () => request<any[]>("/api/product/get-all"),

  getFiltByCateId: (cateId: number) =>
    request(`/api/product/get-filt-by-cate-id?cateId=${cateId}`),

  getById: (id: number) =>
    request(`/api/product/get-by-id/${id}`),

  insert: (data: any) =>
    request("/api/product/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/product/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/product/delete/${id}`, {
      method: "DELETE",
    }),
};


// ----------------------------------
// News API
// ----------------------------------
export const NewsAPI = {
  getAll: () => request<any[]>("/api/new/get-all"),

  GetNewsByCategoryNewId: (categoryNewId: string) =>
    request<any[]>(`/api/new/get-news-by-category-new-id?categoryNewUrl=${categoryNewId}`),
  
  getById: (id: number) =>
    request(`/api/new/get-by-id/${id}`),

  insert: (data: any) =>
    request("/api/new/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/new/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/new/delete/${id}`, {
      method: "DELETE",
    }),
};

// ----------------------------------
// News Section API
// ----------------------------------
export const NewsSectionAPI = {
  getAll: () => request<any[]>("/api/news-section/get-all"),

  getById: (id: number) =>
    request(`/api/news-section/get-by-id/${id}`),

  getByNewsId: (newsId: number) =>
    request(`/api/news-section/get-by-news-id?newsId=${newsId}`),

  insert: (data: any) =>
    request("/api/news-section/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/news-section/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/news-section/delete?id=${id}`, {
      method: "DELETE",
    }),
};

// ----------------------------------
// Menu API
// ----------------------------------
export const MenuAPI = {
  getAll: () => request<any[]>("/api/menu/get-all"),
  getTree: () => request<any[]>("/api/menu/get-tree"),

  getById: (id: number) =>
    request(`/api/menu/get-by-id/${id}`),

  insert: (data: any) =>
    request("/api/menu/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/menu/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/menu/delete/${id}`, {
      method: "DELETE",
    }),
};

// ----------------------------------
// Store API
// ----------------------------------
export const StoreAPI = {
  getAll: () => request<any[]>("/api/store/get-all"),

  getById: (id: number) =>
    request(`/api/store/get-by-id/${id}`),

  insert: (data: any) =>
    request("/api/store/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/store/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/store/delete?id=${id}`, {
      method: "DELETE",
    }),
};

// ----------------------------------
// Config Site API
// ----------------------------------
export const ConfigSiteAPI = {
  getAll: () => request<any[]>("/api/config-site/get-all"),
  getIndex: () => request<any[]>("/api/config-site/get-index"),

  getById: (id: number) =>
    request(`/api/config-site/get-by-id/${id}`),

  insert: (data: any) =>
    request("/api/config-site/insert", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (data: any) =>
    request("/api/config-site/update", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    request(`/api/config-site/delete?id=${id}`, {
      method: "DELETE",
    }),
};



// -------------------------
// Upload File
// -------------------------

export async function uploadFile(file: File, folder: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const res = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload failed!");
  }

  return res.json();
}
