import "@/styles/app.css";
import {Button} from "./components/ui/button";
import {Icon} from "@iconify/react";
import {canvaLink} from "@/constants/links";
function App() {
  return (
    <section className="w-full h-full flex items-center justify-center min-h-screen">
      <div className="flex gap-4 flex-col">
        <Button variant="outline">
          <a
            href={canvaLink}
            className="flex gap-2  items-center w-52"
            target="_blank"
          >
            <Icon
              icon="simple-icons:canva"
              className="w-7 h-7"
            />
            <span className="flex-grow text-left">To Canva</span>
            <Icon
              icon="solar:arrow-right-up-outline"
              className="flex-shrink"
            />
          </a>
        </Button>
        <Button
          variant="outline"
          className="flex gap-2"
        >
          <a
            href="/ta03-expo.pdf"
            className="flex  gap-2  items-center w-52 "
            target="_blank"
          >
            <Icon
              icon="streamline:convert-pdf-2-solid"
              className="w-7 h-7"
            />
            <span className="flex-grow text-left">To PDf</span>
            <Icon
              icon="solar:arrow-right-up-outline"
              className="flex-shrink"
            />
          </a>
        </Button>
      </div>
    </section>
  );
}

export default App;
