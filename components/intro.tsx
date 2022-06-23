import Link from "next/link";
import React from "react";
import Container from "@/components/container";
import SlideShow from "@/components/slideshow";
import config from "@/lib/config";

function Intro({ thumbnail, title }: any) {
  const first = config.site_title.split(".")[0];
  const last = config.site_title.split(".")[1];
  const description = config.site_description;
  const galleryImages = config.galleryImages;
  const baseColor = config.base_color;

  return (
    <>
      {title && (
        <p style={{ display: "flex", width: "100%", cursor: "pointer" }}>
          <Link href="/">
            <span style={{ fontSize: 50 }}>{"<--"}</span>
          </Link>
        </p>
      )}
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            {title ? (
              title
            ) : (
              <>
                <span style={{ color: baseColor }}>{first}</span>.{last}
              </>
            )}
          </h1>
          {title ? (
            ""
          ) : (
            <h4
              style={{ color: "gray" }}
              className="text-center md:text-left text-lg mt-5 md:pl-8"
            >
              {description}
            </h4>
          )}
          {thumbnail ? (
            <div
              style={{
                height: 200,
                width: 400,
                display: "block",
                position: "relative",
              }}
            >
              <img src={thumbnail} alt="thumbnail" />
            </div>
          ) : (
            ""
          )}
        </section>
      </Container>
      {!thumbnail && <SlideShow images={galleryImages} />}
    </>
  );
}

export default Intro;
