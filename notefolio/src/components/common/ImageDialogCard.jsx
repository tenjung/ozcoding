import { Heart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui";

function addCommas(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ImageDialogCard() {
  return;
}

export { ImageDialogCard };
