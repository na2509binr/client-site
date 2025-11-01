"use client";

import { useEffect, useState } from "react";
import { Banner } from "@/app/types/banner";
import InsertUpdateBannerForm from "./insert-update-banner";
import TableBanner from "./table-banner";

export default function BannerPage() {
  const [records, setRecords] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [updateData, setUpdateData] = useState<Partial<Banner>>({});

  const fetchBanners = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/banner/get-all`);
      const data = await res.json();
      setRecords(data);
    } catch (err) {
      console.error("Fetch banners error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleSelect = (record: Banner) => {
    setUpdateData(record);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/banner/delete?id=${id}`, { method: "DELETE" });
    fetchBanners();
  };

  return (
    <div className="space-y-8">
      <InsertUpdateBannerForm initialData={updateData} fetchBanners={fetchBanners} />

      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <TableBanner records={records} onSelect={handleSelect} onDelete={handleDelete} />
      )}
    </div>
  );
}
