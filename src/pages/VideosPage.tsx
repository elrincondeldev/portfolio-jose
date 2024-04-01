import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ElementCompact, xml2js } from "xml-js";
import Loader from "../components/Loader";

interface Video {
  id: { _text: string };
  link: { _attributes: { href: string } };
  title: { _text: string };
  mediaGroup: {
    mediaCommunity: {
      statistics: {
        _attributes: {
          views: { views: string };
        };
        mediaStarRating: {
          _attributes: {
            count: { count: string };
          };
        };
      };
    };
  };
}

function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

        const url =
          "https://www.youtube.com/feeds/videos.xml?channel_id=UCWn_0MmgojB711LFX-jaCDQ";

        const response = await fetch(corsAnywhereUrl + url);
        const data = await response.text();

        const xml = xml2js(data, {
          compact: true,
          ignoreComment: true,
        }) as ElementCompact;

        const videoEntries = xml.feed.entry.map((entry: any) => {
          return {
            id: { _text: entry.id._text },
            link: { _attributes: { href: entry.link._attributes.href } },
            title: { _text: entry.title._text },
            mediaGroup: {
              mediaCommunity: {
                statistics: {
                  _attributes: {
                    views:
                      entry["media:group"]["media:community"][
                        "media:statistics"
                      ]._attributes,
                  },
                  mediaStarRating: {
                    _attributes: {
                      count:
                        entry["media:group"]["media:community"][
                          "media:starRating"
                        ]._attributes,
                    },
                  },
                },
              },
            },
          };
        });

        setVideos(videoEntries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      {videos.length >= 1 ? (
        <section className="flex flex-col gap-10 geist-regular text-white">
          <p className="text-left text-[#d4d4d4]">
            These are my last 14 YouTube videos.
          </p>
          <div>
            <div className="grid md:grid-cols-[1fr_1fr] gap-5 text-[14px]">
              {videos.slice(0, 14).map((video: Video) => (
                <a
                  key={video.id._text}
                  href={video.link._attributes.href}
                  target="_blank"
                >
                  <div className="flex items-center p-3 justify-between bg-[#262626] border-2 border-[#404040] rounded-md min-h-[100px]">
                    <div className="flex flex-col gap-5">
                      <p className="text-left">{video.title._text}</p>
                      <div className="flex gap-10">
                        <p>
                          Views:{" "}
                          {
                            video.mediaGroup.mediaCommunity.statistics
                              ._attributes.views.views
                          }
                        </p>
                        <p>
                          Likes:{" "}
                          {
                            video.mediaGroup.mediaCommunity.statistics
                              .mediaStarRating._attributes.count.count
                          }
                        </p>
                      </div>
                    </div>
                    <FaArrowUpRightFromSquare />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default VideosPage;
