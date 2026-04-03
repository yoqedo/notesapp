import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <a
      href="/#download"
      className="
        inline-flex items-center gap-2
         text-white 
        px-5 py-2.5 
        rounded-full 
        shadow-[0_4px_14px_rgba(0,0,0,0.15)]
        hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]
        hover:bg-gray-900
        transition-all duration-300
        bg-linear-to-r from-blue-400 to-blue-500
      "
    >
      <Download size={18} strokeWidth={2} />
      <span className="font-medium">Download</span>
    </a>
  );
}
