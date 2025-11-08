import React from "react";
import { NewsSection } from "../../../types/new";

interface Props {
  sections: NewsSection[] | undefined;
}

const NewsSections: React.FC<Props> = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="mt-6">
      {sections.map((item, index) => {
        const sectionId = `section${index + 1}`;

        return (
          <div id={sectionId} key={item.id} className="mb-6 scroll-mt-28">
            <h2 className="text-[#01387F] text-[24px] font-bold mb-3 pl-3 leading-10 border-l-[5px] border-[#dc2626]">
              {item.title}
            </h2>

            <p
              className="leading-10 text-[20px]"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsSections;
