import ServiceSection from "../../components/ServiceSection"

// import lotties
import tourGuide from "../../assets/lotties/tour-guide.json"
import accommodation from "../../assets/lotties/accommodation.json"
import transport from "../../assets/lotties/transport.json"
import events from "../../assets/lotties/events.json"
import airportPickup from "../../assets/lotties/airport-pickup.json"
import tour from "../../assets/lotties/tour.json"

const Services = () => {
  const services = [
    {
      name: "Tour",
      description: "Immerse yourself in the heart of Ghana with our meticulously crafted tours. From cultural explorations of historic landmarks to thrilling adventures off the beaten path, our tours are designed to showcase the diverse beauty and rich heritage of Ghana. Let our experienced guides lead you through a journey of discovery, where each moment becomes a part of your unique Ghanaian story.",
      lottie: tour
    },
    {
      name: "Airport Pickup",
      description: "Your journey with us begins the moment you step off the plane. Enjoy a seamless transition into the warmth of Ghana with our reliable airport pickup service. Our friendly and knowledgeable drivers will be there to greet you, ensuring a smooth and comfortable arrival. Let us take care of the details, so you can start your adventure in Ghana with ease.",
      lottie: airportPickup
    },
    {
      name: "Accommodation",
      description: "Experience the true essence of Ghanaian hospitality with our carefully selected accommodations. Whether you prefer the charm of boutique guesthouses, the luxury of resorts, or the authenticity of homestays, we have a range of options to suit your preferences. Rest and rejuvenate in comfort after each day's adventure, surrounded by the unique ambiance of your chosen accommodation.",
      lottie: accommodation
    },
    {
      name: "Events",
      description: "Immerse yourself in the vibrant cultural scene of Ghana with our curated events. From traditional festivals to contemporary celebrations, our events are designed to provide a firsthand experience of the local culture. Join us in celebrating the diversity of Ghana through music, dance, and festivities that will leave you with lasting memories.",
      lottie: events
    },
    {
      name: "Tour Guiding",
      description: "Our passionate and knowledgeable guides are the heart and soul of your Ghanaian journey. With deep insights into the history, culture, and natural wonders of Ghana, our guides are dedicated to making your tour an enriching and unforgettable experience. Explore hidden gems, learn captivating stories, and connect with the local communities through the guidance of our experienced team.",
      lottie: tourGuide
    },
    {
      name: "Transport",
      description: "Travel seamlessly across the landscapes of Ghana with our reliable transport services. Whether you're navigating bustling city streets or exploring remote natural wonders, our comfortable and well-maintained vehicles ensure a safe and enjoyable journey. Sit back, relax, and let our professional drivers take you on a road trip filled with stunning views and cultural encounters.",
      lottie: transport
    }
  ]


  return (
    <div>
      <div>
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.name}
            description={service.description}
            lottie={service.lottie}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}

export default Services