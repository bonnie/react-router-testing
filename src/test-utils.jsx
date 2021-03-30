import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// MemoryRouter wrapper that includes initialRoutes
const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
  return <MemoryRouter initialEntries={initialRoutes}>{children}</MemoryRouter>;
};

// create a customRender that wraps the UI in a memory Router
// initialEntries array can be specified in options object
const customRender = (ui, options) => {
  const initialRoutes =
    options && options.initialRoutes ? options.initialRoutes : ["/"];
  return render(ui, {
    wrapper: (args) =>
      MemoryRouterWithInitialRoutes({
        ...args,
        initialRoutes,
      }),
    ...options,
  });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
