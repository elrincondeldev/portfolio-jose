import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function HomePage() {
  return (
    <div className="flex flex-col gap-10 geist-regular text-white">
      <p className="text-left text-2xl">Hey, I’m Jose ✌🏻</p>
      <p className="text-left text-[#d4d4d4]">
        I am a software developer who loves creating useful, scalable, and
        accessible software. Currently, I work as a full stack developer at
        Terrain Technologies, where I develop new features for a project aimed
        at automating the ambulances of Asturias.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex w-[100%] justify-between gap-5">
          <img
            src="/images/vertical-2.png"
            alt=""
            className="w-[35%] rounde-md"
          />
          <img
            src="/images/horizontal-2.png"
            alt=""
            className="w-[65%] rounded-md"
          />
        </div>
        <div className="flex w-[100%] justify-between gap-5">
          <img
            src="/images/horizontal-1.png"
            alt=""
            className="w-[65%] rounded-md"
          />
          <img
            src="/images/vertical-1.png"
            alt=""
            className="w-[35%] rounde-md"
          />
        </div>
      </div>
      <p className="text-left text-[#d4d4d4]">
        I've always liked meeting new people with whom I can share knowledge,
        experiences, or just anecdotes. Social networks have allowed me to meet
        some truly incredible people in the industry.
      </p>

      <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-5 text-[14px]">
        <a href="https://www.instagram.com/elrincondeldev/" target="_blank">
          <div className="flex items-center p-3 justify-between bg-[#262626] border-2 border-[#404040] rounded-md">
            <img src="/images/instagram.png" alt="" />
            <div className="text-left">
              <p>@elrincondeldev</p>
              <p>125,000 followers</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a href="https://www.tiktok.com/@elrincondeldev" target="_blank">
          <div className="flex items-center p-3 justify-between bg-[#262626] border-2 border-[#404040] rounded-md">
            <img src="/images/tiktok.png" alt="" />
            <div className="text-left">
              <p>@elrincondeldev</p>
              <p>159,000 followers</p>
            </div>
            <FaArrowUpRightFromSquare />
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCWn_0MmgojB711LFX-jaCDQ"
          target="_blank"
        >
          <div className="flex items-center p-3 justify-between bg-[#262626] border-2 border-[#404040] rounded-md">
            <img src="/images/youtube.png" alt="" />
            <div className="text-left">
              <p>@elrincondeldev</p>
              <p>24,000 subscribers</p>
            </div>

            <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
