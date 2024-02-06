import React from 'react'



const QuestionGroup = () => {
    return (
        <div className='space-y-2'>
            <details
                className="overflow-hidden rounded group [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-gray-700 p-4 text-white transition"
                >
                    <span className="text-lg font-medium"> What kind of products does D-SUIT offer? </span>
                    <span className="transition group-open:-rotate-180">
                        <i className='fas fa-angle-up h-4 w-4'></i>
                    </span>
                </summary>

                <div className="border-t-2 border-gray-500 bg-gray-700">
                    <p className="space-y-1 p-4 text-gray-300 text-left">
                        D-SUIT is a fashion retailer that specializes in providing high-quality clothing, accessories, and bags. Our product line includes a wide range of items such as jackets, dresses, jeans, vests, bags, and much more.
                    </p>
                </div>
            </details>
            <details
                className="overflow-hidden rounded group [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-gray-700 p-4 text-white transition"
                >
                    <span className="text-lg font-medium"> What materials are used in D-SUIT's clothing? </span>
                    <span className="transition group-open:-rotate-180">
                        <i className='fas fa-angle-up h-4 w-4'></i>
                    </span>
                </summary>

                <div className="border-t-2 border-gray-500 bg-gray-700">
                    <p className="space-y-1 p-4 text-gray-300 text-left">
                        We use a variety of materials in our clothing, including cotton, wool, polyester, and synthetic blends. We strive to provide our customers with comfortable and durable clothing that is also stylish and on-trend.
                    </p>
                </div>
            </details>
            <details
                className="overflow-hidden rounded group [&_summary::-webkit-details-marker]:hidden"
            >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-gray-700 p-4 text-white transition"
                >
                    <span className="text-lg font-medium"> What is the return policy at D-SUIT? </span>
                    <span className="transition group-open:-rotate-180">
                        <i className='fas fa-angle-up h-4 w-4'></i>
                    </span>
                </summary>

                <div className="border-t-2 border-gray-500 bg-gray-700">
                    <p className="space-y-1 p-4 text-gray-300 text-left">
                        We offer a 30-day return policy on unworn and undamaged items. If you are not satisfied with your purchase, you can return it within 30 days of receiving the order for a full refund or exchange. Please refer to our Return Policy page for detailed instructions.
                    </p>
                </div>
            </details>
            <details
                className="overflow-hidden rounded group [&_summary::-webkit-details-marker]:hidden"                        >
                <summary
                    className="flex cursor-pointer items-center justify-between gap-2 bg-gray-700 p-4 text-white transition"
                >
                    <span className="text-lg font-medium"> How much is shipping, and how long does it take? </span>
                    <span className="transition group-open:-rotate-180">
                        <i className='fas fa-angle-up h-4 w-4'></i>
                    </span>
                </summary>

                <div className="border-t-2 border-gray-500 bg-gray-700">
                    <p className="space-y-1 p-4 text-gray-300 text-left">
                        Shipping costs and times vary based on the destination and shipping method chosen. We offer standard and expedited shipping options, and shipping costs are calculated at checkout. Shipping times typically range from 3-14 business days depending on the location.
                    </p>
                </div>
            </details>
            <details className="overflow-hidden rounded group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 bg-gray-700 p-4 text-white transition">
                    <span className="text-lg font-medium"> information secure when I shop at D-SUIT? </span>

                    <span className="transition group-open:-rotate-180">
                        <i className='fas fa-angle-up h-4 w-4'></i>
                    </span>
                </summary>

                <div className="border-t-2 border-gray-500 bg-gray-700">
                    <p className="space-y-1 p-4 text-gray-300 text-left">
                        Yes, we take your privacy very seriously and use SSL encryption to protect your personal information. We never share your information with third parties, and we are committed to providing a safe and secure shopping experience for our customers. You can read more about our Privacy Policy on our website.
                    </p>
                </div>
            </details>
        </div>
    )
}

export default QuestionGroup