export interface Video{
    id: string,
    title: string,
    publicId: string,
    description: string,
    originalSize: string,
    compressedSize: string,
    duration: number,
    createdAt: Date,
    updatedAt: Date
}