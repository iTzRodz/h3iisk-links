import h3iiskImage from "/h3iisk-img.jpg";
import { TwitchIcon } from "./assets/icons/twitch";
import { YoutubeIcon } from "./assets/icons/youtube";
import { InstagramIcon } from "./assets/icons/instagram";
import { MailIcon } from "./assets/icons/mail";

function App() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 antialiased font-sans dark:bg-gray-900">
      <section
        className="flex flex-col items-center justify-center p-6 bg-white rounded-4xl shadow-lg w-full max-w-[768px] dark:bg-gray-800"
        aria-label="Links do H3iisk"
      >
        <header className="flex items-center justify-center gap-4 flex-col">
          <div className="size-36 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300 dark:bg-gray-700 dark:border-gray-600">
            <img
              src={h3iiskImage}
              className="rounded-full"
              alt="Foto de perfil do H3iisk, streamer brasileiro de games"
              loading="eager"
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-2 text-center">
            <h1 className="text-xl font-bold text-black dark:text-white">
              @H3iisk
            </h1>
            <p className="font-medium text-gray-600 leading-5 dark:text-gray-300">
              Um menino do interior de São Paulo que tenta entreter uma
              galerinha com uma gameplay totalmente duvidosa mas com muito
              entretenimento garantido!{" "}
            </p>
          </div>
        </header>

        <nav
          className="flex items-center justify-center gap-4 mt-6 w-full max-w-md flex-col"
          aria-label="Redes sociais do H3iisk"
        >
          <a
            href="https://www.twitch.tv/h3iisk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full flex items-center justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            aria-label="Visite o canal do H3iisk na Twitch"
          >
            <span className="dark:text-white">
              <TwitchIcon />
            </span>
            <span className="w-full font-semibold text-gray-800 text-center dark:text-white">
              Twitch
            </span>
          </a>
          <a
            href="https://www.youtube.com/@heiisk1142"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            aria-label="Visite o canal do H3iisk no YouTube"
          >
            <span className="dark:text-white">
              <YoutubeIcon />
            </span>
            <span className="font-semibold text-gray-800 text-center w-full dark:text-white">
              Youtube
            </span>
          </a>
          <a
            href="https://www.instagram.com/joao_gatuzo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            aria-label="Visite o perfil pessoal do H3iisk no Instagram"
          >
            <span className="dark:text-white">
              <InstagramIcon />
            </span>
            <span className="font-semibold text-gray-800 text-center w-full dark:text-white">
              Instagram
            </span>
          </a>
          <a
            href="https://www.instagram.com/phantomlab.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            aria-label="Visite o perfil da PhantomLab no Instagram"
          >
            <img
              src="/phantom-lab-logo.png"
              alt="PhantomLab logo"
              className="w-6 h-6 rounded"
            />
            <span className="font-semibold text-gray-800 text-center w-full dark:text-white">
              PhantomLab
            </span>
          </a>
          <a
            href="https://www.instagram.com/dirtcloathing/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
            aria-label="Visite o perfil da Dirt Clothing no Instagram"
          >
            <img
              src="/dirt-logo.png"
              alt="Dirt logo"
              className="w-6 h-6 rounded"
            />
            <span className="font-semibold text-gray-800 text-center w-full dark:text-white">
              Dirt
            </span>
          </a>
        </nav>

        <footer className="">
          <div className="mt-6 text-gray-600 text-sm text-center flex gap-2 items-center">
            <a
              href="mailto:heiiskgamer@gmail.com"
              className="flex items-center gap-2 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-white"
              aria-label="Enviar email para heiiskgamer@gmail.com"
            >
              {" "}
              <MailIcon /> heiiskgamer@gmail.com
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default App;
