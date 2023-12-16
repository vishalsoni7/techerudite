import { About } from "../components/About";
import { Experties } from "../components/Experties";
import { Input } from "../components/Inputs";
import { Mission } from "../components/Mission";
import { Testimonials } from "../components/Testimonials";
import { Vision } from "../components/Vision";
import { WhatIsTecherudite } from "../components/WhatIsTecherudite";
import { WhatWeDo } from "../components/WhatWeDo";

export const Landing = () => {
  return (
    <>
      <About />
      <WhatIsTecherudite />
      <Mission />
      <Vision />
      <Experties />
      <WhatWeDo />
      <Testimonials />
      <Input />
    </>
  );
};
