"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function CardDefault({
  title,
  image,
  description,
  cta,
}: Readonly<{
  title: string;
  image: string;
  description: string;
  cta?: {
    text: string;
    href: string;
  };
}>) {
  return (
    <Card className="mt-6 w-96 grow">
      <CardHeader color="blue-gray" className="relative">
        <Image src={image} alt="card-image" height={700} width={700} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      {cta && (
        <CardFooter className="pt-0">
          <Link href={cta.href}>
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              {cta.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
