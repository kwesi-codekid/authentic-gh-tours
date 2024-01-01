import CountUp from "react-countup"

const Counter = ({ num, label}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CountUp end={num} className="text-blue-600 font-dm-serif text-4xl md:text-6xl" />
      <p className="font-sen text-lg text-slate-600">{label}</p>
    </div>
  )
}

export default Counter