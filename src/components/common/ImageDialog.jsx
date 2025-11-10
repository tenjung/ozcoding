// ImageDialog.jsx

import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui";

function addCommas(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ImageDialog({ images }) {
  return (
    <section className="w-full grid grid-cols-6 gap-6 mt-4 px-20">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger>
            <div className="w-full flex flex-col gap-2 cursor-pointer">
              <img src={image.urls.regular} alt="@THUMBNAIL" className="w-full aspect-square rounded-sm object-cover" />
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={image.user.profile_image.large} alt="@PROFILE_IMAGE" className="w-7 h-7 rounded-full" />
                  <p className="text-sm">{image.user.username}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart size={16} className="text-red-400" fill="#f87171" />
                    <p className="text-sm">{addCommas(image.likes)}</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{image.user.username}님의 작품</DialogTitle>
              <DialogDescription>
                <img src={image.urls.regular} alt="@THUMBNAIL" className="w-full aspect-square rounded-md mb-4 object-cover" />
                <div className="flex items-center gap-3 mt-2">
                  <img src={image.user.profile_image.large} alt="@PROFILE_IMAGE" className="w-8 h-8 rounded-full" />
                  <span className="font-semibold">{image.user.username}</span>
                  <div className="flex items-center gap-1">
                    <Heart size={16} className="text-red-400" fill="#f87171" />
                    <span className="text-red-400">{addCommas(image.likes)}</span>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}

export { ImageDialog };
