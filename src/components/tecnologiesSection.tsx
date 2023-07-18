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
    src: "https://icons-for-free.com/iconfiles/png/512/command+develop+javascript+language+programming+software+icon-1320165727225308896.png",
    alt: "javascript logo",
    width: 75,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    alt: "typescript logo",
    width: 55,
  },
  {
    src: "https://d4.alternativeto.net/uaUADPLN5QTqRHNl0qujQbTXzm5wjsAq5K9Y-ylGjdQ/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy90YWlsd2luZC1jc3NfMTM2NjE5LnBuZw.png",
    alt: "tailwind logo",
    width: 55,
  },
  {
    src: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
    alt: "bootstrap logo",
    width: 70,
  },
];
export default function TecnologiesSection() {
  return (
    <section className="my-44 md:flex-1 w-full text-left">
      <h1 className="text-5xl font-bold text-amber-400 mb-8">
        Lo que más utilizo
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-4 md:mt-6 bg-slate-900 border-2 border-black shadow-black shadow-lg rounded-xl p-4 md:mx-auto md:max-w-fit">
        {tecnologiesImages.map((image) => (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 60}
            height={image.width || 60}
            key={image.src}
            className="filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
          />
        ))}
      </div>
    </section>
  );
}
