"use client";

import * as React from "react";
import { Upload, X, File, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  label?: string;
  accept?: string;
  maxSize?: number; // in MB
  maxFiles?: number;
  onChange?: (files: File[]) => void;
  className?: string;
}

export function FileUpload({
  label = "Upload Files",
  accept = ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png",
  maxSize = 10,
  maxFiles = 3,
  onChange,
  className,
}: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [dragActive, setDragActive] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    const validFiles: File[] = [];
    const errors: string[] = [];

    fileArray.forEach((file) => {
      if (files.length >= maxFiles) {
        errors.push(`Maximum ${maxFiles} files allowed`);
        return;
      }

      if (file.size > maxSize * 1024 * 1024) {
        errors.push(`${file.name} exceeds ${maxSize}MB limit`);
        return;
      }

      validFiles.push(file);
    });

    if (errors.length > 0) {
      // You can show toast notifications here
      console.error(errors);
    }

    const updatedFiles = [...files, ...validFiles].slice(0, maxFiles);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className={cn("space-y-3", className)}>
      <label className="block text-sm font-medium text-foreground">
        {label} <span className="text-muted-foreground text-xs">(Optional)</span>
      </label>
      
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 transition-all duration-200",
          dragActive
            ? "border-primary bg-primary/5"
            : "border-input hover:border-primary/50 bg-muted/30"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={maxFiles > 1}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
        
        <div className="text-center">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-foreground mb-1">
            Drag and drop files here, or{" "}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-primary hover:text-primary-hover font-medium underline"
            >
              browse
            </button>
          </p>
          <p className="text-xs text-muted-foreground">
            {accept.split(",").join(", ")} (Max {maxSize}MB per file, {maxFiles} files max)
          </p>
        </div>
      </div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            {files.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border"
              >
                <File className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="p-1 hover:bg-error/10 rounded transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="h-4 w-4 text-error" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

