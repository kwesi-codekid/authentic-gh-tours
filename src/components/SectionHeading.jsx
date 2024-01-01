const SectionHeading = ({ title }) => {
  return (
    <div className="mb-2">
      <h3 className="font-dm-serif text-2xl md:text-4xl text-blue-700">{title}</h3>
      <div className="w-12 h-[2px] rounded-2xl bg-blue-700 mt-1"></div>
    </div>
  )
}

export default SectionHeading
