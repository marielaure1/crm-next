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

// Configuration spéciale pour certains segments
const breadcrumbMap: Record<string, { title?: string; href?: string }> = {
  leads: { title: "Leads" },
};

export const PageBreadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter((segment) => segment); // Diviser le chemin
console.log(segments);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1; // Dernier segment
          const config = breadcrumbMap[segment]; // Vérifiez si ce segment a une configuration spécifique
          console.log(segment);
          console.log(config);
          
          // Déterminer le titre du segment
          const title =
            config?.title ||
            segment
              .replace(/-/g, " ") // Remplace les tirets par des espaces
              .charAt(0)
              .toUpperCase() + segment.slice(1);

          // Déterminer si le segment est cliquable
          let href = config?.href !== undefined ? config.href : undefined;
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
