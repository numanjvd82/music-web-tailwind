const footerLinks = [
  {
    id: 1,
    title: 'Shop & Learn',
    links: ['Music', 'Gift Cards', 'Mobile Apps', 'Education'],
  },
  {
    id: 2,
    title: 'Services',
    links: [
      'MyTunes Music',
      'MyTunes Music for Business',
      'MyTunes Music for Education',
    ],
  },
  {
    id: 3,
    title: 'Account',
    links: [
      'Account Settings',
      'Redeem Gift Card',
      'MyTunes Music for Education',
    ],
  },
  {
    id: 4,
    title: 'Connect',
    links: ['Facebook', 'Twitter', 'Instagram'],
  },
];

const showFooterColumns = () => {
  return footerLinks.map((column) => {
    return (
      <article
        className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col"
        key={column.id}
      >
        <h2 className="text-xl md:text-2xl border-b pb-2 inline-block">
          {column.title}
        </h2>
        <ul className="mt-2 max-sm:text-center">
          {column.links.map((link) => (
            <li className="text-slate-300 cursor-pointer transition-colors hover:text-slate-500">
              {link}
            </li>
          ))}
        </ul>
      </article>
    );
  });
};

function Footer() {
  return (
    <footer className="bg-footerColor text-white mt-28 p-6 pb-0 px-0 w-full">
      <section className="w-full px-3 md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 sm:justify-center sm:items-center md:grid-cols-4  justify-center gap-10">
        {showFooterColumns()}
      </section>
      <div className="bg-navColor h-15 mt-4 p-3 text-center md:text-lg font-semibold">
        Copyright 2021 MyTunes Music. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
