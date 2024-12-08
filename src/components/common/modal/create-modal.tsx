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
  import { Add } from "iconsax-react"
import { Button } from "../buttons/button";
  
  export const CreateModal = ({ type, formFields }: { type: string; formFields: React.ReactNode }) => {

    return (
      <Dialog>
        <DialogTrigger asChild>
          <span>
              <Button text="Ajouter un client" Icon={Add} isLink={false} iconColor={"#0090FF"} className="bg-primary-background" textClassName="text-primary-foreground"/>
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

