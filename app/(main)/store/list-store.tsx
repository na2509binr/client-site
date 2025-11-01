"use client";

import { Store } from "../../types/store";

type StoreListProps  = {
    data: Store[];
};

export default function StoreList({ data }: StoreListProps) {
  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Không có cửa hàng nào phù hợp.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {data.map((store) => (
        <div key={store.id} className="flex gap-4 p-5 border rounded-xl shadow-sm">
          <img
            src={store.image}
            alt={store.name}
            className="w-32 h-24 object-cover rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <h3 className="font-bold text-lg">{store.name}</h3>
            <p className="text-gray-600">{store.address}</p>
            <p className="text-gray-500">{store.ward}, {store.city}</p>
            <p className="font-semibold text-[#ff281c]">{store.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
