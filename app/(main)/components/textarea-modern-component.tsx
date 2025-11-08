interface TextareaProp {
    label: string;
    rows?: number;
    id?: string;
}

export default function Textarea1({ label, rows = 4, id }: TextareaProp) {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 5)}`;

    return (
        <div className="relative mt-2">
            <textarea
                id={textareaId}
                placeholder=" "
                rows={rows}
                className="peer w-full border-b border-[#dddddd] 
                   focus:border-[#181818] focus:outline-none focus:ring-0
                   transition-[top,transform,color,font-size] duration-300 mt-2 py-1 resize-y"
            />
            <label
                htmlFor={textareaId}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none
                   transition-[top,transform,color,font-size] duration-300
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                   peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#181818]
                   peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#181818]"
            >
                {label}
            </label>
        </div>
    );
}
