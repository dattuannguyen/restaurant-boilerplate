import { LucideClockFading } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col text-center h-60 items-center">
      <div>Name</div>
      <div>Sub Name</div>
      <div>Address</div>
      <div>Tel</div>
      <div>Email</div>
      <div className="flex gap-4">
        <LucideClockFading />
        <LucideClockFading />
      </div>
    </div>
  );
};

export default Footer;

