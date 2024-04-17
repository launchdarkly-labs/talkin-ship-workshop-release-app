//@ts-nocheck
import Bank from "./bank";
export default function Home() {

  //TODO: delete after if we make sure if we aren't using this to develop anything 
  // const router = useRouter();

  // const variants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.5, // This will create the staggered effect
  //     },
  //   },
  // };

  // const childVariants = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 },
  // };

  // const pageVariants = {
  //   initial: { x: 0 },
  //   in: { x: 0 },
  //   out: { x: "-100%" },
  // };

  // const pageTransition = {
  //   type: "tween",
  //   ease: "anticipate",
  //   duration: 0.5,
  // };

  return (
    <>
      <Bank/>
    </>
  );
}
