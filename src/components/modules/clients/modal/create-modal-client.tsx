"use client";

import { Form } from "@shadcn/ui/form";
import { Field } from "@ui/common/form/field";
import { useCreateModalClient } from "@ui/modules/clients/modal/create-modal-client.hook";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@shadcn/ui/carousel";
import { FieldInput } from "@ui/common/form/field-input";

export const CreateModalClient = () => {
  const { form, fields, onSubmit, step, getAddressSuggestions, setSearchAddress, setSelectedAddress, searchAddress, addressSuggestions, setApiCarousel } = useCreateModalClient();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-[50px]">
   
    <Carousel setApi={setApiCarousel} className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-[20px] max-h-[500px] overflow-y-auto transition-all py-[20px]">
                  {index === 1 && (
                    <>
                      <FieldInput 
                        field={{ 
                          label: "Adresse", 
                          value: searchAddress,
                          placeholder: "Rechercher une adresse...",
                          onInput: (e: any) => {
                            setSearchAddress(e.target.value);
                            getAddressSuggestions();
                          } 
                        }}
                      />
                      {addressSuggestions.map((suggestion, i) => (
                        <div key={i} className="bg-indigo-200 p-2 rounded-md cursor-pointer hover:bg-indigo-300" onClick={() => setSelectedAddress(suggestion)}>
                          {suggestion?.label}
                        </div>
                        ))}
                    </>
                  )}
                  {fields
                    .filter((field) => field.step === index + 1)
                    .map((field, idx) => (
                      <Field key={idx} type={field.type} fieldData={field} form={form} />
                    ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full justify-between items-center pt-[20px]">
            <CarouselPrevious  className="static translate-y-0" />
            <CarouselDots/>
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </form>
    </Form>
  );
};
