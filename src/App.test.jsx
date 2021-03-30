import { render, screen, fireEvent } from "./test-utils";
import App from "./App";

test("renders berkeley location page by inital route", () => {
  render(<App />, { initialRoutes: ["/locations/berkeley"] });

  const berkeleyHeader = screen.getByRole("heading", { name: /berkeley/i });
  expect(berkeleyHeader).toBeInTheDocument();
});
