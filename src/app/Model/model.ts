export interface ItemData {
  id?: number;
  name: string;
  lastName: string;
  PhoneNumber: string;
}
export interface SocietyData {
  id: number;
  name: string;
  address: string
}
export interface ReportsList  {
  id: number;
  society_Name: string;
  developer_Name: string;
}
export interface Announce {
  id: number;
  society_Name: string;
  title: string;
  type: string;
}
