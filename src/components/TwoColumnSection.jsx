import cardImg from '../assets/images/card.png';

function TwoColumnSection() {
  return (
    <section className="grid gap-8 w-full md:grid-cols-2 md:w-3/4 mx-auto items-center md:gap-16 m-4">
      <figure className="mx-4 min-w-[300px]">
        <img src={cardImg} alt="Gift Image" />
      </figure>
      <article className="mx-4 max-sm:text-center">
        <h3 className="font-bold text-2xl mb-2">Gift Cards</h3>
        <p className="font-bold mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          sequi, placeat veniam quam distinctio quaerat hic illo quas ex
          laudantium accusantium aliquam reiciendis sint necessitatibus a ipsam
          deserunt laboriosam dolores!
        </p>
        <p className="font-semibold mb-3">
          Already have an Orange MyTunes Music Gift Card?
        </p>
        <button className="bg-navColor my-4 text-white p-2 px-4 md:px-6 rounded-sm transition-all hover:-translate-y-1 hover:bg-footerColor">
          Redeem
        </button>
      </article>
    </section>
  );
}

export default TwoColumnSection;
