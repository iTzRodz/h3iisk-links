import h3iiskImage from "/src/assets/h3iisk-img.jpg";
import "./App.css";
import { TwitchIcon } from "./assets/icons/twitch";
import { YoutubeIcon } from "./assets/icons/youtube";
import { InstagramIcon } from "./assets/icons/instagram";
import { MailIcon } from "./assets/icons/mail";

function App() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 antialiased font-sans">
      <section className="flex flex-col items-center justify-center p-6 bg-white rounded-4xl shadow-lg w-full max-w-[768px]">
        <div className="flex items-center justify-center gap-4 flex-col">
          <div className="size-36 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300">
            <img src={h3iiskImage} className="rounded-full" alt="H3iisk logo" />
          </div>
          <div className="flex items-center justify-center flex-col gap-2 text-center">
            <h1 className="text-xl font-bold text-black">@H3iisk</h1>
            <p className="font-medium text-gray-600 leading-5">
              Um menino do interior de São Paulo que tenta entreter uma
              galerinha com uma gameplay totalmente duvidosa mas com muito
              entretenimento garantido!{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 w-full max-w-md flex-col">
          <a
            href="https://www.twitch.tv/h3iisk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full flex items-center justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300"
          >
            <TwitchIcon />
            <span className="w-full font-semibold text-gray-800 text-center">
              Twitch
            </span>
          </a>
          <a
            href="https://www.youtube.com/@heiisk1142"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300"
          >
            <YoutubeIcon />
            <span className="font-semibold text-gray-800 text-center w-full">
              Youtube
            </span>
          </a>
          <a
            href="https://www.instagram.com/joao_gatuzo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300"
          >
            <InstagramIcon />
            <span className="font-semibold text-gray-800 text-center w-full">
              Instagram
            </span>
          </a>
          <a
            href="https://www.instagram.com/phantomlab.oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center decoration-0 bg-gray-100 rounded-2xl py-3 px-4 shadow-lg w-full justify-start hover:bg-gray-200 transition-colors cursor-pointer gap-2 border border-gray-300"
          >
            {/* <InstagramIcon /> */}
            <span className="font-semibold text-gray-800 text-center w-full">
              PhantomLab
            </span>
          </a>
        </div>

        <div className="">
          <div className="mt-6 text-gray-600 text-sm text-center flex gap-2 items-center">
            <a href="mailto:heiiskgamer@gmail.com" className="flex items-center gap-2 hover:text-gray-800 transition-colors">
              {" "}
              <MailIcon /> heiiskgamer@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
