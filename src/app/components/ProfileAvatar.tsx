import React from "react";
import Image from "next/image";

type ProfileAvatarProps = {
  src: string;
  alt: string;
  size?: number;
  onEdit: () => void;
};

export default function ProfileAvatar({
  src,
  alt,
  size = 112,
  onEdit,
}: ProfileAvatarProps) {
  return (
    <>
      <div
        className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
        />
      </div>
      <button
        onClick={onEdit}
        className="flex items-center gap-2 text-lg text-gray-800 hover:text-black"
      >
        <span className="material-icons">edit</span>
        Update profile
      </button>
    </>
  );
}
