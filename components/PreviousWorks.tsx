import Image from "next/image";
import Link from "next/link";

const PreviousWorks = () => {
  const works = [
    {
      title: "Wellesley Renewing Democracy Summit",
      imgSrc: "https://pentagram-production.imgix.net/c730e8f9-f666-4416-a8bb-89cf14f1b373/MW_Manuvo_CM_P_01_COVER_new_02.png?rect=251%2C3%2C1412%2C1077&w=500&fit=crop&fm=jpg&q=70&auto=format&h=382",
      span: true, // Indicates that this item should span multiple columns and rows
    },
    {
      title: "LuxAlgo",
      imgSrc: "https://pentagram-production.imgix.net/b94e1fc8-df82-4671-bc3d-910128eade2e/240423_DDF_TimesSquare_Cubecopy.jpg?rect=96%2C0%2C1728%2C1080&w=310&fit=crop&fm=jpg&q=70&auto=format&h=195",
    },
    {
      title: "Tribeca Festival 2023",
      imgSrc: "https://pentagram-production.imgix.net/1bd0d336-a376-440d-9ec1-b8f0dc1edf51/01_AH_TENNEPRINCIPLESOFDESIGNE.jpg?rect=95%2C0%2C1729%2C1080&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548",
    },
    {
      title: "London Design Festival 2023",
      imgSrc: "https://pentagram-production.imgix.net/4274f82d-2d5a-48cc-8100-14943b007a9b/JR_PP50_04.jpg?rect=0%2C0%2C3000%2C1870&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=399",
    },
    {
      title: "‘The Tenne Principles of Designe’",
      imgSrc: "https://pentagram-production.imgix.net/4274f82d-2d5a-48cc-8100-14943b007a9b/JR_PP50_06.edit.jpg?rect=0%2C0%2C3000%2C1870&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=399",
    },
  ];

  return (
    <section className="py-10 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Previous Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm ${
                work.span ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={work.imgSrc}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{work.title}</h3>
            </div>
          ))}
        </div>
        <div className="py-6 text-center">
        <Link href="/works" className="text-2xl text-gray-400 hover:text-gray-300 duration-300 ease-in-out font-bold">View All Works</Link>
        </div>
      </div>
    </section>
  );
};

export default PreviousWorks;
