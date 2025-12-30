import FormField from "@/components/ui/FormField";
import Pill from "@/components/ui/Pill";
import SectionIntro from "@/components/ui/SectionIntro";
import InquiryTabs from "@/components/home/InquiryTabs";
import { HERO } from "@/constants/content";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mt-20 overflow-hidden rounded-[2.5rem] border border-border bg-grad-midnight p-10 shadow-2xl md:p-14"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Contact Us"
            title="Simple, calm, and quick to reply"
            description="One line is enough. Tell me where you are, what you need, and when you want to start."
            className="space-y-3"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
                Office
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {HERO.office}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
                Response Time
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {HERO.responseTime}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40">
              Call Window
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              {HERO.callWindow}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
            <Pill className="border border-border bg-card/80 px-4 py-2">
              Remote First
            </Pill>
          </div>
        </div>

        <form className="space-y-4 rounded-[2rem] border border-border bg-card/80 p-6 shadow-xl backdrop-blur-md md:p-8">
          <FormField label="Your Name">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-2xl border border-input bg-muted px-4 py-3 text-sm text-foreground shadow-inner focus:border-ring focus:outline-none"
            />
          </FormField>
          <FormField label="Email Address">
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full rounded-2xl border border-input bg-muted px-4 py-3 text-sm text-foreground shadow-inner focus:border-ring focus:outline-none"
            />
          </FormField>
          <InquiryTabs />
          <FormField label="Project Notes">
            <textarea
              rows={4}
              placeholder="Tell me about your goals, timeline, and budget range."
              className="w-full rounded-2xl border border-input bg-muted px-4 py-3 text-sm text-foreground shadow-inner focus:border-ring focus:outline-none"
            />
          </FormField>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
