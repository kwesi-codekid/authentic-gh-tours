import FAQs from "../../components/FAQs"
import Counter from "../../components/Counter"
import aboutImg from "../../assets/imgs/about-bg.jpg"

const About = () => {
  const stats = [
    {
      num: 2500,
      label: "Customers"
    },
    {
      num: 28,
      label: "Cities"
    },
    {
      num: 458,
      label: "Tour Guides"
    },
    {
      num: 125,
      label: "Local Partners"
    },
  ]
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 py-16 px-6 md:px-12 lg:px-20">
        <div className="w-full md:w-1/2">
          <img src={aboutImg} alt="About" className="w-full" />
        </div>

        <div className="md:flex-1">
          {/* story */}
          <div className="flex flex-col gap-2">
            <h3 className="font-dm-serif text-2xl md:text-4xl">We have been in the tourism industry for more than 20 years</h3>

            <p className="font-quicksand">Welcome to Authentic Africa Tours, where every journey is a chapter in the vibrant story of Ghana. Our story began with a passion for showcasing the true essence of this remarkable West African gem.</p>

            <p className="font-quicksand">In the heart of our narrative is a team of dedicated travel enthusiasts realized that Ghana, with its rich tapestry of cultures, deserved to be experienced in a way that goes beyond the ordinary.</p>

            <p className="font-quicksand">We promise to deliver unforgettable memories, foster cultural exchange, and contribute positively to the places we visit. Come, join us in discovering the beauty, authenticity, and warmth of Ghana..</p>
          </div>
        </div>
      </div>

      {/* counter */}
      <div className="py-12 px-6 md:px-12 lg:px-20 bg-slate-400/10">
        <h3 className="font-dm-serif text-center text-3xl md:text-4xl lg:text-6xl">Our Numbers</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          {stats.map((stat, index) => (
            <Counter num={stat.num} label={stat.label} key={index} />
          ))}
        </div>
      </div>


      <FAQs />
    </div>
  );
}

export default About