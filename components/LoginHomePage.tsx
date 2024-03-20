import { useContext } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/ui/navbar";
import LoginContext from "@/utils/contexts/login";
import BankInfoCard from "@/components/ui/bankcomponents/bankInfoCard";
import { LoginComponent } from "@/components/ui/logincomponent";

interface LoginHomePageProps {
  name: string;
}

export default function LoginHomePage({ name, ...props }: LoginHomePageProps) {
  const { isLoggedIn, setIsLoggedIn, loginUser, logoutUser, user } = useContext(LoginContext);

  const bankingServicesArr = [
    { imgSrc: "Checking.png", title: "Checking" },
    { imgSrc: "Business.png", title: "Business" },
    { imgSrc: "Credit.png", title: "Credit Card" },
    { imgSrc: "Savings.png", title: "Savings" },
    { imgSrc: "Mortgage.png", title: "Mortgages" },
  ];

  const message = "Serving more than 100,000 customers, and 10 trillion in capital every day";

  return (
    <motion.main
      className={`relative w-full h-screen font-audimat`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-20 shadow-2xl bg-ldgrey ">
        <NavBar />
      </div>

      <header className={`w-full bg-bankblue mb-[4rem]`}>
        <div
          className="w-full py-14 sm:py-[8rem] px-12 xl:px-32 2xl:px-[300px] 3xl:px-[400px] flex flex-col sm:flex-row justify-between
             items-center sm:items-start"
        >
          <div
            className="grid grid-cols-2 sm:flex flex-row sm:flex-col 
              text-white w-full sm:w-1/2 justify-start mb-4 pr-10 sm:mb-0 gap-y-10"
          >
            {/* <img src="ToggleBankHeader.png" width={52} className="pb-0" /> */}
            <p className="text-2xl lg:text-6xl xl:text-[80px] 3xl:text-[112px] font-audimat col-span-2 sm:col-span-0 w-full">
              Welcome to {name}{" "}
            </p>
            <p className="col-span-2 sm:col-span-0 text-xl lg:text-2xl 3xl:text-4xl font-sohnelight w-full">
              {message}
            </p>
          </div>

          <div className="w-full sm:w-auto z-10">
            <LoginComponent
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              loginUser={loginUser}
              name={name}
            />
          </div>
        </div>
      </header>

      <section
        className="w-3/4 grid grid-cols-2 sm:flex sm:flex-row font-sohnelight text-center justify-center mx-auto gap-y-8 
            sm:gap-y-0 gap-x-8
          sm:gap-x-12 lg:gap-x-24"
      >
        {bankingServicesArr.map((ele, i) => {
          return (
            <div className="grid items-center justify-items-center" key={i}>
              <img src={ele?.imgSrc} width={96} className="pb-2" />
              {/* <Banknote size={96} strokeWidth={1} className="pb-2" /> */}
              <p className="text-xl lg:text-2xl ">{ele?.title} </p>
            </div>
          );
        })}
      </section>

      <section
        className="flex flex-col gap-y-8 sm:gap-y-8 sm:flex-row sm:gap-x-6 lg:gap-x-14
           mx-auto py-12 justify-center px-4 lg:px-8"
      >
        <BankInfoCard
          imgSrc="House.png"
          headerTitleText="Home Mortgages"
          subtitleText="Toggle the light on and come home. Were here to help."
          key={1}
        />
        <BankInfoCard
          imgSrc="Smoochy.png"
          headerTitleText="Wealth Management"
          subtitleText="Use next generation tooling to ensure your future is safe."
          key={2}
        />
        <BankInfoCard
          imgSrc="Cards.png"
          headerTitleText="Sign Up For Toggle Card"
          subtitleText="Special offers for our most qualified members. Terms apply."
          key={3}
        />
      </section>
    </motion.main>
  );
}
