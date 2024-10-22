import { ShrekHead } from "@/components/ShrekHeader";
import QuotesComponent from "@/components/QuotesComponent";
import { InputComponent } from "@/components/InputComponent";
import Donkey from "@/components/Donkey";

export default function Home() {
  return ( 
    <><ShrekHead />
    <QuotesComponent />
    <InputComponent />
    <Donkey />
    </>
  )
}