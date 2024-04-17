import { CircleDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { FederatedCheckingAccount } from "@/components/ui/bankcomponents/federatedChecking";
import { FederatedCreditAccount } from "@/components/ui/bankcomponents/federatedCredit";

export default function ComingSoonModule() {
    const accountvariant = {
    hidden: { x: "100%" }, // start from the right side of the container
    visible: { x: 0 }, // animate back to the original position
    exit: { x: "100%" }, // exit to the right side of the container
  };

    const variants = {
    hidden: { scaleY: 0, originY: 1 }, // start from the base of the div
    visible: { scaleY: 1, originY: 1 }, // grow up to the top of the div
  };

    return (
      <section className="h-full w-full xl:w-[40%] bg-zinc-100 border border-zinc-200 pl-4 font-sohnelight rounded-xl  shadow-xl">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={accountvariant}
          className=" p-6 gap-4 w-full h-full"
        >
          <p className="text-black font-sohne mb-6 lg:text-[24px]">Federated Accounts</p>
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 justify-center">
            <div className="flex flex-col p-4 h-[300px] bg-transparent justify-center items-center text-center">
              <div className="flex">
                <CircleDollarSign size={60} className="my-2" />
              </div>
              <div className="flex">
                Coming Soon! View all your accounts in one dashboard
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    ); 
}