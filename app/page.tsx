import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-12">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Website kreasof.my.id masih dikerjain nih, soon akan segera hadir 👍
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://chavyv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Chavyv Akvar
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/kreasof.png"
          alt="Next.js Logo"
          width={360}
          height={80}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-y-4">
        <a
          href="https://www.youtube.com/@KreasofAI"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 dark:lg:border-transparent dark:lg:bg-transparent hover:dark:lg:border-neutral-700 hover:dark:lg:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            YouTube{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Update konten terbaru selalu tersedia di YouTube kita 🤗
          </p>
        </a>

        <a
          href="https://www.instagram.com/kreasof.ai/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 dark:lg:border-transparent dark:lg:bg-transparent hover:dark:lg:border-neutral-700 hover:dark:lg:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Instagram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Boleh dong follow kita di Instagram 😗
          </p>
        </a>

        <a
          href="https://www.tiktok.com/@kreasof.ai"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 dark:lg:border-transparent dark:lg:bg-transparent hover:dark:lg:border-neutral-700 hover:dark:lg:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            TikTok{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Follow kami di TikTok, masih sepi nih 😅
          </p>
        </a>

        <a
          href="https://chavyv.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 dark:lg:border-transparent dark:lg:bg-transparent hover:dark:lg:border-neutral-700 hover:dark:lg:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Website Founder{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Penasaran dengan profil dari founder Kreasof AI?
          </p>
        </a>
      </div>
    </main>
  );
}
