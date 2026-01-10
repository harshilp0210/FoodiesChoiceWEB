"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "react-day-picker/dist/style.css";

// Custom styles for react-day-picker to match the theme
const css = `
  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #ea580c; /* orange-600 */
    --rdp-background-color: #1e293b; /* slate-800 */
    margin: 0;
  }
  .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) {
    background-color: var(--rdp-accent-color);
    color: white;
  }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #334155; /* slate-700 */
    color: white;
  }
  .rdp-day_today {
    font-weight: bold;
    color: #ea580c;
  }
  .rdp-day_disabled {
    opacity: 0.25;
  }
  .rdp-caption_label {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
  .rdp-nav_button {
    color: #94a3b8; /* slate-400 */
  }
  .rdp-nav_button:hover {
    color: white;
  }
  .rdp-head_cell {
    color: #94a3b8;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .rdp-day {
    color: #e2e8f0; /* slate-200 */
  }
`;

interface DatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    className?: string;
    required?: boolean;
}

export function DatePicker({ date, setDate, className, required }: DatePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Close on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative", className)} ref={containerRef}>
            <style>{css}</style>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full bg-white/5 border rounded-lg px-4 py-3 text-left flex items-center gap-3 transition-colors",
                    "focus:outline-none focus:border-orange-500",
                    isOpen ? "border-orange-500 ring-1 ring-orange-500/20" : "border-white/10",
                    !date && "text-slate-400",
                    date && "text-white"
                )}
            >
                <CalendarIcon className={cn("w-4 h-4", date ? "text-orange-500" : "text-slate-400")} />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 mt-2 p-4 bg-slate-900 border border-white/10 rounded-xl shadow-2xl shadow-black"
                    >
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={handleSelect}
                            fromDate={new Date()} // Disable past dates
                            showOutsideDays
                            fixedWeeks
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hidden input for form data */}
            <input
                type="hidden"
                name="date"
                value={date ? format(date, "yyyy-MM-dd") : ""}
                required={required}
            />
        </div>
    );
}
