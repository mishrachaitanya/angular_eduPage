export interface IApiResponse{
    "message":string,
  "result": boolean,
  "data": any,
}
export interface Icourse{
    courseId: number,
    courseName: string,
    createdDate: string,
    totalHours : string,
    totalVideos: number,
    courseDescription: string,
    thumbnailUrl: string,
}