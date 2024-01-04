import PackageCard from "../../components/PackageCard"

const Packages = () => {
  const packageData = [
    {
      title: "Cultural Tour",
      bgImage:
        "https://images.unsplash.com/photo-1536607961765-592e80bcc19e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwYW5kJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
      packageId: 1,
      detailsParagraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
      ],
      itinerary: [
        {
          label: "Day 1",
          title: "Arrival",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 2",
          title: "Accra City Tour",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 3",
          title: "Kumasi City Tour",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 4",
          title: "Cape Coast Tour",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 5",
          title: "Departure",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
      ],
    },
    {
      title: "Kakum National Park",
      bgImage:
        "https://media.istockphoto.com/id/855413388/photo/theres-so-much-to-see.webp?b=1&s=170667a&w=0&k=20&c=sX_dwqRvV4sMFHBuPjy4USW0bB61L8bPf1Vvtg_fJos=",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
      packageId: 2,
      detailsParagraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
      ],
      itinerary: [
        {
          label: "Day 1",
          title: "Arrival",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 2",
          title: "Accra City Tour",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 3",
          title: "Kumasi City Tour",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 4",
          title: "Cape Coast Tour",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 5",
          title: "Departure",
          children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
      ],
    },
    {
      title: "Cape Coast Tour",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1679619556628-dc9cb6d5e19f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbCUyMGFuZCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
      packageId: 3,
      detailsParagraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
      ],
      itinerary: [
        {
          label: "Day 1",
          title: "Arrival",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 2",
          title: "Accra City Tour",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 3",
          title: "Kumasi City Tour",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 4",
          title: "Cape Coast Tour",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
        {
          label: "Day 5",
          title: "Departure",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quisquam numquam!",
        },
      ],
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-16 px-6 md:px-12 lg:px-20">
        {packageData.map((packageItem, index) => (
          <PackageCard key={index} packageData={packageItem} />
        ))}
      </div>
    </div>
  )
}

export default Packages
