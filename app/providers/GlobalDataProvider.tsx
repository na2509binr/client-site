"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CategoryProductAPI, ProductAPI, ConfigSiteAPI } from "@/app/utils/api";

interface GlobalData {
  // categories: any[];
  // products: any[];
  configSite: any | null;
}

const GlobalContext = createContext<GlobalData>({
  // categories: [],
  // products: [],
  configSite: null,
});

export function GlobalDataProvider({ children }: { children: React.ReactNode }) {
  // const [categories, setCategories] = useState<any[]>([]);
  // const [products, setProducts] = useState<any[]>([]);
  const [configSite, setConfigSite] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      // const cate = await CategoryProductAPI.getAll();
      // const pro = await ProductAPI.getAll();
      const cfg = await ConfigSiteAPI.getIndex();

      // setCategories(cate);
      // setProducts(pro);
      setConfigSite(cfg);
    }

    fetchData();
  }, []);

  return (
    // <GlobalContext.Provider value={{ categories, products, configSite }}>
    <GlobalContext.Provider value={{ configSite }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalData() {
  return useContext(GlobalContext);
}
