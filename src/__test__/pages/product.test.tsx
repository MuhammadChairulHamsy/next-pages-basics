import ProductPage from "@/pages/product";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";


jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                route: "/product",
                pathname: "",
                query: "",
                asPath: "",
                push: jest.fn(),
                events: {
                    on: jest.fn(),
                    of: jest.fn(),
                },
                beforePopState: jest.fn(() => null),
                prefetch: jest.fn(() => null),
                isReady: true
            }
        }
    }
})

describe("Product Page", () => {
    it("render product page", () => {
        const page = render(<ProductPage />);
        expect(page).toMatchSnapshot();
    });
});
