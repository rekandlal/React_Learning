import React from 'react'
import { Search } from "lucide-react";

import { Section1 } from './assets/components/Section1/Section1'
import Section2 from './assets/components/Section2/Section2'

const App = () => {

    const users = [

  {
    number: "1",

    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60",

    intro: (
      <p className="text-lg text-white mb-12 font-light leading-[1.3]">
        Prime customers already having <br />
        reliable banking credit access <br />
        and feeling highly satisfied <br />
        with current financial products
      </p>
    ),

    tag: "Satisfied",

    color: "bg-blue-500"
  },

  {
    number: "2",

    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=300&auto=format&fit=crop&q=60",

    intro: (
      <p className="text-lg text-white mb-12 font-light leading-[1.3]">
        Prime customers actively using <br />
        stable banking credit services <br />
        but facing frustrating customer <br />
        support and service issues
      </p>
    ),

    tag: "Underserved",

    color: "bg-cyan-500"
  },

  {
    number: "3",

    img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=300&auto=format&fit=crop&q=60",

    intro: (
      <p className="text-lg text-white mb-12 font-light leading-[1.3]">
        Customers belonging from <br />
        and sub-prime financial  <br />
        with limited modern banking <br />
        credit access opportunities
      </p>
    ),

    tag: "Underbanked",

    color: "bg-lime-400"
  },

  {
    number: "4",

    img: "https://images.unsplash.com/photo-1765648763848-665267cf9929?w=300&auto=format&fit=crop&q=60",

    intro: (
      <p className="text-lg text-white mb-12 font-light leading-[1.3]">
        Young startup founders  <br />
        for flexible financial  <br />
        supporting rapidly growing  <br />
        expansion and investment 
      </p>
    ),

    tag: "Entrepreneurs",

    color: "bg-orange-500"
  },

  {
    number: "5",

    img: "https://images.unsplash.com/photo-1759593218431-6f1585bc14de?w=300&auto=format&fit=crop&q=60",

    intro: (
      <p className="text-lg text-white mb-12 font-light leading-[1.3]">
        Freelancers managing unstable <br />
        monthly income with limited  <br />
        planning and secure banking <br />
        support for future growth
      </p>
    ),

    tag: "Freelancers",

    color: "bg-pink-500"
  },

  {
    number: "6",

    img: "https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=300&auto=format&fit=crop&q=60",

    intro: (
      <p className="text-lg text-white mb-12 font-light leading-[1.3]">
        Senior professionals looking <br />
        for premium banking investment  <br />
        guidance wealth management
      </p>
    ),

    tag: "Wealth Clients",

    color: "bg-purple-500"
  }

];

  return (
    <div >
      <Section1 users={users}/>
      <Section2/>

    </div>
  )
}

export default App
