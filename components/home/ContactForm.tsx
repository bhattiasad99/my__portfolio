"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import FormField from "@/components/ui/FormField";
import InquiryTabs from "@/components/home/InquiryTabs";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send inquiry"}
    </button>
  );
};

const ContactForm = () => {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-[2rem] border border-border bg-card/80 p-5 shadow-xl backdrop-blur-md sm:p-6 md:p-8"
    >
      <FormField label="Your Name">
        <input
          type="text"
          name="name"
          required
          placeholder="Full name"
          className="w-full rounded-2xl border border-input bg-muted px-4 py-3 text-sm text-foreground shadow-inner focus:border-ring focus:outline-none"
        />
      </FormField>
      <FormField label="Email Address">
        <input
          type="email"
          name="email"
          required
          placeholder="hello@example.com"
          className="w-full rounded-2xl border border-input bg-muted px-4 py-3 text-sm text-foreground shadow-inner focus:border-ring focus:outline-none"
        />
      </FormField>
      <InquiryTabs name="inquiry" />
      <FormField label="Project Notes">
        <textarea
          rows={4}
          name="notes"
          required
          placeholder="Tell me about your goals, timeline, and budget range."
          className="w-full rounded-2xl border border-input bg-muted px-4 py-3 text-sm text-foreground shadow-inner focus:border-ring focus:outline-none"
        />
      </FormField>
      {state.status !== "idle" ? (
        <p
          className={`rounded-2xl border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
              : "border-red-500/30 bg-red-500/10 text-red-200"
          }`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
