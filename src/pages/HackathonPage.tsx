import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function HackathonPage() {
  return (
    <div className="flex flex-col gap-10 geist-regular text-white">
      <p className="text-left text-[#d4d4d4]">
        La Hackathon Del Dev is my biggest personal project, aimed at
        encouraging programmers from around the world to create amazing projects
        and compete with each other with the goal of learning.
      </p>
      <a href="https://www.lahackathondeldev.com/" target="_blank">
        <div className="flex justify-between items-center px-10 py-5 bg-[#262626] border-2 border-[#404040] rounded-md">
          <div className="text-left">
            <p>La Hackathon Del Dev landing page</p>
            <p className="text-[#A3A3A3]">More than 100 registered teams.</p>
          </div>
          <FaArrowUpRightFromSquare />
        </div>
      </a>
      <div className="flex justify-between">
        <img src="/images/hackathon-1.png" alt="" className="w-[32%]" />
        <img src="/images/hackathon-2.png" alt="" className="w-[32%]" />
        <img src="/images/hackathon-3.png" alt="" className="w-[32%]" />
      </div>
      <p className="text-left text-[#d4d4d4]">
        The first edition of this event is currently being developed, and in the
        future, I would like to turn it into an annual event, where different
        programmers compete once a year to win this competition.
      </p>
      <p className="text-left">Oficial partners:</p>
      <div className="flex justify-between">
        <img
          src="/images/logitech.svg"
          alt=""
          className="bg-[#262626] border-2 border-[#404040] px-10 py-5 rounded-sm"
        />
        <img
          src="/images/nuwe.svg"
          alt=""
          className="bg-[#262626] border-2 border-[#404040] px-10 py-5 rounded-sm"
        />
        <img
          src="/images/4geeks.svg"
          alt=""
          className="bg-[#262626] border-2 border-[#404040] px-10 py-5 rounded-sm"
        />
      </div>
    </div>
  );
}

export default HackathonPage;
