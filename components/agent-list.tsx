import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Agent } from "@/types/agent";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function AgentList({
  list,
  onRemove,
  onEdit,
}: {
  list: Agent[];
  onRemove: (id: string) => void;
  onEdit: (value: Agent) => void;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className=" w-1/4">Name</TableHead>
          <TableHead className=" w-2/4">Description</TableHead>
          <TableHead className=" w-80">Status</TableHead>
          <TableHead className="text-right w-80">Operation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((agent) => (
          <TableRow key={agent.id}>
            <TableCell className="font-medium">{agent.name}</TableCell>
            <TableCell className="font-medium">{agent.description}</TableCell>
            <TableCell>{agent.status}</TableCell>
            <TableCell className="flex flex-row justify-end ">
              <Popover>
                <PopoverTrigger>
                  <TrashIcon
                    // onClick={onRemove.bind(null, agent.id)}
                    className=" cursor-pointer mx-2"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <p className=" mt-1 mb-2"> Are you sure to remove it?</p>
                  <div className=" text-right">
                    <Button
                      onClick={onRemove.bind(null, agent.id)}
                      variant={"outline"}
                      size={"sm"}
                    >
                      Remove
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Pencil1Icon
                onClick={onEdit.bind(null, agent)}
                className=" cursor-pointer mx-2"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
