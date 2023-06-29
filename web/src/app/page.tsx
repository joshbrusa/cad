"use client";

import useTheme from "hooks/useTheme";

export default function Page() {
  const { setTheme } = useTheme();

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setTheme("light")}>Light Theme</button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
      <button onClick={() => setTheme(null)}>System Theme</button>
    </div>
  );
}
