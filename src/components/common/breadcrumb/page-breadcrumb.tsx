"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ui/shadcn/ui/breadcrumb";

const breadcrumbMap: Record<string, { title?: string; href?: string }> = {
  home: { title: "Home", href: "/"},
  leads: { title: "Leads" },
};

export const PageBreadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const config = breadcrumbMap[segment]; 
          
          const title =
            config?.title ||
            segment
              .replace(/-/g, " ")
              .charAt(0)
              .toUpperCase() + segment.slice(1);

          let href = config?.href !== undefined || config?.href == "/" ? config.href : undefined;
          href = !isLast && (href || !config) ? `/${segments.slice(0, index + 1).join("/")}` : undefined;

          return (
            <BreadcrumbItem key={segment}>
              {href ? (
                <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{title}</BreadcrumbPage>
              )}
              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
