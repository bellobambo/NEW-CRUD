"use client"

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }
        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.log(error);
      }
    };

    getTopics();
  }, []);

  return (
    <>
      {topics.length > 0 ? (
        topics.map((t) => (
          <div
            key={t._id} // Add a unique key for each item in the list
            className="p-4 border border-slate-300 my-3 flex justify-between items-start"
          >
            <div>
              <div>
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div>{t.description}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No topics available.</p>
      )}
    </>
  );
}
