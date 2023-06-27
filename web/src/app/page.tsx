"use client";
import { cookies } from "next/headers";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          cookies().set("colorScheme", "light");
        }}
      >
        Set Light Color Scheme
      </button>
      <button
        onClick={() => {
          cookies().set("colorScheme", "dark");
        }}
      >
        Set Dark Color Scheme
      </button>
      <button
        onClick={() => {
          cookies().delete("colorScheme");
        }}
      >
        Set No Color Scheme
      </button>
    </div>
  );
}
