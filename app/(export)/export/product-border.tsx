import React from "react";

interface CustomDashedBorderProps {
    children?: React.ReactNode;
    dash?: number; // chiều dài nét đứt
    gap?: number; // khoảng cách giữa các nét đứt
    color?: string;
    thickness?: number;
}

const CustomDashedBorder: React.FC<CustomDashedBorderProps> = ({
    children,
    dash = 6,
    gap = 6,
    color = "#000",
    thickness = 2,
}) => {
    const pattern = `${color} ${dash}px, transparent ${dash + gap}px`;

    return (
        <div className="relative">
            {/* khung border */}
            <div
                className="absolute inset-0 pointer-events-none rounded-xl"
                style={{
                    mask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    padding: thickness,
                    background: `
            
            repeating-linear-gradient(180deg, ${pattern}) top right / ${thickness}px 100% no-repeat,
            repeating-linear-gradient(90deg, ${pattern}) bottom left / 100% ${thickness}px no-repeat,
            repeating-linear-gradient(180deg, ${pattern}) top left / ${thickness}px 100% no-repeat
          `,
                }}
            ></div>

            {/* content */}
            <div className="p-4">{children}</div>
        </div>
    );
};
// repeating-linear-gradient(90deg, ${pattern}) top left / 100% ${thickness}px no-repeat,
export default CustomDashedBorder;
