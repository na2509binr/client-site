// import React from "react";
// import { NewsSection } from "../../../types/new";

// interface Props {
//   sections: NewsSection[] | undefined;
// }

// const NewsSections: React.FC<Props> = ({ sections }) => {
//   if (!sections || sections.length === 0) return null;

//   return (
//     <div className="mt-6">
//       {sections.map((item, index) => {
//         const sectionId = `section${index + 1}`;

//         return (
//           <div id={sectionId} key={item.id} className="mb-6 scroll-mt-28">
//             <h2 className="text-[#01387F] text-[24px] font-bold mb-3 pl-3 leading-10 border-l-[5px] border-[#dc2626]">
//               {item.title}
//             </h2>

//             <p
//               className="leading-10 text-[20px]"
//               dangerouslySetInnerHTML={{ __html: item.content }}
//             ></p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default NewsSections;





// import React from "react";
// import { NewsSection } from "../../../types/new";

// interface Props {
//   sections?: NewsSection[];
// }

// const NewsSections: React.FC<Props> = ({ sections }) => {
//   if (!sections || sections.length === 0) return null;

//   // Sắp xếp theo order nếu có
//   const sorted = [...sections].sort((a, b) => a.order - b.order);

//   return (
//     <div className="mt-6">
//       {sorted.map((item, index) => {
//         const sectionId = `section-${item.id}`;

//         return (
//           <>



//             <section
//               id={sectionId}
//               key={item.id}
//               className="mb-6 scroll-mt-28"
//             >
//               <h2 className="text-[#01387F] text-[24px] font-bold mb-3 pl-3 leading-10 border-l-[5px] border-[#dc2626]">
//                 {item.title}
//               </h2>

//               <div
//                 className="leading-10 text-[20px]"
//                 dangerouslySetInnerHTML={{ __html: item.content }}
//               />
//             </section>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default NewsSections;






"use client";

import React from "react";
import { NewsSection } from "../../../types/new";
import { Dot } from "lucide-react";

interface Props {
  sections?: NewsSection[];
}

const NewsSections: React.FC<Props> = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  const sorted = [...sections].sort((a, b) => a.order - b.order);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-6">

      {/* ========= TABLE OF CONTENTS ========= */}
      <aside className="mb-8 p-4 bg-gray-50 border-2 border-red-600 rounded">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Mục lục bài viết
        </h3>

        <ul className="space-y-2 list-decimal list-inside">
          {sorted.map((item) => {
            const sectionId = `section-${item.id}`;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(sectionId)}
                  className="text-blue-600 hover:underline text-left cursor-pointer"
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
      {/* ==================================== */}

      {/* ========= SECTIONS ========== */}
      {sorted.map((item) => {
        const sectionId = `section-${item.id}`;

        return (
          <section
            id={sectionId}
            key={item.id}
            className="mb-6 scroll-mt-28"
          >
            <h2 className="text-[#01387F] text-[24px] font-bold mb-3 pl-3 leading-10 border-l-[5px] border-[#dc2626]">
              {item.title}
            </h2>

            <div
              className="leading-10 text-[20px]"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </section>
        );
      })}
      {/* ============================ */}
    </div>
  );
};

export default NewsSections;
