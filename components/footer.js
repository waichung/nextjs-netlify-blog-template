import Container from "./container";
import config from "@/lib/config";

export default function Footer() {
  const description = config.site_description;
  const galleryImages = config.galleryImages;
  return (
    <footer
      style={{ marginTop: 100 }}
      className="bg-accent-1 border-t border-accent-2"
    >
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3
            style={{ paddingBottom: 35 }}
            className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
          >
            {description}
          </h3>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {/* <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
            {galleryImages.map((imgSrc) => (
              <div
                key={imgSrc}
                style={{
                  height: 100,
                  width: 100,
                  marginRight: 10,
                  position: "relative",
                }}
              >
                <img src={imgSrc} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
