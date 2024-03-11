import "./IndexPage.css";

export default function IndexPage() {
    return (
        <div>
            <section className="bg-black flex">
                <div className="flex  flex-col sm:flex-row justify-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-center text-3xl">
                            Become a
                            <samp className="text-yellow-300">Web Developer </samp>
                        </h1>
                        <p className="text-white text-center text-xl my-8 mx-20">We focus on teaching our students the fundamentals of the
                            latest and greatest technologies to prepare them for their first dev role </p>
                        <div className="grid justify-center mb-5">
                            {/* <button className="bg-sky-600 text-xl p-3 rounded"> Start The Enrollment</button> */}
                        </div>

                    </div>
                    <div>
                        <img src="./img/showcase.svg" alt="" />
                    </div>
                </div>
            </section>

            <section className="flex justify-center">
                <div className="flex justify-center mt-10">
                    <div className="grid sm:grid-cols-3 mx-14 sm:gap-x-4 sm:mx-6 lg:mx-48 lg:gap-x-8 xl:mx-80">

                        <div className="bg-slate-900 px-7 py-9 my-4 rounded">
                            <div className="text-white flex flex-col justify-center text-center">
                                <h3 className="text-2xl mb-6">c lang</h3>
                                <p>
"C language, the foundation of programming, empowers software development. Explore its syntax and logic with My Notes."
</p>
                                <button onClick={() => window.location.href = "/notes"} className="mt-6 bg-blue-500">Read More</button>
                            </div>
                        </div>


                        
                        <div className="bg-slate-900 px-6 py-8 my-4 rounded">
                            <div className="text-white flex flex-col justify-center text-center">
                                <h3 className="text-2xl mb-6">js</h3>
                                <p>
"JavaScript, the dynamic scripting language, adds interactivity and responsiveness to web pages. Learn its essentials with My Notes."</p>
                                <button className="mt-6 bg-blue-500">Read More</button>
                            </div>
                        </div>
                        <div className="bg-slate-900 px-6 py-8 my-4 rounded">
                            <div className="text-white flex flex-col justify-center text-center">
                                <h3 className="text-2xl mb-6">Java</h3>
                                <p>"Java, a versatile and powerful language, fuels cross-platform applications. Dive into its features and applications with My Notes."</p>
                                <button className="mt-6 bg-blue-500">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex justify-center mt-14">
                    <div className="flex justify-center flex-col lg:flex-row mx-16">
                        <div className="flex justify-center mx-12">
                            <img src="./img/fundamentals.svg" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-2xl mt-10 mb-6">Learn The Fundamentals</h1>
                            <p className="text-xl mb-6">Unlock coding mastery with comprehensive tutorials, practice exercises, and real-world projects. Elevate your skills effortlessly</p>

                            <p>Embark on a transformative coding journey with our platform. Access expert guidance, hands-on projects, and a vibrant community. Elevate your skills and become a proficient coder effortlessly. Start today</p>
                            <button onClick={() => window.location.href = "/notes"} className="p-2 mt-5 bg-blue-500">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-900">
                <div className="flex justify-center mt-24">
                    <div className="flex justify-center flex-col lg:flex-row mx-16">
                        <div className=" mb-10 mt-24 text-white">
                            <h1 className="text-2xl  mb-6">Learn The Fundamentals of React</h1>
                            <p className="text-xl mb-6">Master React's dynamic components and state management with comprehensive tutorials and hands-on projects on our learning platform.</p>

                            <p>Dive into React, the JavaScript library for building user interfaces. Learn component-based development, state management, and advanced concepts. Elevate your web development skills with our engaging and practical React tutorials.</p>
                            <button onClick={() => window.location.href = "/notes"} className="mt-6 bg-blue-500 p-2">Read More</button>
                        </div>
                        <div className="flex justify-center ml-12 my-8">
                            <img src="./img/react.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-blue-600">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center text-center mx-10 my-16">
                        <div className="mb-10">
                            <h1 className="text-3xl mb-4">Meet Your Learning Companions</h1>
                            <p className="text-xl">Our dedicated team comprises passionate learners, crafting valuable content from our student perspective. Join us on this knowledge-sharing journey.</p>
                        </div>


                        <div className="grid  justify-center sm:grid-cols-1 gap-y-1 lg:grid-cols-3 sm:gap-x-6">
                            <div className="flex flex-col justify-center justify-items-center bg-white rounded-lg py-4">
                                <div className="mx-7">
                                    <div className="justify-center flex mb-2"><img
                                        src="https://cdn-icons-png.flaticon.com/128/476/476863.png" className="rounded-full border-4 border-gray-500" alt="" />
                                    </div>
                                    <h1 className="text-2xl mb-4">Developers</h1>
                                    <p className="mb-2 text-left">
                                        <a className="pointer-events-none block mt-3" href="#">@Deepak (Backend)</a>

                                        <a className="pointer-events-none block mt-3" href="#">@Chaten (Frontend)</a>

                                        <a className="pointer-events-none block mt-3" href="#">@Rahul (Contributor)</a>

                                        <a className="pointer-events-none block mt-3" href="#">@karan (Designer)</a>

                                    </p>
                                    <div className="flex justify-center mt-5">
                                        <a href="https://github.com/deepak-mali-git" target="_blank" className="text-gray-500 hover:text-gray-900">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="pointer-events-none text-gray-500 hover:text-gray-900">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="#" className="pointer-events-none text-gray-500 hover:text-gray-900">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="pointer-events-none text-gray-500 hover:text-gray-900">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                   </div>
            </section> 

</div>

    );
}
