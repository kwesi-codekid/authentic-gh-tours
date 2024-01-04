import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Button, Form, Input, Collapse } from "antd"

const PackageDetail = () => {
  const { id } = useParams()
  const includesExcludes = [
    {
      title: "Meals",
      type: "includes",
    },
    {
      title: "Transportation",
      type: "includes",
    },
    {
      title: "Accomodation",
      type: "includes",
    },
    {
      title: "Transportation",
      type: "excludes",
    },
    {
      title: "Accomodation",
      type: "excludes",
    },
    {
      title: "Tour Guide",
      type: "excludes",
    },
  ]

  const itinerary = [
    {
      label: "Day 1",
      title: "Arrival",
      children: "Arrival at the airport and transfer to the hotel",
    },
    {
      label: "Day 2",
      title: "Accra City Tour",
      children:
        "Arrival at the airport and transfer to the hotel.",
    },
    {
      label: "Day 3",
      title: "Kakum National Park",
      children:
        "Arrival at the airport and transfer to the hotel.",
    },
    {
      label: "Day 4",
      title: "Departure",
      children:
        "Arrival at the airport and transfer to the hotel.",
    },
  ]

  useEffect(() => {
    console.log(id)

    // scroll to top
    window.scrollTo(0, 0)
  }, [id])

  return (
    <div className="flex flex-col">
      {/* Back button */}
      <div className="w-full h-16 bg-slate-400/10 flex items-center px-4 md:px-6">
        <Button
          type="primary"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center font-sen text-xs md:text-lg h-8 md:h-10"
          onClick={() => window.history.back()}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          }
        >
          Back
        </Button>
      </div>

      {/* Package detail */}
      <div className="flex-1 overflow-y-auto py-16 px-6 md:px-12 lg:px-36">
        {/* Header */}
        <div>
          <h3 className="font-dm-serif text-3xl md:text-4xl text-slate-800">
            Family Deluxe
          </h3>

          <div className="flex items-center py-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 md:w-7 mg:h-7 text-yellow-400"
                key={index}
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-slate-600 font-sen">5 Days</p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <p className="text-slate-600 font-sen">Max Guests: 34</p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <p className="font-sen text-slate-600">Jan 21 - Jan 25</p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="py-3">
          <div className="col-span-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1679619556628-dc9cb6d5e19f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbCUyMGFuZCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="rounded-xl w-full h-52 md:h-[25rem] object-cover object-center"
            />
          </div>
        </div>

        {/* Detail Row */}
        <div className="py-4 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-5 lg:gap-8">
          {/* Left */}
          <div className="md:col-span-5 lg:col-span-7 flex flex-col gap-8">
            {/* Details */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-dm-serif text-3xl md:text-5xl text-slate-800">Details</h3>

              <div className="lg:pr-36 flex flex-col gap-3">
                <p className="font-quicksand text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis sed tempora consequatur, delectus nisi! Accusamus, corporis est vitae a tempora dolores, magni consequuntur similique qui corrupti nesciunt velit fuga.</p>
                <p className="font-quicksand text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis sed tempora consequatur, delectus nisi! Accusamus, corporis est vitae a tempora dolores, magni consequuntur similique qui corrupti nesciunt velit fuga.</p>
              </div>
            </div>

            {/* Includes and Excludes */}
            <div className="flex flex-col gap-4 md:gap-6 bg-white shadow-2xl rounded-2xl lg:rounded-3xl px-4 py-6 md:w-max lg:pl-6 md:pr-16 shadow-black/10">
              <h3 className="font-dm-serif text-3xl md:text-5xl text-slate-800">Includes</h3>

              {includesExcludes.map((item, index) => (
                <div
                  className={`flex items-center gap-2 ${
                    item.type === "includes" ? "text-green-500" : "text-red-500"
                  }`}
                  key={index}
                >
                  {item.type === "includes" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
</svg>

                  )}
                  <p className="text-slate-600 font-sen">{item.title}</p>
                </div>
              ))}

            </div>

            {/* Itinerary */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-dm-serif text-3xl md:text-5xl text-slate-800">Itinerary</h3>

              <Collapse items={itinerary} />
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6">
            {/* Enquiry form */}
            <div className="rounded-2xl lg:rounded-3xl px-5 py-5 md:px-8 md:py-6 md:pb-5 shadow-2xl shadow-black/10">
              <h4 className="font-dm-serif text-2xl md:text-3xl text-blue-600">Enquiry Form</h4>
              <div className="w-16 bg-slate-500 h-[1.5px] rounded-3xl mt-2 mb-5"></div>
              <Form
                layout="vertical"
                name="enquiry"
                initialValues={{ remember: true }}
                onFinish={(values) => console.log(values)}
                requiredMark={false}
              >
                <Form.Item
                  label={<p className="font-sen">Full Name</p>}
                  name="name"
                  rules={[
                    { required: true, message: "Please input your full name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={<p className="font-sen">Email</p>}
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={<p className="font-sen">Phone Number</p>}
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={<p className="font-sen">Message</p>}
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl flex items-center font-sen text-xs md:text-base h-8 md:h-10"
                  >
                    Send Enquiry
                  </Button>
                </Form.Item>
              </Form>
            </div>
            {/* Need Help Card */}
            <div className="px-5 py-5 md:px-8 md:py-6 border-2 border-slate-600/60 rounded-2xl lg:rounded-3xl flex flex-col gap-4">
              <h4 className="font-dm-serif text-2xl md:text-3xl text-slate-800">Need Help?</h4>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <p className="text-slate-600 font-sen">+233 59 421 3496</p>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                <p className="text-slate-600 font-sen">
                  <a
                    href="mailto:kwasibordesjacob@gmail.com"
                    className="hover:text-blue-500"
                  >
                    pkay@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageDetail
