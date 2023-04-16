import { NextSeo } from "next-seo";

export const SEO = () => {
  return (
    <NextSeo
      title="Universal Traveller"
      description="Travel page for astronauts"
      openGraph={{
        url: "https://universal-travel.vercel.app/",
        title: "Universal Traveller",
        description: "Travel page for astronauts",
        images: [
          {
            url: "https://res.cloudinary.com/dwknplao3/image/upload/v1681672477/universal-travel_1_wqgsbu.png",
          },
        ],
        siteName: "Universal Traveller",
      }}
    />
  );
};
