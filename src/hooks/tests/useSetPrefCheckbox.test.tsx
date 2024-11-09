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
			data: [
				{ code: 1, name: "Prefecture 1" },
				{ code: 2, name: "Prefecture 2" },
			],
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
								{
									year: 1975,
									value: 1468646,
								},
								{
									year: 1980,
									value: 1523907,
								},
								{
									year: 1985,
									value: 1524448,
								},
								{
									year: 1990,
									value: 1482873,
								},
								{
									year: 1995,
									value: 1481663,
								},
								{
									year: 2000,
									value: 1475728,
								},
								{
									year: 2005,
									value: 1436657,
								},
								{
									year: 2010,
									value: 1373339,
								},
								{
									year: 2015,
									value: 1308265,
								},
								{
									year: 2020,
									value: 1237984,
								},
								{
									year: 2025,
									value: 1157332,
								},
								{
									year: 2030,
									value: 1076393,
								},
								{
									year: 2035,
									value: 993737,
								},
								{
									year: 2040,
									value: 908974,
								},
								{
									year: 2045,
									value: 823610,
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
								{
									year: 1975,
									value: 380218,
									rate: 25.89,
								},
								{
									year: 1980,
									value: 366454,
									rate: 24.05,
								},
								{
									year: 1985,
									value: 338554,
									rate: 22.21,
								},
								{
									year: 1990,
									value: 289082,
									rate: 19.49,
								},
								{
									year: 1995,
									value: 252414,
									rate: 17.04,
								},
								{
									year: 2000,
									value: 223141,
									rate: 15.12,
								},
								{
									year: 2005,
									value: 198959,
									rate: 13.85,
								},
								{
									year: 2010,
									value: 171842,
									rate: 12.51,
								},
								{
									year: 2015,
									value: 148208,
									rate: 11.33,
								},
								{
									year: 2020,
									value: 129112,
									rate: 10.43,
								},
								{
									year: 2025,
									value: 114024,
									rate: 9.85,
								},
								{
									year: 2030,
									value: 100253,
									rate: 9.31,
								},
								{
									year: 2035,
									value: 87648,
									rate: 8.82,
								},
								{
									year: 2040,
									value: 77258,
									rate: 8.5,
								},
								{
									year: 2045,
									value: 67472,
									rate: 8.19,
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
								{
									year: 1975,
									value: 977541,
									rate: 66.56,
								},
								{
									year: 1980,
									value: 1022786,
									rate: 67.12,
								},
								{
									year: 1985,
									value: 1027329,
									rate: 67.39,
								},
								{
									year: 1990,
									value: 1000804,
									rate: 67.49,
								},
								{
									year: 1995,
									value: 991311,
									rate: 66.91,
								},
								{
									year: 2000,
									value: 964661,
									rate: 65.37,
								},
								{
									year: 2005,
									value: 910856,
									rate: 63.4,
								},
								{
									year: 2010,
									value: 843587,
									rate: 61.43,
								},
								{
									year: 2015,
									value: 757867,
									rate: 57.93,
								},
								{
									year: 2020,
									value: 676167,
									rate: 54.62,
								},
								{
									year: 2025,
									value: 618505,
									rate: 53.44,
								},
								{
									year: 2030,
									value: 555479,
									rate: 51.61,
								},
								{
									year: 2035,
									value: 494561,
									rate: 49.77,
								},
								{
									year: 2040,
									value: 428573,
									rate: 47.15,
								},
								{
									year: 2045,
									value: 370849,
									rate: 45.03,
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
								{
									year: 1975,
									value: 110752,
									rate: 7.54,
								},
								{
									year: 1980,
									value: 134516,
									rate: 8.83,
								},
								{
									year: 1985,
									value: 158547,
									rate: 10.4,
								},
								{
									year: 1990,
									value: 191776,
									rate: 12.93,
								},
								{
									year: 1995,
									value: 236745,
									rate: 15.98,
								},
								{
									year: 2000,
									value: 287099,
									rate: 19.45,
								},
								{
									year: 2005,
									value: 326562,
									rate: 22.73,
								},
								{
									year: 2010,
									value: 352768,
									rate: 25.69,
								},
								{
									year: 2015,
									value: 390940,
									rate: 29.88,
								},
								{
									year: 2020,
									value: 412943,
									rate: 33.36,
								},
								{
									year: 2025,
									value: 424803,
									rate: 36.71,
								},
								{
									year: 2030,
									value: 420661,
									rate: 39.08,
								},
								{
									year: 2035,
									value: 411528,
									rate: 41.41,
								},
								{
									year: 2040,
									value: 403143,
									rate: 44.35,
								},
								{
									year: 2045,
									value: 385289,
									rate: 46.78,
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
