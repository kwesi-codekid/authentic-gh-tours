import Lottie from "react-lottie"

const ServiceSection = ({title, description, lottie, direction }) => {
  return (
    <div className={`py-16 px-6 md:px-12 lg:px-20 flex flex-col-reverse  ${direction === "left" ? "bg-white md:flex-row" : "bg-slate-400/10 md:flex-row-reverse"} gap-5`}>
      <div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl font-semibold mb-4 font-dm-serif text-blue-600">{title}</h2>
        <p className="text-lg text-center md:text-left font-quicksand text-slate-700">{description}</p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: lottie,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={"auto"}
          width={"100%"}
        />
      </div>
    </div>
  )
}

export default ServiceSection