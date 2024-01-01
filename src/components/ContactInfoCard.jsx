const ContactInfoCard = ({ title, icon, contents }) => {
  return (
    <div className="rounded-2xl bg-slate-300/10 px-4 py-4 flex gap-3">
      <div className="rounded-full bg-blue-700 px-3 py-3 h-max text-white">{icon}</div>

      <div className="flex flex-col gap-2">
        <h4 className="font-sen font-bold text-xl text-slate-700">{title}</h4>
        {contents.map((content, index) => (
          <p key={index} className="text-sm font-quicksand">{content}</p>
        ))}
      </div>
    </div>
  )
}

export default ContactInfoCard
