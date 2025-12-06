"use client";

import { useState, useEffect } from "react";
import { MenuItem } from "@/app/types/menu";
import InsertUpdateMenuForm from "./insert-update-menu";
import TableMenuItem from "./table-menu";
import { MenuAPI } from "@/app/utils/api";

export default function MenuPage() {
    const [records, setRecords] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [updateData, setUpdateData] = useState<Partial<MenuItem>>({});

    const fetchMenus = async () => {
        const data = await MenuAPI.getAll();
        setRecords(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    const handleSelect = (record: MenuItem) => {
        setUpdateData(record);
    };

    const handleDelete = async (id: number) => {
        await MenuAPI.delete(id);
        fetchMenus();
    };

    return (
        <div className="space-y-8">
            <InsertUpdateMenuForm initialData={updateData} fetchMenus={fetchMenus} />

            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <TableMenuItem
                    records={records}
                    onSelect={handleSelect}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}
