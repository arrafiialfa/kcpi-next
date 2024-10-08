"use client";
import { useState, useEffect } from "react";
import { displayPosts, displayCategories } from "@/app/dashboard-data";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { color } from "@material-tailwind/react/types/components/alert";

type Post = {
  title: string;
  image: string;
  description: string;
  category?: string | null;
};

export default function PostsByCategory({
  categories = displayCategories,
  posts = displayPosts,
  className,
  cardsClassName,
  cardsColor,
}: Readonly<{
  categories?: string[];
  posts?: Post[];
  className?: string;
  cardsClassName?: string;
  cardsColor?: color;
}>) {
  const [activePosts, setActivePosts] = useState<Post[]>([]);
  const [active, setActive] = useState(categories[0]);

  useEffect(() => {
    const p: Post[] = [];
    posts.forEach((post) => {
      if (post.category == active) {
        p.push(post);
      }
    });

    setActivePosts(p);
  }, [active, posts]);

  return (
    <div className={className}>
      <Tabs value="html">
        <TabsHeader>
          {categories.map((category) => (
            <Tab
              onClick={() => {
                setActive(category);
              }}
              onKeyDown={() => {
                setActive(category);
              }}
              key={category}
              value={category}
            >
              {category}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
            {activePosts.map((post) => {
              return (
                <Card
                  shadow={false}
                  key={post.title}
                  color={cardsColor || "transparent"}
                  className={" mt-6 w-96 grow " + cardsClassName}
                >
                  <CardBody>
                    <div className="mb-6 w-full h-44 relative rounded overflow-clip">
                      <Image
                        src={post.image}
                        alt="card-image"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {post.title}
                    </Typography>
                    <Typography>{post.description}</Typography>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
}
