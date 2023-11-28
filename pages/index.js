import Head from "next/head";

function ImageWithDescription({ name, caption, imgSrc }) {
  return (
    <div>
      <div className="relative home--shadow-box border-2 border-gray-800 rounded-lg w-5/6 md:w-auto mx-auto ">
        <img
          src={imgSrc}
          alt={caption}
          className="block w-full object-cover md:object-contain p-1 rounded-lg"
        />
      </div>
      <p
        className={
          "text-lg lg:text-xl text-gray-100 leading-tight font-semibold pt-6 md:pt-10"
        }
      >
        {name}
      </p>
      <p className={"text-gray-400 leading-tight pt-2"}>{caption}</p>
    </div>
  );
}

function StatsWithTitleAndDescription({ title, description }) {
  return (
    <div className="text-center">
      <div className="font-semibold text-2xl">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>GDC FieldOps Fellowship!</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="GDC FieldOps Fellowship!" />
        <meta
          property="og:description"
          content="GDC FieldOps Fellowship is a national programme to educate students about various government systems involved in disaster management and empower them with basic knowledge and skills to safeguard our communities during times of crisis and uncertainty like disaster/pandemic."
        />
        <meta property="og:image" content="GDC-FieldOps-fellowship.png" />
        <meta property="og:url" content="https://fieldops.gdc.network/" />
        <meta name="twitter:card" content="GDC-FieldOps-fellowship.png" />
        <meta property="og:site_name" content="GDC FieldOps Fellowship!" />
        <meta name="GDC FieldOps Fellowship is a national programme to educate students about various government systems involved in disaster management and empower them with basic knowledge and skills to safeguard our communities during times of crisis and uncertainty like disaster/pandemic." />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KC33J3MM3N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KC33J3MM3N');
        `,
          }}
        />
      </Head>
      <main className="mx-auto home-body-wrapper">
        <section className="home--hero-bg relative overflow-hidden md:min-h-screen">
          <header className="max-w-7xl mx-auto py-4 lg:py-8 px-4 xl:px-0 relative z-10">
            <div className="flex justify-center items-center">
              <img
                className="block w-56 md:w-72"
                src="logos/GDC-fieldops-fellowship-logo.svg"
              />
            </div>
          </header>
          <div className="container flex flex-col md:flex-row justify-between mx-auto text-white pt-2 pb-8 px-4">
            <div class="mx-auto">
              <div className="w-full relative z-10">
                <h1 className="text-center text-gray-400 text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-light leading-tight">
                  Are you prepared for the next
                  <span className="block home--hero-text-image font-black leading-none">
                    disaster?
                  </span>
                </h1>
                <p className="text-center font-semibold text-sm md:text-lg lg:text-2xl text-gray-400 max-w-3xl mx-auto">
                  Lets Buckle Up and Get Ready!
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-8 bg-indigo-500 lg:rounded-r-2xl text-white px-6 md:px-4 lg:px-12 xl:px-24 py-8">
              <div>
                <img src="hero/30-minutes-banner.svg"></img>
              </div>
              <h2 className="text-4xl 2xl:text-5xl leading-tight mt-4">
                Sign-up for 30 minutes certificate course.
              </h2>
              <ul className="list-disc pl-5 pt-3 text-lg max-w-3xl space-y-2">
                <li>
                  A comprehensive guide on the multi-level government disaster
                  management system that operates during emergencies.
                </li>
                <li>Offers in-depth knowledge.</li>
                <li> Certificate of completion.</li>
                <li>Duration : 30 minutes.</li>
              </ul>
              <a
                className="inline-block mt-4 text-center px-10 py-4 bg-yellow-400 border border-gray-900 text-gray-900 text-lg font-semibold rounded-md shadow-xl hover:shadow-lg hover:bg-yellow-300 hover:text-gray-800 transition duration-250 ease-in-out"
                target="_blank"
                href="https://www.pupilfirst.school/courses/1855"
              >
                Get Certified for Free!
              </a>
            </div>
            <div className="col-span-12 lg:col-span-4 py-4">
              <div className="bg-gray-700 px-6 md:px-4 2xl:px-12 py-6">
                <div>
                  <img src="hero/3-minutes-banner.svg"></img>
                </div>
                <h2 className="text-3xl text-gray-100 mt-4">
                  Sign-up for 3 minutes short awareness course.
                </h2>
                <ul className="list-disc text-gray-200 pl-5 pt-3 text-lg max-w-lg space-y-2">
                  <li>
                    Provides a basic understanding of Public and Civil defence
                    systems.
                  </li>
                  <li>Duration : 3 minutes.</li>
                </ul>
                <a
                  className="inline-block mt-4 text-center px-6 py-4 bg-gray-100 border border-gray-900 text-gray-900 text-lg font-semibold rounded-md shadow-xl hover:shadow-lg hover:bg-yellow-300 hover:text-gray-800 transition duration-250 ease-in-out"
                  target="_blank"
                  href="https://flood.gdc.network/"
                >
                  Sign-up Now!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 text-center max-w-4xl mx-auto">
          <p className="text-center text-gray-50 text-2xl font-medium mt-8">
            GDC FieldOps Fellowship is a national programme to educate
            individuals about various government systems involved in disaster
            management and empower them with basic knowledge and skills to
            safeguard our communities during times of crisis and uncertainty
            like disaster/pandemic.
          </p>
          <a
            className="text-blue-600 font-medium underline hover:text-blue-700 hover:bg-blue-50 transition text-center inline-block mt-4"
            target="_blank"
            href="https://www.ipcc.ch/report/ar6/syr/"
          >
            - IPCC Climate Change Report 2023
          </a>
        </section>
        <section className="px-4 py-12 relative z-10">
          <div className="home--shadow-box bg-white border-2 border-gray-800 max-w-6xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center text-center">
              <p className="text-xs leading-tight text-center px-4 py-2 rounded-b-lg bg-gray-900 text-gray-200 shadow-inner">
                Supported By
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 gap-4 md:grid-cols-3 lg:grid-cols-5 pt-7">
              <div className="flex justify-center">
                <div className="w-14 flex items-center">
                  <img
                    className="object-contain w-full"
                    src="logos/ACT-Logo.png"
                    alt="Act grants"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-36 flex items-center">
                  <img
                    className="object-contain w-full"
                    src="logos/swasth.svg"
                    alt="Swasth Alliance"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 flex items-center">
                  <img
                    className="object-contain w-full"
                    src="logos/Schmidt-Futures-Logo.png"
                    alt="Schmidt Futures"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 flex items-center">
                  <img
                    className="object-contain w-full"
                    src="logos/e-gov-foundation-logo.png"
                    alt="eGov Foundation"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-40 flex items-center">
                  <img
                    className="object-contain"
                    src="logos/pupilfirst-logo.svg"
                    alt="Pupilfirst"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 lg:py-24 relative">
          <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto px-4 lg:px-0 relative">
            <div className="md:col-span-6">
              <h2 className="text-gray-50">Prepare for El Niño</h2>
              <p className="text-xl md:text-3xl mt-4 text-gray-100">
                “The world should prepare for the development of El Niño, which
                is often associated with increased heat, drought or rainfall in
                different parts of the world”
              </p>
              <p className="mt-4 text-lg text-gray-300">
                -Prof. Taalas. (Secretary-General, WMO)
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="home--shadow-box p-6 md:p-10 bg-gray-800 border-4 border-gray-900">
                <p className="text-xl md:text-2xl text-gray-100 ">
                  As per the new update from World Meteorological Organization,
                  the likelihood of El Niño developing later this year is
                  increasing, and it can cause impact on weather and climate
                  patterns.
                </p>
                <a
                  className="inline-block text-lg mt-4 text-blue-600 font-medium underline hover:text-blue-700 hover:bg-blue-50 transition"
                  href="https://public.wmo.int/en/media/press-release/wmo-update-prepare-el-ni%C3%B1o#:~:text=The%20effect%20on%20global%20temperatures,different%20parts%20of%20the%20world."
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 pt-12 pb-12 lg:pb-32 relative">
          <div className="bg-yellow-300 max-w-6xl mx-auto home--shadow-box text-lg md:text-4xl font-semibold leading-snug p-6 md:p-10 border-2 border-gray-800">
            <p>
              Our comprehensive course is designed to create awareness and
              understanding about the various government systems pertaining to
              disaster management, equipping you with the tools to play an
              active role in disaster preparedness, response, and recovery.
            </p>
          </div>
        </section>
        <section className="bg-gray-900 home--dark-bg-box py-8 px-4 md:pt-32 md:pb-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 border-b border-gray-700 pb-12 md:pb-24">
            <div className="md:col-span-6">
              <h2 className="text-white text-4xl md:text-7xl">
                <span className="text-lg md:text-4xl block md:pb-4">
                  Introducing the{" "}
                </span>
                GDC FieldOps <br />
                Fellowship
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-gray-300 text-lg pt-6 md:pt-12">
                Climate Change isn't just a buzzword - it's an urgent call for
                action. But have you ever wondered how governments and
                communities gear up to face the climate-induced storms?
                Community Response Network 101 is a{" "}
                <span className="font-semibold">30 mins</span> self-paced
                learning course that intends to create awareness about India's
                Disaster Management System and how they coordinate efforts
                during a national emergency.
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-3 md:gap-16 py-12 md:py-24">
            <div className="md:col-span-5">
              <h3 className="text-yellow-300 md:text-white md:text-right">
                Why is this course important?
              </h3>
            </div>
            <div className="md:col-span-7 text-gray-200 space-y-8 text-lg md:text-xl">
              <p>
                Climate Change shall cause many disasters in the near future.
                Individuals who are aware of how government systems work are
                empowered to both help themselves and can also volunteer to help
                society recover faster during a disaster.
              </p>
              <p>
                Through this course, whenever a national emergency arises, you
                shall know how our government will manage that emergency and how
                you can contribute to solving the crisis or where to seek help.
              </p>
              <p>
                The knowledge in this course shall enable a learner to develop
                the Graduate Attribute/Quality of{" "}
                <span className="font-semibold">
                  "Environmental Awareness and Action"
                </span>{" "}
                prescribed by UGC as an important attribute for holistic
                development of a student.
              </p>
            </div>

            <div className="md:col-span-5 ">
              <h3 className="text-yellow-300 md:text-white md:text-right pt-12 md:pt-0">
                Who can Join?
              </h3>
            </div>
            <div className="md:col-span-7 text-gray-200 space-y-4 md:space-y-8 text-lg md:text-xl">
              <p>
                Anyone aged 18 and above, from all domains, are welcome to take
                this course.
              </p>
              <p>
                Our school system often overlooks the most critical knowledge on
                disaster management, which holds high importance for individuals
                throughout their lives.
              </p>
              <p>
                Given the rapid changes in climatic conditions, we anticipate an
                increase in natural catastrophes that could result in
                significant losses of life and property. By acquiring the
                knowledge from this course, you will be better equipped to
                support your loved ones and community in their mitigation
                efforts.
              </p>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-yellow-300 md:text-white md:text-right pt-12 md:pt-0">
                Certificate of Completion
              </h3>
            </div>
            <div className="md:col-span-7 text-gray-200 space-y-8 text-lg md:text-xl">
              <p>Yes (only for Community Responder 101 - 30 minute course)</p>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-yellow-300 md:text-white md:text-right pt-12 md:pt-0">
                Course Fee
              </h3>
            </div>
            <div className="md:col-span-7 text-gray-200 space-y-8 text-lg md:text-xl">
              <p>Free of cost</p>
            </div>
          </div>
        </section>

        <section className="mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="">
              <div className="pt-10 lg:pt-16">
                <div className="">
                  <h2 className="max-w-6xl text-gray-50 text-center font-bold text-2xl lg:text-7xl ml-4 lg:mx-auto">
                    An initiative supported by
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl relative mx-auto">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-20 py-12 lg:pb-16 text-center">
                  <ImageWithDescription
                    name="Dr Shibu Balakrishnan"
                    caption={
                      <>
                        Regional Consultant, <br />
                        World Health Organisation
                      </>
                    }
                    imgSrc="people/Dr_Shibu_Balakrishnan.jpg"
                  />
                  <ImageWithDescription
                    name="Air Marshal Balakrishnan Suresh"
                    caption={
                      <>
                        PVSM, AVSM, VM, ADC, <br />
                        Commander in Chief, Western Air Command (Retd)
                      </>
                    }
                    imgSrc="people/Air_Marshal_Balakrishnan_Suresh_Indian_Air_Force.jpg"
                  />
                  <ImageWithDescription
                    name="Dr. Ajay Nair"
                    caption={
                      <>
                        CEO,
                        <br />
                        Swasth.app
                      </>
                    }
                    imgSrc="people/Ajay_Nair.jpg"
                  />
                  <ImageWithDescription
                    name="Sanjay Vijayakumar"
                    caption={
                      <>
                        Founder &amp; CEO,
                        <br />
                        PupilFirst.org
                      </>
                    }
                    imgSrc="people/sanjay-vijayakumar.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-6xl mx-auto px-4">
            <div className="pt-4 pb-12 md:pb-24">
              <div className="max-w-4xl home--shadow-box border-2 border-gray-800 mx-auto">
                <div className="space-y-12 p-6 md:p-16">
                  <div>
                    <h2 className="max-w-6xl text-gray-50 text-center font-bold text-2xl lg:text-7xl ml-4 lg:mx-auto">
                      Full Scholarship
                    </h2>
                    <p className="text-xl md:text-2xl pt-8 text-gray-300">
                      This program has been crafted by a dynamic team of
                      individuals from numerous companies. Donor Funding from
                      Schmidt Futures and Facebook (India) has been instrumental
                      in bringing this initiative to life.
                    </p>
                    <p className="text-xl md:text-2xl pt-4 text-gray-300">
                      The donor funding enables us to offer the course to you
                      for free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-300 max-w-6xl mx-auto mt-12 home--shadow-box font-semibold leading-snug p-10 border-2 border-gray-800">
              <h2 className="max-w-6xl text-gray-900 md:text-center font-bold text-2xl lg:text-7xl lg:mx-auto">
                Community Responder 101 Course Highlights.
              </h2>
              <ul className="mt-8 text-lg md:text-2xl list-disc max-w-4xl mx-auto space-y-4">
                <li>
                  Gain insights into the government systems managing disasters
                  in India.
                </li>
                <li>
                  Learn about the National Disaster Management Act and its key
                  provisions.
                </li>
                <li>
                  Discover the role of local self-government in disaster
                  response.
                </li>
                <li>
                  Explore the three-tier healthcare system and its importance
                  during disasters.
                </li>
                <li>
                  Understand the structure of the police and their role in
                  disaster management.
                </li>
                <li>
                  Learn from real-life case studies and examples, including the
                  response to COVID-19.
                </li>
              </ul>
            </div>

            <div className="pt-20">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-12 md:p-16">
                  <div>
                    <h2 className="max-w-6xl text-gray-50 md:text-center font-bold text-2xl lg:text-7xl lg:mx-auto">
                      Graduate Attribute: Environmental Awareness and Action
                    </h2>
                    <p className="text-lg md:text-2xl pt-2 md:pt-8 text-gray-300">
                      In the realm of higher education, graduate attributes
                      stand as the compass guiding students toward success in
                      both their professional and personal lives. These
                      attributes encompass a blend of essential qualities,
                      skills, and knowledge, shaping individuals for the
                      challenges of the 21st century.
                    </p>
                    <p className="text-lg md:text-2xl pt-4 text-gray-300">
                      In alignment with India's visionary National Educational
                      Policy of 2020, this course is your pathway to nurturing
                      one of the 18 pivotal attributes deemed vital for the
                      modern age.
                    </p>
                    <p className="text-lg md:text-2xl pt-4 text-gray-300">
                      This course empowers you with the essential graduate
                      attribute of{" "}
                      <span className="font-semibold">
                        "Environmental Awareness and Action."
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-12 md:p-16">
                  <div>
                    <h2 className="max-w-6xl text-gray-50 md:text-center font-bold text-2xl lg:text-7xl lg:mx-auto">
                      Become a part of GDC FieldOps Disaster Management Cadre.
                    </h2>
                    <p className="text-lg md:text-2xl pt-2 md:pt-8 text-gray-300">
                      Your mission is to learn how our nation manages a disaster
                      so that when the next disaster strikes, you already know
                      whom to reach out to for help and/or can contribute to
                      strengthening the capabilities of our governmental system.
                    </p>
                    <p className="text-lg md:text-2xl pt-4 text-gray-300">
                      Post completion of the course, interested individuals can
                      become part of the GDC FieldOps Disaster Management Cadre
                      and can volunteer to contribute at times of emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-12">
              <div className="max-w-6xl mx-auto">
                <div className="space-y-12 md:p-16">
                  <div>
                    <h2 className="max-w-6xl text-gray-50 md:text-center font-bold text-2xl lg:text-7xl lg:mx-auto">
                      Fundamental Duty to the nation 🇮🇳
                    </h2>
                    <p className="text-lg md:text-2xl pt-4 md:pt-8 text-gray-300">
                      <a
                        className="text-blue-600 font-medium underline hover:text-blue-700 hover:bg-blue-50 transition"
                        href="https://www.moes.gov.in/content/fundamental-duties"
                      >
                        Article 51-A
                      </a>{" "}
                      of the Indian constitution outlines the fundamental duties
                      of every citizen of India, including{" "}
                      <span className="font-semibold">
                        to defend the country and render national service when
                        called upon to do so;
                      </span>{" "}
                      As part of the GDC FieldOps Disaster Management Cadre, you
                      can volunteer and offer service to the nation at times of
                      emergencies with the skill and knowledge that you gain
                      from this course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="pb-12 px-4">
            <div className="max-w-6xl home--shadow-box bg-gray-900 text-white border-2 border-gray-800 mx-auto">
              <div className="space-y-12 p-6 md:p-16">
                <div>
                  <h2 className="max-w-6xl text-gray-100 text-center font-bold text-2xl lg:text-7xl ml-4 lg:mx-auto">
                    Join the Movement
                  </h2>
                  <p className="text-lg md:text-2xl pt-8">
                    Be part of a community that's committed to driving positive
                    change. Register for the Community Responder 101 Course
                    today and embark on a journey to become an informed and
                    responsible citizen.
                  </p>
                  <p className="text-lg md:text-2xl pt-4">
                    Empower Yourself, Empower the Future.
                  </p>
                  <p className="text-lg md:text-2xl pt-4">
                    Register Now for Free!
                  </p>
                </div>
                <a
                  className="block max-w-xs mx-auto w-full text-center px-10 py-4 bg-yellow-400 border border-gray-900 text-gray-900 cursor-pointer text-lg font-semibold rounded-md shadow-md hover:shadow-xl hover:bg-yellow-300 hover:text-gray-900 transition duration-250 ease-in-out"
                  target="_blank"
                  href="https://www.pupilfirst.school/courses/1855"
                >
                  Get Certified for Free!
                </a>
              </div>
            </div>
            <div className="max-w-6xl mx-auto text-center">
              <div className="pt-10 lg:pt-12">
                <h4 className="text-xl lg:text-3xl font-bold text-gray-50">
                  Questions?
                </h4>
                <p className="text-gray-100 pt-2">
                  Email us at
                  <a
                    href="mailto:support@gdc.network"
                    className={
                      "text-blue-600 font-medium underline hover:text-blue-700 hover:bg-blue-50 transition pl-2 tracking-wide"
                    }
                  >
                    support@gdc.network
                  </a>
                </p>
              </div>
            </div>
          </section>
        </section>
        <div className="flex justify-center items-center py-4 px-4 border-t border-gray-800">
          <img className="block w-32" src="logos/pupilfirst-logo.svg" />
        </div>
      </main>
    </div>
  );
}
