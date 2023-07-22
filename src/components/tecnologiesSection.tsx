import Image from "next/image";
const tecnologiesImages = [
  {
    src: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
    alt: "nextjs logo",
  },
  {
    src: "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
    alt: "react logo",
  },
  {
    src: "https://www.code2inspire.com/icons/jsIcon.png",
    alt: "javascript logo",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    alt: "typescript logo",
  },
  {
    src: "https://d4.alternativeto.net/uaUADPLN5QTqRHNl0qujQbTXzm5wjsAq5K9Y-ylGjdQ/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy90YWlsd2luZC1jc3NfMTM2NjE5LnBuZw.png",
    alt: "tailwind logo",
  },
  {
    src: "https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-11.jpg",
    alt: "bootstrap logo",
  },
];
export default function TecnologiesSection() {
  return (
    <section className="mt-56 md:flex-1 w-full text-left">
      <h1 className="text-5xl font-bold mb-8">Lo que más utilizo</h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-28 rounded-xl p-4 md:mx-auto md:max-w-fit">
        {tecnologiesImages.map((image) => (
          <div key={image.src} className="relative group">
            <div className="bg-[var(--primary-100)] absolute w-full h-full z-10 rounded-full opacity-25 group-hover:opacity-0 transition-all duration-500"></div>
            <img
              src={image.src}
              alt={image.alt}
              width={60}
              height={60}
              className="group-hover:scale-110 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
