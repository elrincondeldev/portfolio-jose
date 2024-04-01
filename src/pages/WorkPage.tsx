function WorkPage() {
  return (
    <div className="flex flex-col gap-5 geist-regular text-white">
      <p className="text-left">
        I currently have a little over a year of experience in the programming
        sector, and this is my resume.
      </p>
      <hr className="#A3A3A3" />
      <div className="flex flex-col gap-10 text-[#d4d4d4]">
        <div className="flex flex-col gap-5 text-left">
          <div className="flex flex-col">
            <h3 className="geist-bold text-xl">Terrain Technologies</h3>
            <p className="#A3A3A3 text-md]">Full Stack developer</p>
          </div>
          <p>
            Terrain Technologies Terrain Technologies develops projects and
            applications based on spatial data (GIS and 3D) turning data into
            information and knowledge.
          </p>
          <ul className="flex flex-col gap-2 list-disc">
            <li>
              Project intended at automating ambulance transportation services
              in Asturias.
            </li>
            <li>
              Development of new features in both the Frontend and Backend.
            </li>
          </ul>
          <p>
            Since I started working at Terrain Technologies, I have learned many
            things. In particular, I have developed my backend skills with
            Node.js and have learned to implement different monitoring tools
            such as Sentry, Grafana, or Datadog.
          </p>
        </div>
        <hr className="#A3A3A3" />
        <div className="flex flex-col gap-3 text-left">
          <div className="flex flex-col">
            <h3 className="geist-bold text-xl">Midnova group</h3>
            <p className="#A3A3A3 text-md]">
              Full Stack developer, Mar 2023 - Aug 2023
            </p>
          </div>
          <p>
            Midnova Group is a company dedicated to various services, ranging
            from offering its services of import and export to different
            companies, to having its own e-commerce.
          </p>
          <ul className="flex flex-col gap-2 list-disc">
            <li>
              Creation of various management applications using React,
              TypeScript, and Tailwindcss for their development.
            </li>
            <li>
              We are also working on an eCommerce project where I have acquired
              different skills in analytics, SEO, and various technologies.
            </li>
          </ul>
          <p>
            During my time working as a software developer at Midnova, I learned
            a lot about process automation, developing accessible and scalable
            applications, and CMS such as WordPress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
