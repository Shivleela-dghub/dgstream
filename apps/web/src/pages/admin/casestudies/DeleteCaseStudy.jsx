import { useState } from "react";
import { toast } from "sonner";
import apiServerClient from "@/lib/apiServerClient.js";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"; // shadcn-style Radix AlertDialog — matches your installed @radix-ui/react-alert-dialog
import { Trash2 } from "lucide-react";

// Drop this inline wherever you currently render a delete button per row.
// Usage: <DeleteCaseStudyButton study={study} onDeleted={handleDeleted} />
export function DeleteCaseStudyButton({ study, onDeleted }) {
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleConfirmDelete = async () => {
    setDeleting(true);
    try {
      await apiServerClient.delete(`/casestudies/${study._id}`);
      onDeleted(study._id);
      toast.success(`"${study.title}" deleted`, {
        description: "The case study and its PDF have been removed.",
      });
    } catch (err) {
      toast.error("Failed to delete case study", {
        description: err?.response?.data?.error || "Please try again.",
      });
    } finally {
      setDeleting(false);
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 font-medium"
        >
          <Trash2 size={14} /> Delete
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete "{study.title}"?</AlertDialogTitle>
          <AlertDialogDescription>
            This permanently removes the case study and its PDF file. This action can't be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirmDelete}
            disabled={deleting}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            {deleting ? "Deleting…" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}