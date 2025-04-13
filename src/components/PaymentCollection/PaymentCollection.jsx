import React from "react";
import Earth from "../../assets/image/Earth.png";
const features = [
  {
    title: "Access up to $100,000",
    icon: (
      <img
        src={Earth}
        alt="Task Management"
        className=""
      />
    ),
    description: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
  },
  {
    title: "You choose invoices to get paid",
    icon: (
      <img
        src={Earth}
        alt="Task Management"
        className=""
      />
    ),
    description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.​",
  },
 
  {
    title: "Simple pricing",
    icon: (
      <img
        src={Earth}
        alt="Task Management"
        className=""
      />
    ),
    description: "Only pay for what you use, if you don’t need us, there are no costs.​",
  },
  {
    title: "Click and quick",
    icon: (
      <img
        src={Earth}
        alt="Task Management"
        className=""
      />
    ),
    description: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
  },
  {
    title: "Flexible",
    icon: (
      <img
        src={Earth}
        alt="Task Management"
        className=""
      />
    ),
    description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.​",
  },
  {
    title: "Invest in your business",
    icon: (
      <img
        src={Earth}
        alt="Task Management"
        className=""
      />
    ),
    description: "Only pay for what you use, if you don’t need us, there are no costs.​​",
  },
];

function PaymentCollection() {
  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Outsourcing Payment Collection
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg mb-12">
            Let us handle your payments so you can focus on growing your
            business.
          </p>

          {/* 3 Column Features */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-16 text-center">
            {features.map((item, index) => (
              <div key={index} className=" mt-10 flex flex-col items-center">
                {item.icon}
                <h3 className="mt-5 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className=" mt-6 text-gray-600 text-md ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaymentCollection;
