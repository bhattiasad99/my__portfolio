import { DATA } from "@/constants/content";
import { ToggleThemeButton } from "../use-case/ToggleThemeButton";
import LinkComponent from "../common/LinkComponent";

const HeaderNav = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg transition-all hover:bg-background/100">
      <nav className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 sm:py-5">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {DATA.name}
        </a>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60 sm:gap-6 sm:text-sm sm:tracking-[0.2em]">
          <LinkComponent to="/" className="transition-colors hover:text-foreground">
            Home
          </LinkComponent>
          <LinkComponent to="/projects" className="transition-colors hover:text-foreground">
            Projects
          </LinkComponent>
          <LinkComponent to="https://buildwithbhatti.hashnode.dev/" className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
            My Blog
          </LinkComponent>
          <ToggleThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
