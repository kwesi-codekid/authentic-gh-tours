import { useState } from "react"
import { Button, Modal, Collapse } from "antd"
import { useNavigate } from "react-router-dom"
import tourImg from "../assets/imgs/travels-and-tours-bg.jpg"

const PackageCard = ({ packageData }) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  const handleViewDetails = (id) => {
    navigate(`/package/${id}`)
    // setOpenModal(true)
  }

  return (
    <div className="rounded-3xl overflow-hidden flex flex-col gap-2 group bg-slate-400/10">
      <img
        src={packageData.bgImage || tourImg}
        alt=""
        className="group-hover:scale-110 transition-all duration-300 h-52"
      />

      <div className="px-4 py-3 pb-6">
        <h4 className="font-dm-serif text-2xl md:text-3xl">
          {packageData.title}
        </h4>

        <p className="font-quicksand text-sm md:text-base text-slate-700 pr-5">
          {packageData.description}
        </p>

        <div className="flex items-center py-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 md:w-7 mg:h-7 text-yellow-400"
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

        <div className="flex items-center gap-2 py-3">
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
          <p className="text-slate-600 font-sen">5 Days 2 Nights</p>
        </div>

        <div>
          <Button
            onClick={() => handleViewDetails(packageData.packageId)}
            type="primary"
            block
            className="bg-blue-700 font-sen text-lg h-12 rounded-xl"
          >
            View Details
          </Button>
        </div>
      </div>

      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        centered
        classNames={{
          mask: "!bg-black/70",
        }}
      >
        <div className="flex flex-col">
          {/* Header */}
          <div>
            <h3 className="font-dm-serif text-2xl md:text-4xl text-slate-800">
              {packageData.title}
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <img
                src={packageData.bgImage || tourImg}
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Details */}
          <div className="py-4">
            <h4 className="font-dm-serif text-slate-800 text-xl md:text-2xl">Detail</h4>

            {packageData.detailsParagraphs.map((paragraph, index) => (
              <p
                className="font-quicksand text-slate-700 text-sm md:text-base py-2"
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Itinerary */}
          <div className="py-4">
            <h4 className="font-dm-serif text-slate-800 text-xl md:text-2xl">Itinerary</h4>


            <Collapse items={packageData.itinerary} />

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PackageCard
