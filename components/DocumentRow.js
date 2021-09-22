import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, fielName, date }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 rounded-lg hover:bg-gray-500 text-gray-700 cursor-pointer text-sm border mb-2"
    >
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fielName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
      <Button
        className="border-0"
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
      >
        <Icon name="more_vert" />
      </Button>
    </div>
  );
}

export default DocumentRow;
