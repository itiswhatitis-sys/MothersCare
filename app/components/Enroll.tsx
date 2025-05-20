// components/EnrollForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EnrollForm = () => {
  const [formData, setFormData] = useState({
    parentsname: "",
    studentname: "",
    phone: "",
    std: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.parentsname) newErrors.parentsname = "Parent's name is required.";
    if (!formData.studentname) newErrors.studentname = "Student's name is required.";
    if (!formData.phone || isNaN(Number(formData.phone))) newErrors.phone = "Valid phone number is required.";
    if (!formData.std) newErrors.std = "Class/Standard is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        alert("Error: " + err.error);
        return;
      }

      const result = await res.json();
      alert(result.message);
      setFormData({ parentsname: "", studentname: "", phone: "", std: "" });
      setErrors({});
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      <div>
        <Label htmlFor="parentsname">Parent's Name</Label>
        <Input
          id="parentsname"
          name="parentsname"
          value={formData.parentsname}
          onChange={handleChange}
        />
        {errors.parentsname && (
          <p className="text-sm text-red-500">{errors.parentsname}</p>
        )}
      </div>
      <div>
        <Label htmlFor="studentname">Student's Name</Label>
        <Input
          id="studentname"
          name="studentname"
          value={formData.studentname}
          onChange={handleChange}
        />
        {errors.studentname && (
          <p className="text-sm text-red-500">{errors.studentname}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <Label htmlFor="std">Class / Standard</Label>
        <Input id="std" name="std" value={formData.std} onChange={handleChange} />
        {errors.std && <p className="text-sm text-red-500">{errors.std}</p>}
      </div>
      <Button type="submit" className="w-full mt-4">
        Submit
      </Button>
    </form>
  );
};
