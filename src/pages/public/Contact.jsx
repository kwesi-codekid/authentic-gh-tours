// import { Fade } from "react-awesome-reveal"
import { useState } from "react"
import { Form, Input, Button } from "antd"
import SectionHeading from "../../components/SectionHeading"
import ContactInfoCard from "../../components/ContactInfoCard"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const contactInfo = [
    {
      title: "Email",
      icon: (
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
      ),
      contents: ["info@authenticghtours.com"],
    },
    {
      title: "Phone",
      icon: (
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
      ),
      contents: ["0594213496", "0551129496"],
    },
    {
      title: "Location",
      icon: (
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
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
      contents: ["Cocoa Villa", "Western Region, Ghana"],
    },
  ]
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-16 gap-5">
        {/* Contact Info */}
        <div className="md:pr-8 lg:pr-10">
          <SectionHeading title="Contact Info" />

          <div className="flex flex-col gap-3 pt-4">
            {contactInfo.map((info, index) => (
              <ContactInfoCard 
                key={index}
                title={info.title}
                icon={info.icon}
                contents={info.contents}
              />
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="">
          <div>
            <SectionHeading title="Leave a Message" />

            <Form
              name="contact"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={() => {setLoading(false)}}
              onFinishFailed={() => {}}
              requiredMark={false}
              className="lg:w-2/3"
            >
              <Form.Item
                label={(<p className="text-lg font-sen text-slate-700">Full Name</p>)}
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input className="h-12 rounded-xl" />
              </Form.Item>

              <Form.Item
                label={(<p className="text-lg font-sen text-slate-700">Email</p>)}
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input className="h-12 rounded-xl" />
              </Form.Item>

              <Form.Item
                label={(<p className="text-lg font-sen text-slate-700">Message</p>)}
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <Input.TextArea className="!h-28 !rounded-xl" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-blue-700 h-12 font-sen text-lg md:text-xl rounded-xl"
                  loading={loading}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="py-6">
        <div>
          <div className="px-6 md:px-12 lg:px-20">
            <SectionHeading title="Locate Us" />
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.122482432938!2d-1.7584562251809246!3d4.919167845056802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe77989a597654b%3A0x6df308865df65ea5!2sCocoa%20Villa%2C%20Takoradi!5e0!3m2!1sen!2sgh!4v1704014526156!5m2!1sen!2sgh"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="mt-5"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
