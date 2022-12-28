import { createSignal } from "solid-js";

export function Hamburger() {
  const [open, setOpen] = createSignal(false);

  const width = 36;
  const height = 24;
  const middle = height / 2;

  function toggleMenu() {
    setOpen(!open());
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        class={`group ${open() ? "menu-open" : ""}`}
        aria-label="Menu öffnen"
        aria-haspopup="true"
      >
        <div class="hamburger-icon relative w-[36px] h-[24px] flex flex-col justify-center">
          <div class="absolute top-0 h-[4px] w-full bg-lambdaDarkBlue duration-[400ms] group-[.menu-open]:rotate-[40deg] group-[.menu-open]:translate-y-[10px] ease-[cubic-bezier(.6,.1,.5,1.8)]"></div>
          <div class="h-[4px] w-full bg-lambdaDarkBlue group-[.menu-open]:opacity-0 duration-300"></div>
          <div class="absolute bottom-0 h-[4px] w-full bg-lambdaDarkBlue duration-[400ms] group-[.menu-open]:rotate-[-40deg] group-[.menu-open]:-translate-y-[10px] ease-[cubic-bezier(.6,.1,.5,1.8)]"></div>
        </div>
      </button>
    </>
  );
}
