import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"


export default function TopicsList() {
  return (
    <div className="p-4 border border-slate-300my-3 flex justify-between my-3 gap-5 items-start">
      <div >
        <div >
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={'/editTopic/123'}>
          <HiPencilAlt  size={24}/>
        </Link>
      </div>
    </div>
  );
}
