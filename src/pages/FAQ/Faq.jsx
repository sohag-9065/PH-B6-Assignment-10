import React from 'react';

const Faq = () => {
    return (
        <section className="min-h-[70vh] dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Are Fun Code courses Online or Offline?</summary>
                        <div className="px-4 pb-4">
                            <p>Fun Code is a 100% e-Learning platform and we only provide online courses. We do not provide offline / onsite courses and we do not have any plan in near future to provide such course.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you provide video recording of live classes?</summary>
                        <div className="px-4 pb-4">
                            <p>Yes, we provide recording with some conditions. A student needs to regularly attend classes and exams. In case of any emergency problem, student needs to inform course instructor immediately and give proper explanation for his/her absence. </p>
                            <p>If someone is absent without contacting course teacher, then video will not be provided. Also students needs to follow terms & conditions of using the video recording for personal use only.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you provide certificates after completing a course?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Previously we have provided printed certificates to passing students only. But going forward, we will provide digital certificate to passing students. We do not provide certificate for only attending course.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Do you provide job placement upon passing course?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Yes, we provide help in job placement in selected courses. But it is not guaranteed. If any company contact with us for recruiting our students, we refer our passing students. In future we have plan to extend this more.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;