import img from '../assets/images/bg-1.png';
import img2 from '../assets/images/bg-2.png';

const columnData = [
  {
    id: 1,
    title: 'Balloon Magic',
    img: img2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit voluptate voluptatum perferendis vero earum repudiandae, possimus non rem ea minus dolore neque saepe laborum.',
  },
  {
    id: 2,
    title: 'Road Master',
    img,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit voluptate voluptatum perferendis vero earum repudiandae, possimus non rem ea minus dolore neque saepe laborum.',
  },
  {
    id: 3,
    title: 'The Explorer',
    img: img2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit voluptate voluptatum perferendis vero earum repudiandae, possimus non rem ea minus dolore neque saepe laborum.',
  },
];

function renderColumns() {
  return columnData.map((column) => (
    <article
      className="max-md:flex max-md:flex-col items-center justify-center"
      key={column.id}
    >
      <figure className="my-6 object-contain md:col-span-2 max-w-lg min-w-[300px] border-4 border-white rounded-lg">
        <img className="rounded-lg" src={column.img} alt="Random Image" />
      </figure>
      <h3>{column.title}</h3>
      <p className="self-center">{column.description}</p>
    </article>
  ));
}

function GridSection() {
  return (
    <section className="bg-gray-300 p-3">
      <header className="text-3xl my-2 p-2 font-bold text-slate-500">
        Globe Roamer
      </header>
      <hr className="border-b-gray-500 border-b-2 border-solid my-3" />
      {/* Two column layout */}
      <section className=" grid md:grid-cols-3 justify-items-center items-center">
        <figure className="my-6 object-contain md:col-span-2 max-w-lg min-w-[300px] border-4 border-white rounded-lg">
          <img className="rounded-lg" src={img} alt="Random Image" />
        </figure>
        <article className="text-center">
          <h3>Balloon Magic</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            exercitationem alias facilis, blanditiis non est dolores quia
            dolorem eveniet nisi rem deserunt necessitatibus explicabo, quos
            quod rerum provident facere sed ipsam! Sint, animi id ducimus totam
            aspernatur iusto veniam maxime! Ullam nostrum illum laboriosam alias
            eius. A repellat sit nesciunt.
          </p>
        </article>
      </section>
      <hr className="border-b-gray-500 border-b-2 border-solid my-3" />
      {/* Three column layout */}

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderColumns()}
      </section>
    </section>
  );
}

export default GridSection;
