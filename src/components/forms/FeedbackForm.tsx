import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export default function FeedbackForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Feedback
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Saran Anda sangat membantu kami
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-fit">
        <div className="mb-1 flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-4">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nama
              </Typography>
              <Input
                size="lg"
                required={true}
                placeholder="Nama Lengkap"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Topik
          </Typography>
          <Input
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Isi
          </Typography>
          <Textarea
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6" fullWidth>
          kirim
        </Button>
      </form>
    </Card>
  );
}
