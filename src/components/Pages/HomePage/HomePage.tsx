import Hero from "./Hero/Hero";
import HeroCard from "./HeroCard/HeroCard";
import BlogList from "./Bloglist/BlogList"
import PricingPlans from "./PricingPlans/PricingPlan";

export default function HomePage() {
  return (
    <>
      <div className="deflay bgImage">
        <div className="myContainer">
          <div>
            <Hero />
          </div>
          <div className="flex mt-20 flex-col lg:flex-row gap-10 justify-between cursor-pointer">
            <HeroCard
              icon="futurevision"
              title="Future vision"
              text="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
            <HeroCard
              icon="productdesign"
              title="Product Design"
              text="There are many variations of passages of available, but the majority alteration in some form." />
            <HeroCard
              icon="innovative"
              title="Inovative Solutions."
              text="The generated Lorem Ipsum is therefore always free from repetition,injected humuour." />
          </div>
        </div>
      </div>
      <div className="myContainer">
        <div className="flex lg:flex-row flex-col gap-10 justify-between">
          <PricingPlans
            title="Standart"
            underline=""
            price="69.99$"
            per="Month"
            services={[
              { name: "Social Media Marketing" },
              { name: "2100 Keywords" },
              { name: "One Way Link Building" },
              { name: "5 free Optimization" },
              { name: "3 Press Releases" }
            ]}
          />
          <PricingPlans
            title="Economy"
            underline=""
            price="79.99$"
            per="Month"
            services={[
              { name: "Social Media Marketing" },
              { name: "3100 Keywords" },
              { name: "One Way Link Building" },
              { name: "10 free Optimization" },
              { name: "5 Press Releases" }
            ]}
          />
          <PricingPlans
            title="Executive"
            underline=""
            price="89.99$"
            per="Month"
            services={[
              { name: "Social Media Marketing" },
              { name: "5100 Keywords" },
              { name: "One Way Link Building" },
              { name: "15 free Optimization" },
              { name: "10 Press Releases" }
            ]}
          />
        </div>
      </div>
      <BlogList />

    </>

  )
}



