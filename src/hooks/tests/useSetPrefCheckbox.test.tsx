import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "jotai";
import { Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { $api } from "../../lib/api/FetchClient";
import { useSetPrefCheckbox } from "../useSetPrefCheckbox";

// Mock API client and response
vi.mock("../../lib/api/FetchClient", () => ({
	$api: {
		useQuery: vi.fn() as Mock,
	},
}));

describe("useSetPrefCheckbox", () => {
	const queryClient = new QueryClient();
	const wrapper = ({ children }: { children: React.ReactNode }) => (
		<Provider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	);

	beforeEach(() => {
		// Mock the useQuery function to return some dummy data
		vi.resetAllMocks();
		($api.useQuery as Mock).mockReturnValue({
			data: [
				{ code: 1, name: "Prefecture 1" },
				{ code: 2, name: "Prefecture 2" },
			],
			isLoading: false,
			error: null,
		});
	});

	it("initially loads query data and checks that checkedList is empty", () => {
		const { result } = renderHook(() => useSetPrefCheckbox(), { wrapper });

		// Check the initial state
		expect(result.current.query.data).toEqual([
			{ code: 1, name: "Prefecture 1" },
			{ code: 2, name: "Prefecture 2" },
		]);
		expect(result.current.checkedList).toEqual([]);
	});

	it("adds a prefCode to the checkedList", () => {
		const { result } = renderHook(() => useSetPrefCheckbox(), { wrapper });

		act(() => {
			result.current.addChecked(3);
		});

		expect(result.current.checkedList).toEqual([3]);
	});
	it("adds a prefCode to the checkedList", () => {
		const { result } = renderHook(() => useSetPrefCheckbox(), { wrapper });

		act(() => {
			result.current.addChecked(3);
			result.current.addChecked(4);
			result.current.addChecked(5);
		});

		expect(result.current.checkedList.sort()).toEqual([3, 4, 5]);
	});

	it("deletes a prefCode from the checkedList", () => {
		const { result } = renderHook(() => useSetPrefCheckbox(), { wrapper });

		// Add a code first
		act(() => {
			result.current.addChecked(3);
		});
		expect(result.current.checkedList).toEqual([3]);

		// Then delete it
		act(() => {
			result.current.deleteChecked(3);
		});
		expect(result.current.checkedList).toEqual([]);
	});

	it("does not add duplicate prefCodes to the checkedList", () => {
		const { result } = renderHook(() => useSetPrefCheckbox(), { wrapper });

		act(() => {
			result.current.addChecked(3);
			result.current.addChecked(3);
		});

		expect(result.current.checkedList).toEqual([3]); // only one entry
	});
});
