"use client";

import { useEffect, useState } from "react";
import { Store } from "@/app/types/store";
import InsertUpdateStoreForm from "./insert-update-store";
import TableStore from "./table-store";

export default function StorePage() {
    const [records, setRecords] = useState<Store[]>([]);
    const [updateData, setUpdateData] = useState<Partial<Store>>({});
    const [loading, setLoading] = useState(true);

    const fetchStores = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store/get-all`);
            const data = await res.json();
            setRecords(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStores();
    }, []);

    const handleSelect = (record: Store) => {
        setUpdateData(record);
    };

    const handleDelete = async (id: number) => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store/delete?id=${id}`, {
            method: "DELETE",
        });
        fetchStores();
    };

    return (
        <div className="space-y-8">
            <InsertUpdateStoreForm initialData={updateData} fetchStores={fetchStores} />

            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <TableStore records={records} onSelect={handleSelect} onDelete={handleDelete} />
            )}
        </div>
    );
}
