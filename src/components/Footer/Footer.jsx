import React from 'react'
import Email from"../../assets/image/email.png"
import LinkedInd from "../../assets/image/linkedin.png"
function Footer() {
  return (
    <div className='bg-[#f1f0ff]'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Column */}
      <div className='mt-10 w-2/4'>
        <p className="text-gray-700 mb-4 text-sm">
          Curabitur consequat, purus a scelerisque sagittis, nulla metus tincidunt elit,
          vel venenatis nulla libero nec nulla. Suspendisse potenti. Aenean a justo vel
          sapien pellentesque tincidunt.
        </p>
        <div className=" mt-10 flex gap-4">
          <a href="#" className="text-purple-600 hover:text-purple-800">
            {/* <i className="fab fa-linkedin fa-lg"></i> */}
            <img src={LinkedInd} alt="linkedin" />
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800">
            {/* <i className="fas fa-envelope fa-lg"></i> */}
            <img src={Email} alt="email" />
          </a>
        </div>
      </div>

     <div className='grid grid-cols-1 md:grid-cols-3'>
         {/* Products */}
      <div className='mt-10'>
        <h4 className="font-semibold mb-4">Products</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><a href="#">Payments</a></li>
          <li><a href="#">Invoice Factoring</a></li>
          <li><a href="#">Invoice Finance</a></li>
          <li><a href="#">Supplier Finance</a></li>
          <li><a href="#">Customer Finance</a></li>
        </ul>
      </div>

      {/* Company */}
      <div className='mt-10'>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><a href="#">About us</a></li>
          <li>  <a href="/contact">Contact Us </a></li>
        </ul>
      </div>

      {/* Resources */}
      <div className='mt-10'>
        <h4 className="font-semibold mb-4">Resources</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><a href="#">Frequently asked questions</a></li>
          <li><a href="#">Knowledge base</a></li>
          <li><a href="#">API documentation</a></li>
        </ul>
      </div>
      
     </div>
    </div>

    {/* Bottom row */}
    <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500  pt-2 gap-2">
      <div className="flex space-x-6 mb-12">
        <a href="#" className="hover:text-gray-700">Privacy policy</a>
        <a href="#" className="hover:text-gray-700">Contact us</a>
      </div>
      <p className="text-center mb-12 md:text-right">Site map @ebpearls</p>
    </div>
  </div>
    </div>
  )
}

export default Footer