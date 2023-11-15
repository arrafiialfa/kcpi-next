import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

type Card = {
  title: string;
  description: string;
  cta: {
    text?: string;
    href: string;
  };
};

export default function ReadNext({ cards }: { cards: Card[] }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 pt-24">
      {cards.map((card) => {
        return (
          <Card key={card.title} className="w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography className="text-justify">
                {card.description}
                <span className="text-blue-700 font-bold px-2">
                  Read more...
                </span>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 py-5">
              <Link href={card.cta.href}>
                <Button className="">{card.cta.text || "Read Next"}</Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
