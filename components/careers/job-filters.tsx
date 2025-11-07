"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { JobDepartment } from "@/data/types";

interface JobFiltersProps {
  departments: JobDepartment[];
  selectedDepartment: string;
  selectedType: string;
  selectedExperience: string;
  searchQuery: string;
  onDepartmentChange: (department: string) => void;
  onTypeChange: (type: string) => void;
  onExperienceChange: (experience: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const jobTypes = [
  { id: "all", name: "All Types" },
  { id: "full-time", name: "Full-Time" },
  { id: "part-time", name: "Part-Time" },
  { id: "contract", name: "Contract" },
  { id: "internship", name: "Internship" },
  { id: "remote", name: "Remote" },
];

const experienceLevels = [
  { id: "all", name: "All Levels" },
  { id: "entry", name: "Entry Level" },
  { id: "mid", name: "Mid Level" },
  { id: "senior", name: "Senior" },
  { id: "lead", name: "Lead" },
];

export function JobFilters({
  departments,
  selectedDepartment,
  selectedType,
  selectedExperience,
  searchQuery,
  onDepartmentChange,
  onTypeChange,
  onExperienceChange,
  onSearchChange,
  onClearFilters,
}: JobFiltersProps) {
  const hasActiveFilters =
    selectedDepartment !== "all" ||
    selectedType !== "all" ||
    selectedExperience !== "all" ||
    searchQuery.length > 0;

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Departments */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Department</h3>
        <div className="space-y-2">
          <Button
            variant={selectedDepartment === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onDepartmentChange("all")}
            className="w-full justify-start text-xs"
          >
            All Departments
          </Button>
          {departments.map((department) => (
            <Button
              key={department.id}
              variant={selectedDepartment === department.id ? "default" : "outline"}
              size="sm"
              onClick={() => onDepartmentChange(department.id)}
              className="w-full justify-start text-xs"
            >
              {department.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <Button
              key={type.id}
              variant={selectedType === type.id ? "default" : "outline"}
              size="sm"
              onClick={() => onTypeChange(type.id)}
              className="w-full justify-start text-xs capitalize"
            >
              {type.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Experience</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <Button
              key={level.id}
              variant={selectedExperience === level.id ? "default" : "outline"}
              size="sm"
              onClick={() => onExperienceChange(level.id)}
              className="w-full justify-start text-xs"
            >
              {level.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="w-full"
        >
          Clear all filters
        </Button>
      )}
    </div>
  );
}

