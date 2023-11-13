import { useState } from "react";

type Category = {
  category: string;
};

type Post = {
  title: string;
  summary: string;
  category?: string | null;
};

export default function usePosts({
  categories,
  posts,
}: {
  categories: Category[];
  posts: Post[];
}) {
  const [active, setActive] = useState(categories[0]);

  return (
    <div>
      {categories.map((category) => {
        return <div key={category.category}>{category.category}</div>;
      })}
      <div className="flex justify-between gap-2"></div>
    </div>
  );
}
