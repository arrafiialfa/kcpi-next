import Image from "next/image";
import Link from "next/link";

type CardItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Card({
  items,
  enableLink,
}: {
  items: CardItem[];
  enableLink?: boolean;
}) {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.title}>
            <Image alt={item.title} src={item.image} />
            <div>{item.title}</div>
            <div>{item.description}</div>
            {enableLink && (
              <Link href={item.link}>
                <button className="px-4 py-2 bg-red-500 text-sm font-normal">
                  Read More
                </button>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
