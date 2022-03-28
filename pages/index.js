import Head from "next/head";

function ApplyToCourse() {
  return (
    <div className="flex">
      <a
        className="block w-full md:w-auto text-center px-10 py-4 bg-gradient-to-br from-yellow-300 to-yellow-600 text-secondary-900 font-bold rounded-md shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-700 transition duration-250 ease-in-out"
        href="#"
      >
        Applications to open soon
      </a>
    </div>
  );
}

function ImageWithDescription({ name, caption, imgSrc }) {
  return (
    <div>
      <div className="relative rounded-lg bg-gradient-to-br from-secondary-400 to-secondary-700 w-5/6 md:w-auto shadow-md ">
        <img
          src={imgSrc}
          alt={caption}
          className="block w-full object-cover md:object-contain p-0.5 rounded-lg"
        />
      </div>
      <p
        className={
          "text-lg lg:text-xl text-secondary-300 leading-tight font-semibold pt-3"
        }
      >
        {name}
      </p>
      <p className={"text-secondary-100 leading-tight pt-2"}>{caption}</p>
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="GDC FieldOps Fellowship!" />
        <meta
          property="og:description"
          content="CoronaSafe Field-Ops Fellowship is a national programme to identify and train 200,000 students in disaster management training to become Field Operations and volunteer as the national engineering leadership cadre for public service"
        />
        <meta
          property="og:image"
          content="coronasafe-engineering-fellowship.png"
        />
        <meta property="og:url" content="https://fullstack.pupilfirst.org/" />
        <meta
          name="twitter:card"
          content="coronasafe-engineering-fellowship.png"
        />
        <meta property="og:site_name" content="Bharat FieldOps Fellowship!" />
        <meta name="CoronaSafe Field-Ops Fellowship is a national programme to identify and train 200,000 students in disaster management training to become Field Operations and volunteer as the national engineering leadership cadre for public service" />

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-11P76BRB6N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-11P76BRB6N');
              `,
          }}
        /> */}
      </Head>
      <main className="bg-secondary-900 mx-auto ">
        <section className="relative bg-gradient-to-br from-secondary-800 to-secondary-900 border-b border-secondary-700 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover"
              src="hero/Globe-illustration.jpg"
              alt="Illustration of a World Map showing GDC network connections"
            />
          </div>
          <header className="max-w-6xl mx-auto py-4 lg:py-8 px-4 xl:px-0 relative z-10">
            <div className="flex justify-between items-center">
              <img
                className="block w-56 md:w-72"
                src="logos/GDC-fieldops-fellowship-logo.svg"
              />
              <img className="block w-20 md:w-24" src="logos/aicte-logo.png" />
            </div>
          </header>
          <div className="max-w-6xl flex flex-col md:flex-row justify-between mx-auto text-white pt-2 pb-12 px-4 xl:px-0">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="w-full lg:col-span-7 relative z-10">
                <p className="text-2xl md:text-5xl font-light block leading-6 text-secondary-400">
                  Welcome to the{" "}
                </p>
                <h1 className="hero__title-gradient text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold leading-tight lg:pt-4">
                  GDC FieldOps Fellowship!
                </h1>
                <p className="text-sm md:text-base text-secondary-100 lg:text-lg pt-2 lg:pt-4 lg:pr-12">
                  GDC FieldOps Fellowship is a national programme to identify
                  and train 100,000 students in disaster management using United
                  Nations recognised digital tools and become part of the
                  Emergency Reserve Cadre.
                </p>
                <div className="mt-8 lg:text-xl font-semibold bg-secondary-700 inline-block p-4 bg-opacity-20 rounded-lg text-primary-500">
                  Applications to open soon
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="-mt-20 mx-4 xl:mx-0 relative z-10">
          <div className="bg-white rounded-lg shadow-lg border border-secondary-700 max-w-6xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center text-center">
              <p className="text-xs leading-tight text-center px-4 py-2 rounded-b-lg bg-secondary-50 shadow-inner">
                Supported By
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 gap-4 md:grid-cols-3 lg:grid-cols-4 pt-7">
              <div className="flex justify-center">
                <div className="w-48 flex items-center">
                  <img
                    className="object-contain w-full"
                    src="logos/NSTEDB-logo.svg"
                    alt="National Science and Technology Entrepreneurship Development Board"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-40 flex items-center">
                  <img
                    className="object-contain w-full"
                    src="logos/act-grants-logo.png"
                    alt="Act grants - Action COVID-19 Team"
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
        <section className="bg-secondary-900 pt-12 pb-6 lg:pt-32 relative">
          <div className="max-w-4xl mx-auto text-primary-500 px-4 lg:px-0 relative">
            <div className="absolute -top-32 -left-36 z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-64 h-64 text-primary-800 text-opacity-50"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
            <blockquotes
              cite="https://www.washingtonpost.com/climate-environment/2022/02/28/ipcc-united-nations-climate-change-adaptation/"
              className="relative text-xl md:text-3xl md:leading-relaxed z-10"
            >
              “Today's children who may still be alive in the year 2100 are
              going to experience four times more climate extremes than they do
              now. More people are going to die each year from heat waves,
              diseases, extreme weather, air pollution and starvation because of
              global warming”
            </blockquotes>
            <a
              className="block text-base md:text-xl pt-5 text-secondary-300 underline"
              href="https://www.washingtonpost.com/climate-environment/2022/02/28/ipcc-united-nations-climate-change-adaptation/"
              target="_blank"
            >
              - United Nations Report on Climate Change, 27 February 2022.{" "}
            </a>
          </div>
        </section>
        <section className="bg-secondary-900 py-10 lg:py-20 relative">
          <div className="max-w-4xl mx-auto text-white px-4 lg:px-0">
            <div className="border rounded-lg bg-gradient-to-br from-secondary-700 to-secondary-900 border-secondary-700">
              <div className="flex space-x-2 px-6 py-3 border-b border-secondary-900">
                <div className="w-3 h-3 bg-secondary-800 rounded-full"></div>
                <div className="w-3 h-3 bg-secondary-800 rounded-full"></div>
                <div className="w-3 h-3 bg-secondary-800 rounded-full"></div>
              </div>
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg p-4 lg:p-6">
                <div className="flex text-secondary-50">
                  <span className="text-secondary-400 text-xl">&#10142;</span>
                  <p className="pl-3">
                    <span className="text-secondary-200">Learn </span> from WHO
                    experts how a disaster is managed at the field level
                  </p>
                </div>
                <div className="flex">
                  <span className="text-secondary-400 text-xl">&#10142;</span>
                  <p className="pl-3">
                    Hands-on training in United Nations recognised digital tools
                    for{" "}
                    <span className="text-secondary-200">
                      disaster management
                    </span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-secondary-400 text-xl">&#10142;</span>
                  <p className="pl-3">
                    Become part of a{" "}
                    <span className="text-secondary-200">
                      national volunteer team
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative border-t border-secondary-800 bg-secondary-900">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-secondary-800 mx-4 xl:mx-0">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 2xl:gap-5 px-0 pb-10 lg:pb-20">
                <div className="lg:col-span-7 2xl:col-span-8">
                  <div className="pt-10 lg:pt-20">
                    <div className="heading-with-leftborder">
                      <h2 className="max-w-4xl text-secondary-200 font-bold text-2xl lg:text-6xl leading-snug lg:ml-28 2xl:ml-44 pl-4">
                        Everything you
                        <br /> need to know
                      </h2>
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-12 md:pr-12 pt-4 md:pt-10 ml-4 lg:ml-24 2xl:ml-44">
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        What is this?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Experts led field-operations training in disaster
                        management to use digital tools.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Why?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Climate Change shall cause many disasters in future.
                        Students who are aware of how government systems work
                        are empowered to both help themselves and can also
                        volunteer to help society recover faster during a
                        disaster.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Who is this for?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Age 18+ students who have a desire to serve the nation
                        during emergencies. Prior experience in volunteering via
                        NSS, NCC, NGOs, or teamwork via University/College
                        festivals, students startups etc is appreciated.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        When?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        April 4 - May 22, 2022
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Effort?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        2 Weeks of highly enjoyable study & self-paced learning
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Format?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Self-paced learning via video tutorials,with assistance
                        from experts and community.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Mentorship?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Weekly Ask Me Anything Sessions with experts from the
                        World Health Organisation and Healthcare workers from
                        the field.
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Curriculum?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        A short management course on how disaster management
                        operations work and technical training on using{" "}
                        <a href="https://coronasafe.network/tools">
                          CoronaSafe Network tools.
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Certificate?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Yes
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Cost
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        Free
                      </p>
                    </div>
                    <div>
                      <h3 className="heading-with-underscore text-xl lg:text-2xl text-secondary-300 font-medium">
                        Why should I apply early?
                      </h3>
                      <p className="ml-8 pt-2 text-sm lg:text-lg text-secondary-50">
                        The admissions are on a rolling basis and might close
                        earlier if the seats are filled for the batch.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 2xl:col-span-4">
                  <div className="sticky top-0 pl-0 pt-10 lg:pt-20 -ml-px md:ml-0">
                    <div className="terminal-container-bg border rounded-lg bg-gradient-to-br from-secondary-700 to-secondary-900 border-secondary-700">
                      <div className="flex space-x-2 px-6 py-3 border-b border-secondary-800">
                        <div className="w-3 h-3 bg-secondary-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary-900 rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary-900 rounded-full"></div>
                      </div>
                      <div className="flex p-4 lg:p-6">
                        <span className="text-secondary-400 text-xl">
                          &#10142;
                        </span>
                        <div className="pl-3">
                          <p className="text-secondary-50 text-lg">
                            GDC Field-Ops Fellowship is a national programme to
                            identify and train 100,000 students in disaster
                            management using digital tools and become part of
                            the Emergency Reserve Cadre to assist in disaster
                            managament.
                          </p>
                          <div className="pt-4">
                            {/* <a
                              className="block w-full md:w-auto text-center px-10 py-4 bg-gradient-to-br from-yellow-300 to-yellow-600 text-secondary-900 font-bold rounded-md shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-700 transition duration-250 ease-in-out"
                              href="#"
                            >
                              Applications to open soon
                            </a> */}
                            <div className="lg:text-lg font-semibold bg-secondary-700 inline-block p-4 bg-opacity-20 rounded-lg text-primary-500">
                              Applications to open soon
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary-900 border-t border-b border-secondary-800 mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-secondary-800 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl text-secondary-200 font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                    An initiative <br />
                    supported by
                  </h2>
                </div>
              </div>
              <svg
                className="absolute right-0 top-1/4 object-center"
                width="120"
                height="400"
                fill="none"
                viewBox="0 0 120 400"
              >
                <defs>
                  <pattern
                    id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-secondary-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="120"
                  height="400"
                  fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                />
              </svg>
              <div className="max-w-4xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-20 py-12 lg:pb-16">
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
        <section className="bg-secondary-900 relative overflow-hidden">
          <div
            className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
            aria-hidden="true"
          >
            <div className="relative h-full max-w-7xl mx-auto">
              <div className="absolute left-0 top-0 h-80 w-80 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 79.6">
                  <path
                    d="M70.2 19.9v59.7H110V39.8H90.1V19.9zm19.9 0H110V0H90.1zM0 19.9v59.7h39.8V39.8H19.9V19.9zm19.9 0h19.9V0H19.9z"
                    fill="#28292d"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary-900 border-b border-secondary-800 mx-auto relative">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-secondary-800 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-4xl text-secondary-200 font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                    Testimonials
                  </h2>
                </div>
              </div>
              <div className="max-w-4xl mx-auto text-secondary-50">
                <div className="py-8 lg:pb-20 space-y-12 md:space-y-20 lg:text-lg">
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">
                    It has been a truly invaluable learning experience. I have 
                    gained a lot of knowledge from the  constructive input and guidance
                    throughout the course. The course is designed in a way that dones not limit
                    learning. The videos are fabulous and just the right length.
                    <br></br>- Reema Shaji ( 2nd Year, Computer Science
                    Engineering Student)
                  </blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">
                    Community Response Network was a splendid course by
                    CoronaSafe Network's knowledge base. The course was easily
                    accessible, with step by step procedures.
                    After going through the course I got an idea of how our
                    system manages a disaster and what 
                    responsibilities I have to perfom to aid our society.
                    <br></br>- Asna P (3rd Year, BTech Civil , Government
                    Engineering College Thrissur)
                  </blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">
                    CRN 101 was a great program. The sessions conducted in this
                    program helped us to gain so much information. The question
                    and answer session was fun and informative and we got to
                    know each other. Lastly, the interactive session was also
                    great.
                    <br></br>- Muhammed Khalifa Zayed (2nd Year, BTech CSE , MES
                    College of engineering Kuttippuram)
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary-900">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-secondary-800 mx-4 xl:mx-0">
              <div className="max-w-4xl ml-4 lg:mx-auto text-white pt-0 lg:py-20">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border border-primary-700">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/BjrPsEOZyi4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-secondary-900 border-t border-b border-secondary-800 mx-auto relative">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="border-l border-secondary-800 mx-4 xl:mx-0">
                <div className="pt-10 lg:pt-16">
                  <div className="heading-with-leftborder">
                    <h2 className="max-w-4xl text-secondary-200 font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                      Free
                    </h2>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto pl-4 lg:pl-0 pb-10 lg:pb-16">
                  <div className="space-y-6 max-w-3xl text-secondary-50 lg:text-lg">
                    <p className="mt-4">
                      This program is created by a team of over a dozen people
                      from across multiple companies, with donor funding from
                      Schmidt Futures and Facebook(India)
                    </p>
                    <p>
                      The donor funding enables us to offer the course to you
                      for free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="border-l border-secondary-800 mx-4 xl:mx-0">
                <div className="pt-10 lg:pt-16">
                  <div className="heading-with-leftborder">
                    <h2 className="max-w-4xl text-secondary-200 font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                      Impact
                    </h2>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto">
                  <div className="mt-4 pl-4 lg:pl-0">
                    <img
                      className="object-cover rounded-md "
                      src="csn/impact.png"
                    />
                  </div>
                  <div className="space-y-6 md:grid md:grid-col-2 lg:grid-cols-4 lg:gap-8 lg:space-y-0 lg:space-x-5 pt-8 pl-4 lg:pl-0">
                    <div>
                      <h4 className="text-2xl lg:text-3xl text-primary-500">
                        465+
                      </h4>
                      <p className="pt-1 text-secondary-50">
                        Hospitals Using the platform
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl lg:text-3xl text-primary-500">
                        355K+
                      </h4>
                      <p className="pt-1 text-secondary-50">Patients Managed</p>
                    </div>
                    <div>
                      <h4 className="text-2xl lg:text-3xl text-primary-500">
                        134K+
                      </h4>
                      <p className="pt-1 text-secondary-50">Shifting Managed</p>
                    </div>
                    <div>
                      <h4 className="text-2xl lg:text-3xl text-primary-500">
                        200K+
                      </h4>
                      <p className="pt-1 text-secondary-50">
                        Telemedicine Calls
                      </p>
                    </div>
                  </div>
                  <p className="text-xs italic pt-6 text-secondary-300 pl-4 xl:pl-0">
                    * Stats as of February 22, 2022
                  </p>
                  <div className="py-10 lg:pb-20 pl-4 lg:pl-0">
                    <div className="bg-gradient-to-br from-secondary-800 to-secondary-900 border rounded-lg shadow-xl border-secondary-700">
                      <div className="flex space-x-1.5 px-6 py-3 border-b border-secondary-700">
                        <div className="w-2.5 h-2.5 bg-secondary-900 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-secondary-900 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-secondary-900 rounded-full"></div>
                      </div>
                      <div className="flex p-4 lg:py-3 lg:px-6">
                        <span className="text-secondary-400 text-xl">
                          &#10142;
                        </span>
                        <div className="pl-3">
                          <div className="text-secondary-50 space-y-6 text-base lg:text-lg">
                            <p>
                              We are now looking to select 100,000 of the best
                              students in India to become trained field
                              operations volunteers under expert guidance.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-4 lg:py-3 lg:px-6">
                        <span className="text-secondary-400 text-xl">
                          &#10142;
                        </span>
                        <div className="pl-3">
                          <div className="text-secondary-50 space-y-6 text-base lg:text-lg">
                            <p>
                              Students who complete the programme shall become
                              part of Emergency Reserve Cadre of their state.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="border-l border-secondary-800 mx-4 xl:mx-0">
              <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-12 max-w-3xl py-10 lg:py-20">
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-bold">
                      Community Response Network 101 Course
                    </h4>
                    <p className="text-secondary-50 lg:text-lg pt-2">
                      Community Response Network (CRN 101) is a simple course
                      designed to give a student the basic understanding of
                      disaster management and how government systems work in
                      general.
                    </p>
                    <p className="text-secondary-50 lg:text-lg pt-2">
                      You shall also get training in operating the real software
                      tools that health force workers use in the field during
                      disaster management.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-bold">
                      Ask Me Anything (AMA) with WHO experts, Doctors and Field
                      Healthcare workers
                    </h4>
                    <p className="text-secondary-50 lg:text-lg pt-2">
                      You will hear experience reports from people in the field
                      who helped control the Coronavirus outbreak since March 2020. There will be no
                      long, boring introductions; instead, you will hear raw
                      stories from the field, what are the key challenges and
                      how Covid19 management is taking place.
                    </p>
                    <p className="text-secondary-50 lg:text-lg pt-2">
                      The best things about these AMAs are the free-wheeling
                      question and answer session where you talk with the
                      speakers about the most pressing questions in your mind.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl  font-bold">
                      Fellowship with students from across the country
                    </h4>
                    <p className="text-secondary-50 lg:text-lg pt-2">
                      This programme is open to students from all colleges from
                      across the country. You will have access to a community
                      forum for discussion. There will be a kind and respectful
                      code of conduct to make the experience welcoming for
                      everyone.
                    </p>
                  </div>
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-primary-500 text-xl lg:text-3xl  font-bold">
                        Learn FieldOps Realities
                      </h4>
                      <div>
                        <p className="text-base lg:text-lg font-semibold text-secondary-400 pt-4">
                          Gain Real-world experience and understanding.
                        </p>
                        <p className="text-secondary-50 lg:text-lg pt-1">
                          CoronaSafe Network is a fully functioning
                          battle-tested solution that has managed over 3 Lakh
                          patients. You shall learn about how various government
                          departments come together to fight the virus, observe
                          what gaps are there and find solutions to fill those
                          gaps.
                        </p>
                      </div>
                      <div>
                        <p className="text-base lg:text-lg font-semibold text-secondary-400 pt-4">
                          Be a part of Reserve Force
                        </p>
                        <p className="pt-1 text-white">
                          Your mission is to learn how our nation manages a
                          disaster so that when the next disaster strikes, you
                          already know whom to reach out to for help and/or can
                          contribute to strengthening the capabilities of our
                          governmental system.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h4 className="text-primary-500 text-xl lg:text-3xl  font-bold">
                          Fundamental Duty to the nation
                        </h4>
                      </div>

                      <p className="pt-2 text-white">
                        <a
                          className="text-blue-500 hover:bg-blue-900 hover:text-white underline transition"
                          target="_blank"
                          href="https://www.moes.gov.in/content/fundamental-duties"
                        >
                          Article 51-A{" "}
                        </a>
                        of the Indian Constitution outlines the fundamental
                        duties of every citizen of India including
                        to defend the country and render national service when
                        called upon to do so; As part of the Emergency Reserve
                        Cadre, you shall have the basic training and skills to
                        be in service of the nation and ready to serve your
                        state or district administration, if the need so arises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-secondary-900 border-t border-b border-secondary-800 mx-auto relative">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="border-l border-secondary-800 mx-4 xl:mx-0">
                <div className="pt-10 lg:pt-16">
                  <div className="heading-with-leftborder">
                    <h2 className="max-w-4xl text-secondary-200 font-bold text-2xl lg:text-6xl ml-4 lg:mx-auto">
                      Schedule
                    </h2>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto pl-4 lg:pl-0">
                  <div className="bg-gradient-to-br from-secondary-800 bg-secondary-900 border rounded-lg shadow-xl border-secondary-700 divide-y divide-secondary-700 mt-4">
                    <div className="md:grid md:grid-cols-12 p-4">
                      <p className="col-span-3 text-secondary-300 lg:text-right">
                        April 04, 2022
                      </p>
                      <p className="col-span-9 ml-8 text-secondary-100">
                        - Application Opens
                      </p>
                    </div>
                    <div className="md:grid md:grid-cols-12 p-4">
                      <p className="col-span-3 text-secondary-300 lg:text-right">
                        May 08, 2022
                      </p>
                      <p className="col-span-9 ml-8 text-secondary-100">
                        - Application Ends
                      </p>
                    </div>
                    <div className="md:grid md:grid-cols-12 p-4">
                      <p className="col-span-3 text-secondary-300 lg:text-right">
                        May 22, 2022
                      </p>
                      <p className="col-span-9 ml-8 text-secondary-100">
                        - Program Ends{" "}
                      </p>
                    </div>
                    <div className="md:grid md:grid-cols-12 p-4">
                      <p className="col-span-3 text-secondary-300 lg:text-right">
                        May 26, 2022
                      </p>
                      <p className="col-span-9 ml-8 text-secondary-100">
                        - Publishing list of FieldOps Cadets
                      </p>
                    </div>
                  </div>
                  <div className="pt-10 lg:pt-16">
                    <h4 className="text-secondary-300 text-xl lg:text-3xl  font-bold">
                      Questions?
                    </h4>
                    <p className="text-secondary-100 pt-2">
                      Email us at
                      <a
                        href="mailto:support@gdc.network"
                        className={
                          "text-secondary-400 underline pl-2 tracking-wide font-medium"
                        }
                      >
                        fieldops@gdc.network
                      </a>
                    </p>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0">
                  <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-700 p-6 lg:p-12">
                    <h4 className="text-xl lg:text-3xl text-secondary-900 font-bold text-center">
                      Apply now for
                      <br /> GDC FieldOps Fellowship!!
                    </h4>
                    <div className="mt-4 flex justify-center">
                      {/* <a
                        className="block text-center px-10 py-4 bg-gradient-to-br from-secondary-800 to-secondary-900 text-yellow-500 font-semibold rounded-md shadow-md hover:shadow-xl hover:from-secondary-700 hover:to-secondary-900 hover:text-yellow-500 transition duration-250 ease-in-out"
                        href="#"
                      >
                        Applications to open soon
                      </a> */}
                      <p className="text-secondary-900 bg-yellow-400 p-4 rounded-lg bg-opacity-10 lg:text-xl font-semibold">
                        Applications to open soon!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
