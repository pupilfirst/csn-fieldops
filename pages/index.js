import Head from "next/head";

function ApplyToCourse() {
  return (
    <div className="flex hidden">
      <a
        className="block w-full md:w-auto text-center px-10 py-4 bg-gray-900 text-primary-500 border border-primary-500 font-bold font-montserrat rounded shadow-lg hover:shadow-xl hover:bg-primary-500 hover:text-gray-900 transition duration-250 ease-in-out"
        href="https://apply.pupilfirst.org"
      >
        Apply for Fellowship
      </a>
    </div>
  );
}

function HeroCharacter({ caption, imgSrc }) {
  return (
    <div className="flex-shrink-0">
      <img
        src={imgSrc}
        alt={caption}
        className={"bg-contain w-40 lg:w-auto mx-auto"}
      />
      <p className="text-3xl lg:text-4xl text-black border-black mb-4">
        {caption}
      </p>
    </div>
  );
}

function ImageWithDescription({ name, caption, imgSrc }) {
  return (
    <div>
      <div className="rounded-lg border-2 border-primary-500 w-5/6 md:w-auto ">
        <img
          src={imgSrc}
          alt={caption}
          className="block object-contain rounded-lg"
        />
      </div>
      <h4 className={"text-lg text-primary-500 pt-2"}>{name}</h4>
      <p className={"text-white leading-tight pt-1"}>{caption}</p>
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
        <title>Bharat FieldOps Fellowship!</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Bharat FieldOps Fellowship!" />
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
      <main className="bg-gray-800 mx-auto">
        <section className="hero__bg-pattern bg-gray-900 pb-20">
          <header className="max-w-6xl mx-auto py-4 lg:py-8 px-4 xl:px-0">
            <div className="flex justify-between items-center">
              <img
                className="block w-36 md:w-44"
                src="logos/bharat-FieldOps-Fellowship-logo-1.svg"
              />
              <img className="block w-20 md:w-24" src="logos/aicte-logo.png" />
            </div>
          </header>
          <div className="max-w-6xl flex flex-col md:flex-row justify-between mx-auto text-white pt-2 pb-12 px-4 xl:px-0">
            <div className="w-full md:w-8/12">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight lg:pt-16">
                Welcome to the Bharat <br />
                Field Ops Fellowship!
              </h1>
              <p className="font-spacemono text-sm md:text-base lg:text-lg pt-2 lg:pt-4 lg:pr-12">
                The 2nd Covid19 wave is tearing through the country and
                overloading healthcare facilities. <br></br>
                <br></br>Bharat Field-Ops Fellowship is a national programme to
                identify and train 100,000 students in disaster management using
                digital tools and become part of the Fieldops Reserve Cadre to
                assist in Covid19 management.
              </p>
              <div className="mt-10">{ApplyToCourse()}</div>
            </div>
            <div className="hidden md:block md:w-4/12">
              <picture>
                <source srcSet="hero/cef-hero-image.webp" type="image/webp" />
                <source srcSet="hero/cef-hero-image.png" type="image/png" />
                <img
                  src="hero/cef-hero-image.png"
                  alt="Bharat FieldOps Fellowship! Icon"
                />
              </picture>
            </div>
          </div>
        </section>
        <section className="-mt-20 mx-4 xl:mx-0">
          <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center text-center">
              <p className="text-xs leading-tight text-center px-4 py-2 rounded-b-lg bg-gray-50 shadow-inner">
                Supported By
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-8 lg:gap-y-0 gap-4 md:grid-cols-3 lg:grid-cols-4 pt-7">
              <div className="flex justify-center">
                <div className="w-44 flex items-center">
                  <img
                    className="object-contain"
                    src="logos/NSTEDB-logo.svg"
                    alt="National Science and Technology Entrepreneurship Development Board"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-44 flex items-center">
                  <img
                    className="object-contain"
                    src="logos/act-grants-logo.png"
                    alt="Act grants - Action COVID-19 Team"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="h-14 flex items-center">
                  <img
                    className="object-contain"
                    src="logos/swasth.svg"
                    alt="Swasth Alliance"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-44 flex items-center">
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
        <section className="bg-gray-800 py-10 lg:py-20 relative">
          <div className="max-w-xl mx-auto text-white px-4 lg:px-0">
            <div className="terminal-container-bg border rounded-lg border-primary-500">
              <div className="flex space-x-2 px-6 py-3 border-b border-primary-500">
                <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
              </div>
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg p-4 lg:p-6">
                <div className="flex">
                  <span className="text-primary-500 text-xl">&#10142;</span>
                  <p className="pl-3">
                    <span className="text-primary-500">Learn </span> from WHO
                    experts how Covid19 is managed at field level
                  </p>
                </div>
                <div className="flex">
                  <span className="text-primary-500 text-xl">&#10142;</span>
                  <p className="pl-3">
                    Hands on training in digital tools for{" "}
                    <span className="text-primary-500">
                      disaster management
                    </span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-primary-500 text-xl">&#10142;</span>
                  <p className="pl-3">
                    Become part of a{" "}
                    <span className="text-primary-500">
                      national volunteer team
                    </span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-primary-500 text-xl">&#10142;</span>
                  <p className="pl-3">
                    Meaningful{" "}
                    <span className="text-primary-500">
                      Internship experience{" "}
                    </span>
                    for a life-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 py-10 lg:py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-5 lg:gap-8 px-4 xl:px-0">
              <div className="lg:col-span-3">
                <h2 className="font-bold text-2xl md:text-5xl font-montserrat text-white leading-tight">
                  Everything you
                  <br /> need to know
                </h2>
                <div className="space-y-6 md:space-y-10 md:pr-12 pt-4 md:pt-10">
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      What is this?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      Experts led field-operations training in Covid19 disaster
                      management using digital tools.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Why?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      To build capabilities in students to deploy and
                      operationalise CoronaSafe disaster management tools in
                      your district.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Who is this for?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      Age 18+ students who have a deep desire to serve the
                      nation and answer the Prime Minister's appeal to youth to
                      come forward. Experience in Social service via NSS, NCC,
                      NGO’s, or team work via University/College festivals,
                      students startups etc is appreciated.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      When?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      May 08 - May 28, 2021
                      <br />6 month internship thereafter for successful
                      candidates.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Effort?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      48 hours of highly enjoyable study & self-paced learning
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Format?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      Self-paced learning via video tutorials,with assistance
                      from experts and community.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Mentorship?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      Weekly Ask Me Anything Sessions with experts from World
                      Health Organisation and Healthcare workers from the field.
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Curriculum?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">
                      A short management course on how disaster management
                      operations work and a technical training on using
                      <a href="https://coronasafe.network/tools">
                        CoronaSafe Network tools.
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Certificate?
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Yes</p>
                  </div>
                  <div>
                    <h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-montserrat font-medium">
                      Cost
                    </h3>
                    <p className="ml-8 md:ml-16 pt-1 text-white">Free</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="sticky top-0 pt-12">
                  <div className="terminal-container-bg border rounded-lg border-primary-500">
                    <div className="flex space-x-2 px-6 py-3 border-b border-primary-500">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex p-4 lg:p-6">
                      <span className="text-primary-500 text-xl">&#10142;</span>
                      <div className="pl-3">
                        <p className="text-white">
                          Bharat Field-Ops Fellowship is a national programme to
                          identify and train 100,000 students in disaster
                          management using digital tools and become part of the
                          Fieldops Reserve Cadre to assist in Covid19
                          management.
                        </p>
                        <div className="pt-4 hidden">
                          <a
                            className="block px-10 py-4 text-center bg-gradient-to-b from-primary-500 to-primary-700 text-gray-900 border border-primary-500 font-bold font-montserrat rounded shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 hover:text-primary-500 transition duration-250 ease-in-out"
                            href="https://apply.pupilfirst.org"
                          >
                            Apply for Fellowship
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">
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
                      className="text-gray-700"
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
              <div className="max-w-3xl mx-auto relative z-10 pl-4 lg:pl-0">
                <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-12 py-12 lg:pb-20">
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
                    name="Dr Sachin Suresh"
                    caption={
                      <>
                        MBBS, MS (ENT), <br />
                        ENT Surgeon, Ernakulam
                      </>
                    }
                    imgSrc="people/Dr_Sachin_Suresh.jpg"
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
        <section className="bg-gray-900 relative overflow-hidden">
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
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-20">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">
                    Testimonials
                  </h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto text-white">
                <div className="pt-8 pb-20 space-y-12 md:space-y-20">
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">
                    It has been a truly invaluable learning experience and has
                    learnt from all the constructive input and guidance
                    throughout the course. The course is designed in a manner
                    that learning is not limited. The questions and material are
                    thought-provoking and thus effective. The videos are
                    fabulous and just the right length. I do not see the time go
                    by when I am working on these lessons. I really liked the
                    tone of the videos and the narrative materials. I am
                    extremely happy that I have completed the course as I gained
                    a lot of insight and knowledge on COVID - 19. Great Course
                    and thank you for making this course so satisfying.
                    <br></br>- Reema Shaji ( 2nd Year, Computer Science
                    Engineering Student)
                  </blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">
                    Community Response Network was a splendid course by corona
                    safe Network knowledge base. From my perspective, instead of
                    blindly obeying rules regarding covid protocol I had an
                    experience of how these rules are coined or what is the
                    intention behind these rules. The course was easily
                    accessible and step by step procedures were included in it.
                    Even though we are checking daily corona positive datas and
                    updation we were not aware about it at that time, but after
                    going through the course I got an idea of how our system
                    manages such a pandemic and what are the responsibilities I
                    have. In the current times, this course is a mandatory one
                    to make awareness regarding the pandemic. Thankfully
                    appreciating each and everyone who made such a stunning
                    platform
                    <br></br>- Asna P (3rd Year, BTech Civil , Government
                    Engineering College Thrissur)
                  </blockquote>
                  <blockquote className="testimonial-blockquote pl-12 lg:pl-16">
                    CRN 101 was a great program. The sessions conducted in this
                    program helped us to gain so much information. The question
                    and answer session was fun and informative and we got to
                    know each other. Lastly the interactive session was also
                    great. Truthfully CRN 101 was a great experience.
                    <br></br>- Muhammed Khalifa Zayed (2nd Year, BTech CSE , MES
                    College of engineering Kuttippuram)
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="max-w-3xl ml-4 lg:mx-auto text-white pt-0 lg:pt-20">
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
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">
                    Free
                  </h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">
                    This program is created by a team of over a dozen people
                    from across multiple companies, with funding from the ACT
                    foundation.
                  </p>
                  <p>
                    ACT is a 100 crore fund setup by India’s leading tech
                    entrepreneurs and venture capitalists for supporting efforts
                    combating COVID-19. CoronaSafe is a recipient of ACT grants.
                  </p>
                  <p>
                    This funding enables us to offer the course to you for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">
                    Work alongside CoronaSafe Engineering Fellows
                  </h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-6 text-white">
                  <p className="mt-4">
                    CoronaSafe Network codebase is a national asset created by
                    India’s leading software industry engineers along with the
                    National Health Mission, Government of India and Department
                    of Health, Government of Kerala.
                  </p>
                  <p>
                    During the first Covid19 wave in March 2020, over 300+
                    industry software engineers voluntarily contributed to build
                    CoronaSafe Network. The software is currently being used in
                    over 300 hospitals to record patient intake and availability
                    of facilities. This results in a central dashboard used by
                    the Ernakulam district collector’s office for monitoring and
                    allocating resources.
                  </p>
                  <p>
                    In Jan 2021, 50,482 students applied for{" "}
                    <a href="https://fullstack.pupilfirst.org/">
                      CoronaSafe Engineering Fellowships{" "}
                    </a>
                    from which 18 students were selected and successfully
                    completed industry led software training for continous
                    upgradation of CoroanSafe Network. You shall work alongside
                    india’s top software engineering students and give inputs
                    from the field to improve operational efficiency of the
                    software and processes.
                  </p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0 mt-4">
                <div className="text-primary-500 flex space-x-6">
                  <a
                    className="flex items-center space-x-2 cursor-pointer"
                    href="https://github.com/coronasafe/"
                  >
                    <div className="h-4 w-4">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="github"
                        className="svg-inline--fa fa-github fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                    </div>
                    <span>GitHub</span>
                  </a>
                  <a
                    className="flex items-center space-x-2 cursor-pointer"
                    href="https://coronasafe.network/tools"
                  >
                    <div className="h-4 w-4">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="external-link-alt"
                        className="svg-inline--fa fa-external-link-alt fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                        ></path>
                      </svg>
                    </div>
                    <span>Tools</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">
                    Impact
                  </h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="mt-4 pl-4 lg:pl-0">
                  <img
                    className="object-cover rounded-md "
                    src="csn/impact.png"
                  />
                </div>
                <div className="space-y-8 md:grid md:grid-col-2 lg:grid-cols-4 lg:gap-8 lg:space-y-0 lg:space-x-5 pt-8 pl-4 lg:pl-0">
                  <div>
                    <h4 className="text-xl text-primary-500">331+</h4>
                    <p className="pt-1 text-sm text-white">
                      Hospitals Using the platform
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl text-primary-500">145K+</h4>
                    <p className="pt-1 text-sm text-white">Patients Managed</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-primary-500">52K+</h4>
                    <p className="pt-1 text-sm text-white">Shifting Managed</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-primary-500">2L+</h4>
                    <p className="pt-1 text-sm text-white">
                      Telemedicine Calls
                    </p>
                  </div>
                </div>
                <p className="text-xs italic pt-6 text-gray-200 pl-4 xl:pl-0">
                  * Stats as of April 22, 2021
                </p>
                <div className="py-10 lg:pb-20 pl-4 lg:pl-0">
                  <div className="terminal-container-bg border rounded-lg border-primary-500">
                    <div className="flex space-x-1.5 px-6 py-3 border-b border-primary-500">
                      <div className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex p-4 lg:p-6">
                      <span className="text-primary-500 text-xl">&#10142;</span>
                      <div className="pl-3">
                        <div className="text-white space-y-6 text-base lg:text-lg">
                          <p>
                            We are now looking to select 100,000 of the best
                            students in India to become trained field operations
                            volunteers under expert guidance.
                          </p>
                          <p>
                            Successful students who complete the programme shall
                            get a semester long internship with CoronaSafe to
                            contribute in deploying and managing CoronaSafe
                            tools to more districts in India.
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
        <section>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="space-y-12 pt-10 lg:pt-20">
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">
                      Join the Community Response Network
                    </h4>
                    <p className="text-white pt-2">
                      This is an AICTE backed course that shall give you a real
                      understanding of how pandemic management and government
                      systems work in general. You shall also get training into
                      operating the real software tools that healthforce workers
                      use in the field. Once you complete your training
                      successfully, you shall be inducted into the Field
                      Operations Reserve Cadre to deploy CoronaSafe Network in
                      your district.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">
                      Ask Me Anything (AMA) with WHO experts, Doctors and Field
                      Healthcare workers
                    </h4>
                    <p className="text-white pt-2">
                      You will hear experience reports from people in the field
                      who have been managing Coronavirus since March 2020. There
                      will be no long, boring introductions; instead you will
                      hear raw stories from the field, what are the key
                      challenges and how Covid19 management is taking place.The
                      best things about these AMAs are the free-wheeling
                      question and answer session where you talk with the
                      speakers about the most pressing questions in your mind.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">
                      Fellowship with a diversified group of students from
                      across the country
                    </h4>
                    <p className="text-white pt-2">
                      This programme is open to all college from across the
                      country and you will team up with them to work together to
                      strengthen the fight against Covid. You shall also work
                      alongside 18 CoronaSafe Engineering Fellows who have
                      undergone a 12 week intensive training and are now working
                      under industry guidance to upgrade the open-source tools.
                      You will learn to collaborate with them through git,
                      GitHub and file product upgrades that are necessary for
                      improving efficiency of field operations. You will have
                      access to a community forum for discussions as well as a
                      Discord server for conversations. There will be a kind and
                      respectful code of conduct to make the experience
                      welcoming for everyone.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">
                        Skills
                      </h4>
                      <p className="text-white pt-2">
                        You will learn a host of practical skills that will help
                        you in kick starting your career and some lessons that
                        will stay with you even long after.
                      </p>
                    </div>
                    <div>
                      <p className="text-base lg:text-lg font-bold text-white">
                        Real world experience and understanding.
                      </p>
                      <p className="pt-2 text-white">
                        Covid 19 is stress testing the indian healthcare system
                        and disrupting normal life like never before. It is hard
                        to predict{" "}
                        <a
                          className="text-primary-500"
                          href="https://www.theleaflet.in/difficult-to-predict-how-many-waves-of-covid-19-india-will-have-vaccine-specialist-sanjay-rai-pandemic/#"
                        >
                          how many waves of the virus are left{" "}
                        </a>
                        to hit india. Consensus is building amongst global
                        epidemiologists that{" "}
                        <a
                          className="text-primary-500"
                          href="https://www.nature.com/articles/d41586-021-00396-2"
                        >
                          Covid19 is here to stay
                        </a>
                        . CoronaSafe Network is a fully functioning
                        battle-tested solution that has managed over 1.5 Lakh
                        patients in Ernakulam, the largest district of Kerala.
                        You shall learn about how various government departments
                        come together to fight the virus, observe what gaps are
                        there and find solutions to fill those gaps
                      </p>
                    </div>
                    <div>
                      <p className="text-base lg:text-lg font-bold text-white">
                        Be a part of Reserve Force
                      </p>
                      <p className="pt-2 text-white">
                        The field health-force across the country is going
                        through tremendous physical and mental exhaustion,
                        caused by being in the operational front over the last
                        13 months. As vaccinations have additionally started,
                        the load on healthcare workers have increased manifold
                        and we need to support district administrations to
                        operationalise digital tools. Your mission is to learn
                        how to operate CoronaSafe Network as a power-user and
                        learn to integrate it with various healthcare facilities
                        in your district.
                      </p>
                    </div>
                    <div>
                      <p className="text-base lg:text-lg font-bold text-white">
                        Fundamental Duty to our nation
                      </p>
                      <p className="pt-2 text-white">
                        <a
                          className="text-primary-500"
                          href="https://www.moes.gov.in/content/fundamental-duties"
                        >
                          Article 51-A{" "}
                        </a>
                        of our constitution outlines the fundamental duties of
                        citizens of every citizen of india including to defend
                        the country and render national service when called upon
                        to do so; As part of the Field Ops Reserve Force, you
                        shall have the basic training and skills to be in
                        service of the nation and ready to serve your state or
                        district administration, if the need so arises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border-l border-gray-600 mx-4 xl:mx-0">
              <div className="pt-10 lg:pt-16">
                <div className="heading-with-leftborder">
                  <h2 className="max-w-3xl font-bold text-2xl lg:text-5xl font-montserrat text-white leading-tight ml-4 lg:mx-auto">
                    Schedule
                  </h2>
                </div>
              </div>
              <div className="max-w-3xl mx-auto pl-4 lg:pl-0">
                <div className="terminal-container-bg border rounded-lg shadow-xl border-primary-500 divide-y divide-primary-500 mt-4">
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      April 28, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">
                      - Application Opens
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      May 05, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">
                      - Application Ends
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      May 07, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">
                      - Announcement of selected students{" "}
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      May 08, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">
                      - Program Begins
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      May 28, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">- Program Ends</p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      May 31, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">
                      - Successful Trainees List Published
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-12 p-4">
                    <p className="col-span-3 text-primary-500 lg:text-right">
                      June 01, 2021
                    </p>
                    <p className="col-span-9 ml-8 text-white">
                      - Internship with CoronaSafe begins (6 months)
                    </p>
                  </div>
                </div>
                <div className="pt-10 lg:pt-16">
                  <h4 className="text-primary-500 text-xl lg:text-3xl font-montserrat font-bold">
                    Questions?
                  </h4>
                  <p className="text-white pt-2">
                    Email us at
                    <a
                      href="mailto:bharat@pupilfirst.org"
                      className={
                        "text-primary-700 underline pl-2 tracking-wide font-montserrat font-medium"
                      }
                    >
                      bharat@pupilfirst.org
                    </a>
                  </p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto py-10 lg:pb-24 pl-4 xl:pl-0 hidden">
                <div className="rounded-lg bg-gradient-to-b from-primary-400 to-primary-700 p-6 lg:p-12">
                  <h4 className="text-xl lg:text-3xl font-montserrat font-bold text-center">
                    Apply now for
                    <br /> Bharat FieldOps Fellowship!!
                  </h4>
                  <div className="mt-4 flex justify-center">
                    <a
                      className="block text-center px-10 py-4 bg-gray-900 text-primary-500 border border-primary-500 font-bold font-montserrat rounded shadow-lg hover:shadow-xl hover:bg-primary-900 hover:text-gray-900 transition duration-250 ease-in-out"
                      href="https://apply.pupilfirst.org"
                    >
                      Apply for Fellowship
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
