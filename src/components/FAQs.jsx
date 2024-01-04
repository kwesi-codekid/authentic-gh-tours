import { Collapse } from "antd"

const FAQs = () => {
  const faqs = [
    {
      key: 1,
      label: <h4 className="font-sen text-lg font-semibold">What makes Authentic Africa Tours unique?</h4>,
      children: <p className="font-quicksand">Authentic Africa Tours is committed to providing authentic and immersive travel experiences.
      Our itineraries are crafted to showcase the rich cultural heritage and natural beauty of Ghana.
      We focus on sustainable and responsible tourism practices.</p>
    },
    {
      key: 2,
      label: "How do I book a tour with Authentic Africa Tours?",
      children: `Visit our website and browse through our tour packages.
      Select the tour that interests you and follow the easy booking process.
      For custom tours, contact our team, and we'll tailor an itinerary to suit your preferences.`
    },
    {
      key: 3,
      label: "What types of tours does Authentic Africa Tours offer?",
      children: `We offer a variety of tours, including cultural tours, wildlife safaris, historical tours, and adventure tours.
      Customized tours are available for individuals, families, and groups.`
    },
    {
      key: 4,
      label: "Is it safe to travel with Authentic Africa Tours?",
      children: `Your safety is our top priority. We work with experienced guides and ensure that our tours adhere to all safety standards.
      We monitor local conditions and provide up-to-date travel information to our clients.`
    },
    {
      key: 5,
      label: "How can I get in touch with Authentic Africa Tours for support during my trip?",
      children: `We provide 24/7 support for our clients. Contact information for our local representatives will be shared with you upon booking.`
    }
  ]
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 flex flex-col gap-5">
      <h3 className="font-dm-serif text-center text-3xl md:text-4xl lg:text-6xl">Frequently Asked Questions</h3>

      <Collapse items={faqs} defaultActiveKey={1} />
    </div>
  )
}

export default FAQs