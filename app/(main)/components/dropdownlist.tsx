// "use client";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// interface DropdownProps {
//   label?: string;
//   items: string[];
// }

// export default function Dropdown({ label = "Chọn tỉnh / thành phố", items }: DropdownProps) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState<string | null>(null);

//   const handleSelect = (item: string) => {
//     setSelected(item);
//     setOpen(false);
//   };

//   return (
//     <div className="relative w-64">
//       {label && <p className="mb-1 text-sm text-amber-100">{label}</p>}

//       {/* Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between px-4 py-3 
//                    bg-white border rounded-xl shadow-sm
//                    hover:border-gray-400 transition-all"
//       >
//         <span className="text-gray-700">{selected || "Chọn..."}</span>
//         <ChevronDown
//           className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
//           size={20}
//         />
//       </button>

//       {/* Dropdown Menu */}
//       {open && (
//         <ul
//           className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-xl border 
//                      overflow-hidden animate-fadeIn"
//         >
//           {items.map((item) => (
//             <li
//               key={item}
//               onClick={() => handleSelect(item)}
//               className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-gray-700"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// interface CityWardDropdownProps {
//   data: Record<string, string[]>;
// }

// export default function CityWardDropdown({ data }: CityWardDropdownProps) {
//   const cities = Object.keys(data);

//   const [city, setCity] = useState<string>("");
//   const [ward, setWard] = useState<string>("");

//   const wards = city ? data[city] : [];

//   return (
//     <div className="flex flex-col gap-6 w-80">
//       {/* Dropdown tỉnh */}
//       <div>
//         <p className="mb-1 text-sm text-amber-100">Chọn Tỉnh / Thành phố</p>
//         <select
//           value={city}
//           onChange={(e) => {
//             setCity(e.target.value);
//             setWard("");
//           }}
//           className="w-full px-4 py-3 bg-white border rounded-xl shadow-sm hover:border-gray-400 transition-all"
//         >
//           <option value="">-- Chọn tỉnh --</option>
//           {cities.map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Dropdown phường */}
//       <div>
//         <p className="mb-1 text-sm text-amber-100">Chọn Phường / Quận</p>
//         <select
//           value={ward}
//           onChange={(e) => setWard(e.target.value)}
//           disabled={!city}
//           className="w-full px-4 py-3 bg-white border rounded-xl shadow-sm 
//                      hover:border-gray-400 transition-all disabled:bg-gray-100 disabled:text-gray-400"
//         >
//           <option value="">-- Chọn phường --</option>
//           {wards.map((w) => (
//             <option key={w} value={w}>
//               {w}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";

interface CityWardDropdownProps {
  data: Record<string, string[]>;
  onChange: (city: string, ward: string) => void;
}

export default function CityWardDropdown({ data, onChange }: CityWardDropdownProps) {
  const cities = Object.keys(data);

  const [city, setCity] = useState<string>("");
  const [ward, setWard] = useState<string>("");

  const wards = city ? data[city] : [];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Dropdown tỉnh */}
      <div>
        <p className="mb-1 text-sm text-amber-100">Chọn Tỉnh / Thành phố</p>
        <select
          value={city}
          onChange={(e) => {
            const newCity = e.target.value;
            setCity(newCity);
            setWard("");
            onChange(newCity, "");
          }}
          className="w-full px-4 py-3 bg-white text-black border rounded-xl shadow-sm"
        >
          <option value="">-- Chọn tỉnh --</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown phường */}
      <div>
        <p className="mb-1 text-sm text-amber-100">Chọn Phường / Xã</p>
        <select
          value={ward}
          onChange={(e) => {
            setWard(e.target.value);
            onChange(city, e.target.value);
          }}
          disabled={!city}
          className="w-full px-4 py-3 bg-white text-black border rounded-xl shadow-sm disabled:bg-gray-100 disabled:text-gray-400"
        >
          <option value="">-- Chọn phường --</option>
          {wards.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
