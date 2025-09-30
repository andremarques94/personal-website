import { Badge } from "@workspace/ui/components/Badge/badge";

type BadgeGroupProps = {
  badgesContent: string[];
};

function BadgeGroup({ badgesContent }: BadgeGroupProps) {
  return (
    <div>
      {badgesContent.map((content) => (
        <Badge key={content} className="mr-2 mb-2" variant="secondary">
          {content}
        </Badge>
      ))}
    </div>
  );
}

export { BadgeGroup, type BadgeGroupProps };
