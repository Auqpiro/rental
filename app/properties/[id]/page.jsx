"use client";

import { useParams, useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
      Go home from {params.id}
    </button>
  );
};

export default PropertyPage;
