"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@shadcn/lib/utils";
import { Button } from "@shadcn/ui/button";
import { Calendar } from "@shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shadcn/ui/popover";

interface DatePickerProps {
  field: any; // Field object from React Hook Form
  placeholder?: string; // Optional placeholder text
}

export const DatePicker: React.FC<DatePickerProps> = ({ field, placeholder = "Pick a date" }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !field.value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {field.value ? format(new Date(field.value), "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={field.value ? new Date(field.value) : undefined}
          onSelect={(date) => field.onChange(date?.toISOString())} // Save the date in ISO format
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
