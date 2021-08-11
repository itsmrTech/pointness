/* --- STATE --- */
export interface HomePageState {
  items: Array<{
    title: string;
    id: string;
    parentid: string;
  }>;
}
