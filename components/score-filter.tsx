"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function ScoreFilter({ attr }: { attr: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const scoreSelected = searchParams.get(attr) || -1;

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    console.log(value);

    const params = new URLSearchParams(searchParams);
    if (!value) {
      return;
    }

    if (value === "-1") {
      params.delete(attr);
      replace(`${pathname}?${params.toString()}`);
      return;
    }

    params.set(attr, value);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-between">
      <label>{attr}</label>
      <select
        onChange={handleChange}
        value={scoreSelected ? parseInt(scoreSelected) : undefined}
      >
        <option value={-1}></option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
    </div>
  );
}
