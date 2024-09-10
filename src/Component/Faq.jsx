const Faq = () => {
    return (
        <div className="mb-40 max-w-6xl mx-auto">
            <button className="btn bg-[#FBFBFB] py-[10px] px-6 rounded-3xl text-[#020043] mb-4 ">Faq</button>
            <p className="text-4xl font-semibold mb-[30px] text-[#020043]">Frequntly Asked Question</p>
            <div className="space-y-3">

                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11"> What courses are offered at রঙধনু আর্ট একাডেমি?
                    </div>
                    <div className="collapse-content px-0">
                        <hr />
                        <p className="mt-4 px-11 py-2 rounded-b-full bg-white bg-opacity-80  text-black text-[14px]">We offer a variety of courses in fine arts, including drawing, painting, sculpture, and craft-making. Our programs are tailored for students of all age groups, from children to adults.

                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11"> Who can enroll in the courses?

                    </div>
                    <div className="collapse-content px-0">
                        <hr />
                        <p className="mt-4 px-11 py-2 rounded-b-full bg-white bg-opacity-80  text-black text-[14px]">Anyone with a passion for art can enroll! We welcome students of all skill levels, whether you're a beginner looking to learn or an experienced artist aiming to refine your skills.



                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11"> How do I register for a course?

                    </div>
                    <div className="collapse-content px-0">
                        <hr />
                        <p className="mt-4 px-11 py-2 rounded-b-full bg-white bg-opacity-80  text-black text-[14px]">You can register for a course by visiting our academy or signing up through our online registration form on the website. Once registered, we will guide you through the next steps.



                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11"> What is the course duration?

                    </div>
                    <div className="collapse-content px-0">
                        <hr />
                        <p className="mt-4 px-11 py-2 rounded-b-full bg-white bg-opacity-80  text-black text-[14px]">The duration of the courses varies depending on the program. We offer both short-term workshops and long-term courses, ranging from a few weeks to several months. Specific details can be found in the course section.



                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11"> Is there a trial class available before committing to a course?

                    </div>
                    <div className="collapse-content px-0">
                        <hr />
                        <p className="mt-4 px-11 py-2 rounded-b-full bg-white bg-opacity-80  text-black text-[14px]">Yes, we offer trial classes for beginners to get a feel of our teaching style and environment. You can sign up for a trial class through our website or by visiting the academy.



                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;