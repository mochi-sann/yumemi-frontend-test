import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "jotai";
import { Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { $api, fetchClient } from "../../lib/api/FetchClient";
import { useSetPrefCheckbox } from "../useSetPrefCheckbox";

// Mock API client and response
vi.mock("../../lib/api/FetchClient", () => ({
	$api: {
		useQuery: vi.fn() as Mock,
	},
	fetchClient: {
		GET: vi.fn() as Mock,
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
			data: {
				message: null,
				result: [
					{
						prefCode: 1,
						prefName: "北海道",
					},
					{
						prefCode: 2,
						prefName: "青森県",
					},
					{
						prefCode: 3,
						prefName: "岩手県",
					},
				],
			},
			isLoading: false,
			error: null,
		});
		(fetchClient.GET as Mock).mockReturnValue({
			data: {
				message: null,
				result: {
					boundaryYear: 2020,
					data: [
						{
							label: "総人口",
							data: [
								{
									year: 1960,
									value: 1426606,
								},
								{
									year: 1965,
									value: 1416591,
								},
								{
									year: 1970,
									value: 1427520,
								},
							],
						},
						{
							label: "年少人口",
							data: [
								{
									year: 1960,
									value: 513397,
									rate: 35.99,
								},
								{
									year: 1965,
									value: 447068,
									rate: 31.56,
								},
								{
									year: 1970,
									value: 396883,
									rate: 27.8,
								},
							],
						},
						{
							label: "生産年齢人口",
							data: [
								{
									year: 1960,
									value: 848838,
									rate: 59.5,
								},
								{
									year: 1965,
									value: 894521,
									rate: 63.15,
								},
								{
									year: 1970,
									value: 940235,
									rate: 65.86,
								},
							],
						},
						{
							label: "老年人口",
							data: [
								{
									year: 1960,
									value: 64371,
									rate: 4.51,
								},
								{
									year: 1965,
									value: 75002,
									rate: 5.29,
								},
								{
									year: 1970,
									value: 90402,
									rate: 6.33,
								},
							],
						},
					],
				},
			},
			response: {},
		});
	});

	it("initially loads query data and checks that checkedList is empty", () => {
		const { result } = renderHook(() => useSetPrefCheckbox(), { wrapper });

		// Check the initial state
		expect(result.current.query.data?.result).toEqual([
			{
				prefCode: 1,
				prefName: "北海道",
			},
			{
				prefCode: 2,
				prefName: "青森県",
			},
			{
				prefCode: 3,
				prefName: "岩手県",
			},
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
			result.current.addChecked(1);
			result.current.addChecked(2);
			result.current.addChecked(3);
		});

		expect(result.current.checkedList.sort()).toEqual([1, 2, 3]);
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
