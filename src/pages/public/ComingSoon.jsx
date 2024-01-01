// import Lottie from "react-lottie"
// import ComingSoonLottie from "../../assets/lotties/site-under-construction.json"
import videoBG from "../../assets/videos/beach.mp4"

const ComingSoon = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: ComingSoonLottie,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center z-30 gap-3">
        <p className="font-sen text-sm md:text-lg text-white uppercase">Website under construction</p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white font-montserrat">Coming Soon</h1>
        <h2 className="md:text-3xl font-semibold text-white font-quicksand">We are working on something awesome</h2>
      </div>

      <video autoPlay muted loop className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50">
        <source src={videoBG} type="video/mp4" />
      </video>
    </div>
  );
}

export default ComingSoon;