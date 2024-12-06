"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@shadcn/ui/dialog";
  import { Button } from "@shadcn/ui/button";
  import { Add } from "iconsax-react"
import { ButtonIcon } from "@ui/common/buttons/button-icon"
  
  export const CreateModal = ({ type, formFields }: { type: string; formFields: React.ReactNode }) => {

    return (
      <Dialog>
        <DialogTrigger asChild>
            <span>
                <ButtonIcon Icon={Add} isLink={false} iconColor={"#0090FF"} className="bg-primary-light"/>
            </span>
        </DialogTrigger>
        <DialogContent className="back bg-card">
            <DialogHeader>
                <DialogTitle>Créer un {type} </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center px-[2px] w-full">
                {formFields}
            </div>
        </DialogContent>
      </Dialog>
    );
  };

