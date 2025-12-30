import { HERO } from "@/constants/content";
import { ToggleThemeButton } from "../use-case/ToggleThemeButton";

const HeaderNav = () => {
  return (
    <header className="sticky top-0 z-30 transition-all hover:bg-background/100 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {HERO.name}
        </a>
        <div className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
          <a className="transition-colors hover:text-foreground" href="#home">
            Home
          </a>
          <a className="transition-colors hover:text-foreground" href="#projects">
            Projects
          </a>
          <a className="transition-colors hover:text-foreground" href="#contact">
            Contact
          </a>
          <ToggleThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
