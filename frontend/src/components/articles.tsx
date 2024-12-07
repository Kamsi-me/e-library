type Post = {
  title: string;
  description: string;
  author: string;
  date: string;
  imgSrc: string;
};

const posts: Post[] = [
  {
    title: "10 tips for becoming a better developer",
    description:
      "Discover essential tips to improve your programming skills and stay ahead in the tech world.",
    author: "Jane Doe",
    date: "March 3, 2023",
    imgSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Crafting user experiences that shine",
    description:
      "Learn how to create designs that captivate users and leave a lasting impression.",
    author: "Emily Clark",
    date: "March 15, 2023",
    imgSrc:
      "https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
  },
  {
    title: "The future of AI in everyday life",
    description:
      "Explore how artificial intelligence is transforming our world, one step at a time.",
    author: "Alex Brown",
    date: "March 25, 2023",
    imgSrc:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
];

export default function Articles() {
  return (
    <section className="bg-white mt-8 mb-4 md:mb-10 md:mt-20 ">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl">
            Popular Articles
          </h1>

          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600 transition-colors duration-300 transform hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3 mt-6 md:mt-8">
          {posts.map((post, index) => (
            <div key={index}>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={post.imgSrc}
                alt={post.title}
              />
              <div className="mt-8">
                <h1 className="mt-4 text-xl font-semibold text-gray-800">
                  {post.title}
                </h1>
                <p className="mt-2 text-gray-500">{post.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:underline hover:text-gray-500"
                    >
                      {post.author}
                    </a>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
