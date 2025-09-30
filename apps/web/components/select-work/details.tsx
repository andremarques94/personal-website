import { Typography } from "@workspace/ui/components/Typography";
import { SelectWorkProps } from "./select-work";

type DetailsProps = Omit<SelectWorkProps["experience"][number], "badges">;

function Details({ title, company, description }: DetailsProps) {
  return (
    <div className="lg:col-span-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Typography variant="h3" className="mb-2 text-lg lg:text-xl">
            {title}
          </Typography>
          <Typography variant="muted" className="text-sm">
            {company}
          </Typography>
        </div>
        <div className="lg:col-span-3">
          <Typography
            variant="p"
            className="line-clamp-3 text-sm leading-relaxed text-muted-foreground"
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Details;
