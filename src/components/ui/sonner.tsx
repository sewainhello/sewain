"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "w-full p-4 flex items-center gap-3 rounded-md border-2 border-foreground bg-background text-foreground",
          success: "!bg-success !text-success-foreground",
          error: "!bg-destructive !text-destructive-foreground",
          warning: "!bg-warning !text-warning-foreground",
          info: "!bg-info !text-info-foreground",
          title: "font-semibold",
          description: "text-sm opacity-80",
          closeButton:
            "!bg-transparent !border !border-current hover:!bg-muted",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
